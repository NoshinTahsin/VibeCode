// @ts-check
const { test } = require('@playwright/test');
const fs = require('fs');
const path = require('path');

const versions = [
  { name: 'Version 1',  url: 'https://noshintahsin.github.io/VibeCode/version-1/' },
  { name: 'Version 2',  url: 'https://noshintahsin.github.io/VibeCode/version-2/' },
  { name: 'Version 3',  url: 'https://noshintahsin.github.io/VibeCode/version-3/' },
  { name: 'Version 4a', url: 'https://noshintahsin.github.io/VibeCode/version-4a/' },
  { name: 'Version 5',  url: 'https://noshintahsin.github.io/VibeCode/version-5/' },
  { name: 'Version 6',  url: 'https://noshintahsin.github.io/VibeCode/version-6/' },
  { name: 'Version 7',  url: 'https://noshintahsin.github.io/VibeCode/version-7/' },
  { name: 'Version 8',  url: 'https://noshintahsin.github.io/VibeCode/version-8/' },
  { name: 'Version 9',  url: 'https://noshintahsin.github.io/VibeCode/version-9/' },
  { name: 'Version 10', url: 'https://noshintahsin.github.io/VibeCode/version-10/' },
];

const LOG_FILE = path.join(__dirname, 'test-results.log');

function log(version, testName, status, reason = '') {
  const line = `[${status}] ${version} | ${testName}${reason ? ' | ' + reason : ''}\n`;
  fs.appendFileSync(LOG_FILE, line);
  console.log(line.trim());
}

async function softCheck(versionName, testName, fn) {
  try {
    await fn();
    log(versionName, testName, 'PASS');
  } catch (err) {
    log(versionName, testName, 'FAIL', err.message.split('\n')[0]);
  }
}

test.beforeAll(() => {
  fs.writeFileSync(LOG_FILE, `===== Playwright Test Run: ${new Date().toISOString()} =====\n\n`);
});

for (const version of versions) {
  test(`${version.name} — full check`, async ({ page }) => {

    // ════════════════════════════════════════════════════════════════════════
    // SECTION A — BASIC FUNCTIONAL TESTS (original 11)
    // ════════════════════════════════════════════════════════════════════════

    // ── A1. Page loads without errors ────────────────────────────────────
    await softCheck(version.name, '[A1] page loads without errors', async () => {
      const errors = [];
      page.on('pageerror', (err) => errors.push(err.message));
      await page.goto(version.url, { waitUntil: 'domcontentloaded', timeout: 15000 });
      const title = await page.title();
      if (!title) throw new Error('Page has no title');
      if (errors.length > 0) throw new Error(`JS errors: ${errors.join(', ')}`);
    });

    // ── A2. Has visible heading ───────────────────────────────────────────
    await softCheck(version.name, '[A2] has a visible heading', async () => {
      await page.goto(version.url, { timeout: 15000 });
      const heading = page.locator('h1, h2').first();
      const visible = await heading.isVisible();
      if (!visible) throw new Error('No visible h1 or h2 found');
    });

    // ── A3. Navigation links exist ────────────────────────────────────────
    await softCheck(version.name, '[A3] has navigation links', async () => {
      await page.goto(version.url, { timeout: 15000 });
      const count = await page.locator('nav a, header a').count();
      if (count === 0) throw new Error('No nav/header links found');
    });

    // ── A4. Navigation links clickable ────────────────────────────────────
    await softCheck(version.name, '[A4] navigation links are clickable', async () => {
      await page.goto(version.url, { timeout: 15000 });
      const firstLink = page.locator('nav a, header a').first();
      const visible = await firstLink.isVisible();
      if (!visible) throw new Error('First nav link not visible');
      await firstLink.click();
      const bodyVisible = await page.locator('body').isVisible();
      if (!bodyVisible) throw new Error('Body not visible after click');
    });

    // ── A5. Menu section exists ───────────────────────────────────────────
    await softCheck(version.name, '[A5] has a menu section', async () => {
      await page.goto(version.url, { timeout: 15000 });
      const menu = page.locator(
        '#menu, [class*="menu"], section:has-text("Menu"), h2:has-text("Menu"), h1:has-text("Menu")'
      ).first();
      const count = await menu.count();
      if (count === 0) throw new Error('No menu section found in DOM');
    });

    // ── A6. Images have valid src ─────────────────────────────────────────
    await softCheck(version.name, '[A6] images have valid src', async () => {
      await page.goto(version.url, { timeout: 15000 });
      const images = page.locator('img');
      const count = await images.count();
      const broken = [];
      for (let i = 0; i < count; i++) {
        const src = await images.nth(i).getAttribute('src');
        if (!src) broken.push(`img[${i}] has no src`);
      }
      if (broken.length > 0) throw new Error(broken.join(', '));
    });

    // ── A7. Contact section exists ────────────────────────────────────────
    await softCheck(version.name, '[A7] has a contact section or form', async () => {
      await page.goto(version.url, { timeout: 15000 });
      const contact = page.locator(
        '#contact, #contact-page, [id*="contact"], [class*="contact"], form, section:has-text("Contact"), h2:has-text("Contact")'
      ).first();
      const count = await contact.count();
      if (count === 0) throw new Error('No contact section or form found in DOM');
    });

    // ── A8. No 404s ───────────────────────────────────────────────────────
    await softCheck(version.name, '[A8] no broken internal links (404s)', async () => {
      const failed = [];
      page.on('response', (response) => {
        if (response.status() === 404 && response.url().includes('noshintahsin.github.io')) {
          failed.push(response.url());
        }
      });
      await page.goto(version.url, { waitUntil: 'networkidle', timeout: 15000 });
      if (failed.length > 0) throw new Error(`404s found: ${failed.join(', ')}`);
    });

    // ── A9. Mobile responsive ─────────────────────────────────────────────
    await softCheck(version.name, '[A9] usable on mobile (375px)', async () => {
      await page.setViewportSize({ width: 375, height: 812 });
      await page.goto(version.url, { timeout: 15000 });
      const scrollWidth = await page.evaluate(() => document.body.scrollWidth);
      const viewportWidth = await page.evaluate(() => window.innerWidth);
      if (scrollWidth > viewportWidth + 5)
        throw new Error(`Horizontal scroll detected (scrollWidth: ${scrollWidth}, viewport: ${viewportWidth})`);
    });

    // ── A10. Lang attribute (WCAG) ────────────────────────────────────────
    await softCheck(version.name, '[A10] html has lang attribute (WCAG)', async () => {
      await page.goto(version.url, { timeout: 15000 });
      const lang = await page.locator('html').getAttribute('lang');
      if (!lang) throw new Error('Missing lang attribute on <html>');
    });

    // ── A11. Images have alt attributes (WCAG) ────────────────────────────
    await softCheck(version.name, '[A11] images have alt attributes (WCAG)', async () => {
      await page.goto(version.url, { timeout: 15000 });
      const images = page.locator('img');
      const count = await images.count();
      const missing = [];
      for (let i = 0; i < count; i++) {
        const alt = await images.nth(i).getAttribute('alt');
        if (alt === null) missing.push(`img[${i}]`);
      }
      if (missing.length > 0) throw new Error(`Missing alt on: ${missing.join(', ')}`);
    });


    // ════════════════════════════════════════════════════════════════════════
    // SECTION B — REAL LIFE CORNER CASES
    // ════════════════════════════════════════════════════════════════════════

    // ── B1. Page load time under 5 seconds ───────────────────────────────
    await softCheck(version.name, '[B1] page loads within 5 seconds', async () => {
      const start = Date.now();
      await page.goto(version.url, { waitUntil: 'domcontentloaded', timeout: 15000 });
      const duration = Date.now() - start;
      if (duration > 5000) throw new Error(`Slow load: ${duration}ms (over 5000ms)`);
    });

    // ── B2. Nav links don't all point to # (dead links) ──────────────────
    await softCheck(version.name, '[B2] nav links are not all dead (#)', async () => {
      await page.goto(version.url, { timeout: 15000 });
      const links = page.locator('nav a, header a');
      const count = await links.count();
      let deadCount = 0;
      for (let i = 0; i < count; i++) {
        const href = await links.nth(i).getAttribute('href');
        if (!href || href === '#') deadCount++;
      }
      if (deadCount === count && count > 0)
        throw new Error(`All ${count} nav links point to # (no real destinations)`);
    });

    // ── B3. Contact form has a submit button ─────────────────────────────
    await softCheck(version.name, '[B3] contact form has a submit button', async () => {
      await page.goto(version.url, { timeout: 15000 });
      const submitBtn = page.locator(
        'button[type="submit"], input[type="submit"], button:has-text("Send"), button:has-text("Submit"), button:has-text("send message")'
      ).first();
      const count = await submitBtn.count();
      if (count === 0) throw new Error('No submit button found in contact form');
    });

    // ── B4. Contact form has email input field ────────────────────────────
    await softCheck(version.name, '[B4] contact form has email field', async () => {
      await page.goto(version.url, { timeout: 15000 });
      const emailField = page.locator('input[type="email"], input[name*="email"], input[placeholder*="email" i]').first();
      const count = await emailField.count();
      if (count === 0) throw new Error('No email input field found');
    });

    // ── B5. Phone number or email address visible on page ────────────────
    await softCheck(version.name, '[B5] contact info (phone or email) visible on page', async () => {
      await page.goto(version.url, { timeout: 15000 });
      const bodyText = await page.locator('body').innerText();
      const hasPhone = /(\(?\d{3}\)?[\s\-]?\d{3}[\s\-]?\d{4})/.test(bodyText);
      const hasEmail = /[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}/.test(bodyText);
      if (!hasPhone && !hasEmail)
        throw new Error('No phone number or email address found on page');
    });

    // ── B6. Menu section is not empty ─────────────────────────────────────
    await softCheck(version.name, '[B6] menu section has content (not empty)', async () => {
      await page.goto(version.url, { timeout: 15000 });
      const menu = page.locator(
        '#menu, [class*="menu"], section:has-text("Menu")'
      ).first();
      const count = await menu.count();
      if (count === 0) throw new Error('No menu section found');
      const text = await menu.innerText();
      if (text.trim().length < 20)
        throw new Error(`Menu section appears empty or has very little content (${text.trim().length} chars)`);
    });

    // ── B7. No console errors on page load ───────────────────────────────
    await softCheck(version.name, '[B7] no JavaScript console errors', async () => {
      const errors = [];
      page.on('console', msg => {
        if (msg.type() === 'error') errors.push(msg.text());
      });
      await page.goto(version.url, { waitUntil: 'networkidle', timeout: 15000 });
      if (errors.length > 0) throw new Error(`Console errors: ${errors.slice(0, 3).join(' | ')}`);
    });

    // ── B8. Favicon exists ────────────────────────────────────────────────
    await softCheck(version.name, '[B8] favicon is present', async () => {
      await page.goto(version.url, { timeout: 15000 });
      const favicon = page.locator('link[rel*="icon"]');
      const count = await favicon.count();
      if (count === 0) throw new Error('No favicon link tag found in <head>');
    });

    // ── B9. Meta description exists ───────────────────────────────────────
    await softCheck(version.name, '[B9] meta description exists (SEO)', async () => {
      await page.goto(version.url, { timeout: 15000 });
      const meta = page.locator('meta[name="description"]');
      const count = await meta.count();
      if (count === 0) throw new Error('No meta description tag found');
      const content = await meta.getAttribute('content');
      if (!content || content.trim().length < 10)
        throw new Error('Meta description is empty or too short');
    });

    // ── B10. Viewport meta tag exists (mobile rendering) ─────────────────
    await softCheck(version.name, '[B10] viewport meta tag exists', async () => {
      await page.goto(version.url, { timeout: 15000 });
      const viewport = page.locator('meta[name="viewport"]');
      const count = await viewport.count();
      if (count === 0) throw new Error('No viewport meta tag — site may not render correctly on mobile');
    });

    // ── B11. Tablet responsive (768px) ───────────────────────────────────
    await softCheck(version.name, '[B11] usable on tablet (768px)', async () => {
      await page.setViewportSize({ width: 768, height: 1024 });
      await page.goto(version.url, { timeout: 15000 });
      const scrollWidth = await page.evaluate(() => document.body.scrollWidth);
      const viewportWidth = await page.evaluate(() => window.innerWidth);
      if (scrollWidth > viewportWidth + 5)
        throw new Error(`Horizontal scroll on tablet (scrollWidth: ${scrollWidth}, viewport: ${viewportWidth})`);
    });

    // ── B12. No images larger than 1MB (performance) ──────────────────────
    await softCheck(version.name, '[B12] no oversized images (>1MB)', async () => {
      const heavyImages = [];
      page.on('response', async (response) => {
        const url = response.url();
        if (/\.(jpg|jpeg|png|gif|webp)$/i.test(url)) {
          const headers = response.headers();
          const size = parseInt(headers['content-length'] || '0');
          if (size > 1048576) heavyImages.push(`${url} (${(size / 1048576).toFixed(1)}MB)`);
        }
      });
      await page.goto(version.url, { waitUntil: 'networkidle', timeout: 15000 });
      if (heavyImages.length > 0) throw new Error(`Oversized images: ${heavyImages.join(', ')}`);
    });

    // ── B13. Skip to main content link (keyboard users) ──────────────────
    await softCheck(version.name, '[B13] skip to main content link exists', async () => {
      await page.goto(version.url, { timeout: 15000 });
      const skipLink = page.locator(
        'a[href="#main"], a[href="#main-content"], a:has-text("Skip to"), a:has-text("skip to")'
      ).first();
      const count = await skipLink.count();
      if (count === 0) throw new Error('No skip-to-main-content link found (important for keyboard navigation)');
    });


    // ════════════════════════════════════════════════════════════════════════
    // SECTION C — WCAG ACCESSIBILITY TESTS
    // ════════════════════════════════════════════════════════════════════════

    // ── C1. Form inputs have labels ───────────────────────────────────────
    await softCheck(version.name, '[C1] form inputs have associated labels (WCAG)', async () => {
      await page.goto(version.url, { timeout: 15000 });
      const inputs = page.locator('input:not([type="hidden"]):not([type="submit"]):not([type="button"]), textarea, select');
      const count = await inputs.count();
      const unlabeled = [];
      for (let i = 0; i < count; i++) {
        const input = inputs.nth(i);
        const id = await input.getAttribute('id');
        const ariaLabel = await input.getAttribute('aria-label');
        const ariaLabelledBy = await input.getAttribute('aria-labelledby');
        const placeholder = await input.getAttribute('placeholder');
        // Check if a <label for="id"> exists
        let hasLabel = false;
        if (id) {
          const labelCount = await page.locator(`label[for="${id}"]`).count();
          hasLabel = labelCount > 0;
        }
        if (!hasLabel && !ariaLabel && !ariaLabelledBy && !placeholder) {
          unlabeled.push(`input[${i}] (id: ${id || 'none'})`);
        }
      }
      if (unlabeled.length > 0)
        throw new Error(`Inputs without labels: ${unlabeled.join(', ')}`);
    });

    // ── C2. Buttons have accessible names ────────────────────────────────
    await softCheck(version.name, '[C2] buttons have accessible names (WCAG)', async () => {
      await page.goto(version.url, { timeout: 15000 });
      const buttons = page.locator('button');
      const count = await buttons.count();
      const unnamed = [];
      for (let i = 0; i < count; i++) {
        const text = await buttons.nth(i).innerText();
        const ariaLabel = await buttons.nth(i).getAttribute('aria-label');
        const title = await buttons.nth(i).getAttribute('title');
        if (!text.trim() && !ariaLabel && !title)
          unnamed.push(`button[${i}]`);
      }
      if (unnamed.length > 0)
        throw new Error(`Buttons with no accessible name: ${unnamed.join(', ')}`);
    });

    // ── C3. Links have meaningful text (not just "click here") ───────────
    await softCheck(version.name, '[C3] links have meaningful text (WCAG)', async () => {
      await page.goto(version.url, { timeout: 15000 });
      const links = page.locator('a');
      const count = await links.count();
      const bad = [];
      const vague = ['click here', 'here', 'read more', 'more', 'link', 'this'];
      for (let i = 0; i < count; i++) {
        const text = (await links.nth(i).innerText()).trim().toLowerCase();
        const ariaLabel = await links.nth(i).getAttribute('aria-label');
        if (!ariaLabel && vague.includes(text)) bad.push(`"${text}"`);
        if (!ariaLabel && !text) bad.push(`link[${i}] has no text`);
      }
      if (bad.length > 0)
        throw new Error(`Links with poor accessible names: ${bad.join(', ')}`);
    });

    // ── C4. Headings are in logical order (no skipping h1→h3) ────────────
    await softCheck(version.name, '[C4] heading hierarchy is logical (WCAG)', async () => {
      await page.goto(version.url, { timeout: 15000 });
      const headings = await page.evaluate(() => {
        return Array.from(document.querySelectorAll('h1,h2,h3,h4,h5,h6'))
          .map(h => parseInt(h.tagName.replace('H', '')));
      });
      const skips = [];
      for (let i = 1; i < headings.length; i++) {
        if (headings[i] > headings[i - 1] + 1)
          skips.push(`h${headings[i - 1]} → h${headings[i]}`);
      }
      if (skips.length > 0)
        throw new Error(`Heading level skipped: ${skips.join(', ')}`);
    });

    // ── C5. Only one h1 on the page ───────────────────────────────────────
    await softCheck(version.name, '[C5] only one h1 on page (WCAG)', async () => {
      await page.goto(version.url, { timeout: 15000 });
      const count = await page.locator('h1').count();
      if (count === 0) throw new Error('No h1 found on page');
      if (count > 1) throw new Error(`Multiple h1 tags found (${count}) — should be only one`);
    });

    // ── C6. Links are distinguishable from body text ──────────────────────
    await softCheck(version.name, '[C6] links are visually distinguishable', async () => {
      await page.goto(version.url, { timeout: 15000 });
      const link = page.locator('a').first();
      const count = await link.count();
      if (count === 0) throw new Error('No links found on page');
      const styles = await link.evaluate(el => {
        const s = window.getComputedStyle(el);
        return {
          textDecoration: s.textDecoration,
          color: s.color,
        };
      });
      const hasUnderline = styles.textDecoration.includes('underline');
      // Links should at least be underlined (simplest check without color contrast API)
      if (!hasUnderline)
        throw new Error(`Links may not be distinguishable — no underline detected (color: ${styles.color})`);
    });

    // ── C7. Focus is visible on interactive elements ──────────────────────
    await softCheck(version.name, '[C7] interactive elements are keyboard focusable', async () => {
      await page.goto(version.url, { timeout: 15000 });
      // Tab through the page and check at least 3 elements receive focus
      let focusCount = 0;
      for (let i = 0; i < 5; i++) {
        await page.keyboard.press('Tab');
        const focused = await page.evaluate(() => document.activeElement?.tagName);
        if (focused && focused !== 'BODY') focusCount++;
      }
      if (focusCount < 3)
        throw new Error(`Only ${focusCount} elements received keyboard focus — keyboard navigation may be broken`);
    });

    // ── C8. No positive tabindex values (breaks tab order) ───────────────
    await softCheck(version.name, '[C8] no positive tabindex values (WCAG)', async () => {
      await page.goto(version.url, { timeout: 15000 });
      const badTabindex = await page.evaluate(() => {
        return Array.from(document.querySelectorAll('[tabindex]'))
          .filter(el => parseInt(el.getAttribute('tabindex')) > 0)
          .map(el => `${el.tagName.toLowerCase()}[tabindex="${el.getAttribute('tabindex')}"]`);
      });
      if (badTabindex.length > 0)
        throw new Error(`Positive tabindex found (breaks natural tab order): ${badTabindex.join(', ')}`);
    });

    // ── C9. Page has a main landmark ─────────────────────────────────────
    await softCheck(version.name, '[C9] page has a <main> landmark (WCAG)', async () => {
      await page.goto(version.url, { timeout: 15000 });
      const count = await page.locator('main, [role="main"]').count();
      if (count === 0) throw new Error('No <main> or role="main" landmark found — screen readers need this');
    });

    // ── C10. Images with meaningful content have non-empty alt text ───────
    await softCheck(version.name, '[C10] meaningful images have non-empty alt text (WCAG)', async () => {
      await page.goto(version.url, { timeout: 15000 });
      const images = page.locator('img');
      const count = await images.count();
      const emptyAlt = [];
      for (let i = 0; i < count; i++) {
        const alt = await images.nth(i).getAttribute('alt');
        const role = await images.nth(i).getAttribute('role');
        // If alt is empty string AND role is not presentation, it may be a meaningful image
        if (alt === '' && role !== 'presentation')
          emptyAlt.push(`img[${i}]`);
      }
      if (emptyAlt.length > 0)
        throw new Error(`Images with empty alt (may be meaningful): ${emptyAlt.join(', ')}`);
    });

    // ── C11. select dropdowns have labels ────────────────────────────────
    await softCheck(version.name, '[C11] select dropdowns have labels (WCAG)', async () => {
      await page.goto(version.url, { timeout: 15000 });
      const selects = page.locator('select');
      const count = await selects.count();
      const unlabeled = [];
      for (let i = 0; i < count; i++) {
        const id = await selects.nth(i).getAttribute('id');
        const ariaLabel = await selects.nth(i).getAttribute('aria-label');
        let hasLabel = false;
        if (id) {
          const labelCount = await page.locator(`label[for="${id}"]`).count();
          hasLabel = labelCount > 0;
        }
        if (!hasLabel && !ariaLabel)
          unlabeled.push(`select[${i}] (id: ${id || 'none'})`);
      }
      if (unlabeled.length > 0)
        throw new Error(`Select dropdowns without labels: ${unlabeled.join(', ')}`);
    });

    // ── C12. Page title is descriptive ────────────────────────────────────
    await softCheck(version.name, '[C12] page title is descriptive (WCAG)', async () => {
      await page.goto(version.url, { timeout: 15000 });
      const title = await page.title();
      if (!title || title.trim().length === 0)
        throw new Error('Page has no title');
      if (title.toLowerCase() === 'untitled' || title.toLowerCase() === 'index')
        throw new Error(`Page title is generic: "${title}"`);
      if (title.trim().length < 5)
        throw new Error(`Page title too short: "${title}"`);
    });

    // ── Log separator ─────────────────────────────────────────────────────
    fs.appendFileSync(LOG_FILE, '\n');
  });
}