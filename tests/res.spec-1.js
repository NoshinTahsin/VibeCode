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

// Log file path — saved next to the test file
const LOG_FILE = path.join(__dirname, 'test-results.log');

// Helper: write a result line to the log file
function log(version, testName, status, reason = '') {
  const line = `[${status}] ${version} | ${testName}${reason ? ' | ' + reason : ''}\n`;
  fs.appendFileSync(LOG_FILE, line);
  console.log(line.trim());
}

// Helper: soft check — never throws, just logs pass/fail
async function softCheck(versionName, testName, fn) {
  try {
    await fn();
    log(versionName, testName, 'PASS');
  } catch (err) {
    log(versionName, testName, 'FAIL', err.message.split('\n')[0]);
  }
}

// Clear log file before each full run
test.beforeAll(() => {
  fs.writeFileSync(LOG_FILE, `===== Playwright Test Run: ${new Date().toISOString()} =====\n\n`);
});

for (const version of versions) {
  test(`${version.name} — full check`, async ({ page }) => {

    // ── 1. Page loads ──────────────────────────────────────────────────────
    await softCheck(version.name, 'page loads without errors', async () => {
      const errors = [];
      page.on('pageerror', (err) => errors.push(err.message));
      await page.goto(version.url, { waitUntil: 'domcontentloaded', timeout: 15000 });
      const title = await page.title();
      if (!title) throw new Error('Page has no title');
      if (errors.length > 0) throw new Error(`JS errors: ${errors.join(', ')}`);
    });

    // ── 2. Has visible heading ─────────────────────────────────────────────
    await softCheck(version.name, 'has a visible heading', async () => {
      await page.goto(version.url, { timeout: 15000 });
      const heading = page.locator('h1, h2').first();
      const visible = await heading.isVisible();
      if (!visible) throw new Error('No visible h1 or h2 found');
    });

    // ── 3. Navigation links exist ──────────────────────────────────────────
    await softCheck(version.name, 'has navigation links', async () => {
      await page.goto(version.url, { timeout: 15000 });
      const count = await page.locator('nav a, header a').count();
      if (count === 0) throw new Error('No nav/header links found');
    });

    // ── 4. Navigation links clickable ─────────────────────────────────────
    await softCheck(version.name, 'navigation links are clickable', async () => {
      await page.goto(version.url, { timeout: 15000 });
      const firstLink = page.locator('nav a, header a').first();
      const visible = await firstLink.isVisible();
      if (!visible) throw new Error('First nav link not visible');
      await firstLink.click();
      const bodyVisible = await page.locator('body').isVisible();
      if (!bodyVisible) throw new Error('Body not visible after click');
    });

    // ── 5. Menu section exists ─────────────────────────────────────────────
    await softCheck(version.name, 'has a menu section', async () => {
      await page.goto(version.url, { timeout: 15000 });
      const menu = page.locator(
        '#menu, [class*="menu"], section:has-text("Menu"), h2:has-text("Menu"), h1:has-text("Menu")'
      ).first();
      const count = await menu.count();
      if (count === 0) throw new Error('No menu section found in DOM');
    });

    // ── 6. Images have valid src ───────────────────────────────────────────
    await softCheck(version.name, 'images have valid src', async () => {
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

    // ── 7. Contact section exists ──────────────────────────────────────────
    await softCheck(version.name, 'has a contact section or form', async () => {
      await page.goto(version.url, { timeout: 15000 });
      const contact = page.locator(
        '#contact, #contact-page, [id*="contact"], [class*="contact"], form, section:has-text("Contact"), h2:has-text("Contact")'
      ).first();
      const count = await contact.count();
      if (count === 0) throw new Error('No contact section or form found in DOM');
    });

    // ── 8. No 404s ─────────────────────────────────────────────────────────
    await softCheck(version.name, 'no broken internal links (404s)', async () => {
      const failed = [];
      page.on('response', (response) => {
        if (response.status() === 404 && response.url().includes('noshintahsin.github.io')) {
          failed.push(response.url());
        }
      });
      await page.goto(version.url, { waitUntil: 'networkidle', timeout: 15000 });
      if (failed.length > 0) throw new Error(`404s found: ${failed.join(', ')}`);
    });

    // ── 9. Mobile responsive ───────────────────────────────────────────────
    await softCheck(version.name, 'usable on mobile (375px)', async () => {
      await page.setViewportSize({ width: 375, height: 812 });
      await page.goto(version.url, { timeout: 15000 });
      const scrollWidth = await page.evaluate(() => document.body.scrollWidth);
      const viewportWidth = await page.evaluate(() => window.innerWidth);
      if (scrollWidth > viewportWidth + 5)
        throw new Error(`Horizontal scroll detected (scrollWidth: ${scrollWidth}, viewport: ${viewportWidth})`);
    });

    // ── 10. Lang attribute (WCAG) ──────────────────────────────────────────
    await softCheck(version.name, 'html has lang attribute (WCAG)', async () => {
      await page.goto(version.url, { timeout: 15000 });
      const lang = await page.locator('html').getAttribute('lang');
      if (!lang) throw new Error('Missing lang attribute on <html>');
    });

    // ── 11. Images have alt attributes (WCAG) ─────────────────────────────
    await softCheck(version.name, 'images have alt attributes (WCAG)', async () => {
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

    // ── Log separator ──────────────────────────────────────────────────────
    fs.appendFileSync(LOG_FILE, '\n');
  });
}