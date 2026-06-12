const { test, expect } = require('@playwright/test');
const AxeBuilder = require('@axe-core/playwright').default;
const fs = require('fs');
const path = require('path');

const versions = [
  { name: 'Version 1', url: 'https://noshintahsin.github.io/VibeCode/version-1/' },
  { name: 'Version 2', url: 'https://noshintahsin.github.io/VibeCode/version-2/' },
  { name: 'Version 3', url: 'https://noshintahsin.github.io/VibeCode/version-3/' },
  { name: 'Version 4a', url: 'https://noshintahsin.github.io/VibeCode/version-4a/' },
  { name: 'Version 5', url: 'https://noshintahsin.github.io/VibeCode/version-5/' },
  { name: 'Version 6', url: 'https://noshintahsin.github.io/VibeCode/version-6/' },
  { name: 'Version 7', url: 'https://noshintahsin.github.io/VibeCode/version-7/' },
  { name: 'Version 8', url: 'https://noshintahsin.github.io/VibeCode/version-8/' },
  { name: 'Version 9', url: 'https://noshintahsin.github.io/VibeCode/version-9/' },
  { name: 'Version 10', url: 'https://noshintahsin.github.io/VibeCode/version-10/' },
];

const LOG_FILE = process.env.CATERING_LOG_FILE
  ? path.resolve(process.env.CATERING_LOG_FILE)
  : path.join(__dirname, 'new-catering-suite-results.log');

const selectors = {
  date: 'input[type="date"]',
  add: '[data-add], button[data-action="add"], button:has-text("Add to cart"), button:has-text("Add")',
  details: '[data-details], button[data-action="details"], button:has-text("View details"), button:has-text("Details")',
  cartRoot: '#cartView, #cartItems, #cart-items, #cart-panel, #cartDrawer, #cart-drawer, #cart, [class*="cart-items"]',
  checkoutForm: '#checkoutForm, #checkout-form, form[class*="checkout"]',
  contactForm: '#contactForm, #contact-form, form[class*="contact-form"], form.form-panel',
  invoice: '#invoiceOutput, #invoice-output, #invoiceContent, #invoice-detail, #invoiceSection, #invoiceView, #invoice-dialog, [class*="invoice"]',
};

if (!fs.existsSync(LOG_FILE)) {
  fs.appendFileSync(LOG_FILE, `===== Catering + axe run: ${new Date().toISOString()} =====\n\n`);
}

async function check(version, id, name, fn) {
  try {
    await fn();
    fs.appendFileSync(LOG_FILE, `[PASS] ${version} | ${id} | ${name}\n`);
  } catch (error) {
    const reason = String(error.message || error)
      .replace(/\u001b\[[0-9;]*m/g, '')
      .split('\n')[0];
    fs.appendFileSync(LOG_FILE, `[FAIL] ${version} | ${id} | ${name} | ${reason}\n`);
    throw error;
  }
}

async function openVersion(page, version) {
  await page.goto(version.url, { waitUntil: 'domcontentloaded', timeout: 20000 });
}

async function localDate(page, days) {
  return page.evaluate((offset) => {
    const date = new Date();
    date.setDate(date.getDate() + offset);
    const local = new Date(date.getTime() - date.getTimezoneOffset() * 60000);
    return local.toISOString().slice(0, 10);
  }, days);
}

async function chooseDate(page, days = 3) {
  const input = page.locator(selectors.date).first();
  await expect(input, 'A pickup date input is required').toBeVisible();
  const targetDate = await localDate(page, days);
  if (await input.inputValue() === targetDate) return;
  await input.fill(targetDate);
  await input.dispatchEvent('change');
  const applyDate = page.locator('#viewMenuButton');
  if (await applyDate.isVisible().catch(() => false)) await applyDate.click();
  await page.waitForTimeout(300);
}

async function closeCartIfOpen(page) {
  const drawer = page.locator('#cartDrawer, #cart-drawer').first();
  const isOpen = await drawer.evaluate((element) =>
    element.getAttribute('aria-hidden') === 'false' || element.classList.contains('open')
  ).catch(() => false);
  if (!isOpen) return;

  const close = drawer.locator('[data-close-cart]').filter({ visible: true }).first();
  await close.click();
  await expect(drawer).toHaveAttribute('aria-hidden', 'true');
}

async function addItem(page, index = 0, quantity = 6) {
  await chooseDate(page);
  await closeCartIfOpen(page);
  const buttons = page.locator(selectors.add).filter({ visible: true });
  await expect(buttons.nth(index), `Add button ${index + 1} should exist`).toBeVisible();
  await buttons.nth(index).evaluate((button, value) => {
    const card = button.closest('article, li, [class*="card"], [class*="item"]');
    const input = card?.querySelector('input[type="number"]');
    if (input) {
      input.value = String(value);
      input.dispatchEvent(new Event('input', { bubbles: true }));
      input.dispatchEvent(new Event('change', { bubbles: true }));
    }
  }, quantity);
  await buttons.nth(index).click();
  await page.waitForTimeout(250);
}

async function openCart(page) {
  const drawer = page.locator('#cartDrawer, #cart-drawer').first();
  const isOpen = await drawer.evaluate((element) =>
    element.getAttribute('aria-hidden') === 'false' || element.classList.contains('open')
  ).catch(() => false);
  if (isOpen) return;

  const trigger = page.locator(
    '[data-open-cart], #cartButton, a[href="#cart"], button:has-text("View cart"), button:has-text("Review cart")'
  ).filter({ visible: true }).first();
  if (await trigger.count()) {
    await trigger.click();
    await page.waitForTimeout(200);
  }
}

async function showCheckout(page) {
  await openCart(page);
  let form = page.locator(selectors.checkoutForm).first();
  if (await form.isVisible().catch(() => false)) return form;

  const trigger = page.locator(
    '#checkout-start, a[href="#checkout"], button:has-text("Checkout"), button:has-text("Continue to checkout")'
  ).filter({ visible: true }).first();
  if (await trigger.count()) {
    await trigger.click();
    await page.waitForTimeout(200);
  }

  form = page.locator(selectors.checkoutForm).first();
  await expect(form, 'Checkout form should be available').toBeVisible();
  return form;
}

async function fillValidCheckout(form, { includePayment = true } = {}) {
  const inputs = form.locator('input:not([type="hidden"]):not([type="radio"]):not([type="checkbox"])');
  for (let i = 0; i < await inputs.count(); i += 1) {
    const input = inputs.nth(i);
    const type = (await input.getAttribute('type')) || 'text';
    const name = (await input.getAttribute('name')) || '';
    if (/payment/i.test(name) && !includePayment) continue;
    if (type === 'email') await input.fill('test@example.com');
    else if (type === 'tel') await input.fill('5550101234');
    else if (type === 'time') await input.fill('12:00');
    else if (type === 'number') await input.fill('6');
    else if (await input.isVisible()) await input.fill('Test Customer');
  }

  const selects = form.locator('select');
  for (let i = 0; i < await selects.count(); i += 1) {
    const select = selects.nth(i);
    const name = (await select.getAttribute('name')) || '';
    if (/payment/i.test(name) && !includePayment) continue;
    const options = select.locator('option');
    const count = await options.count();
    if (count > 1) await select.selectOption({ index: 1 });
    else if (count === 1) await select.selectOption({ index: 0 });
  }

  if (includePayment) {
    const payment = form.locator('input[type="radio"][name*="payment" i]').first();
    if (await payment.count()) await payment.check();
  }
}

async function submitCheckout(page, options) {
  const form = await showCheckout(page);
  await fillValidCheckout(form, options);
  await form.locator('button[type="submit"], input[type="submit"]').first().click();
  await page.waitForTimeout(300);
  return form;
}

async function placeValidOrder(page) {
  await addItem(page, 0, 6);
  await submitCheckout(page, { includePayment: true });
  const invoice = await visibleInvoice(page);
  await expect(invoice, 'A visible invoice or confirmation is required').toBeVisible();
  return invoice;
}

async function visibleInvoice(page) {
  const candidates = page.locator(selectors.invoice).filter({ visible: true });
  let fallback = candidates.first();
  for (let i = 0; i < await candidates.count(); i += 1) {
    const candidate = candidates.nth(i);
    const text = await candidate.innerText().catch(() => '');
    if (/total/i.test(text) && /invoice|order|confirmation/i.test(text)) return candidate;
    if (/invoice|order|confirmation/i.test(text) && !/no invoices saved/i.test(text)) fallback = candidate;
  }
  return fallback;
}

async function categoryItemCount(page, category) {
  return page.evaluate((label) => {
    const heading = [...document.querySelectorAll('h2, h3, h4')].find(
      (node) => node.textContent.trim().toLowerCase() === label.toLowerCase()
    );
    if (heading) {
      const section = heading.closest('section') || heading.parentElement;
      const cards = section.querySelectorAll(
        'article, [class*="item-card"], [class*="menu-card"], [data-item]'
      );
      if (cards.length) return cards.length;
      const buttons = section.querySelectorAll('button[data-add], button[data-action="add"]');
      if (buttons.length) return buttons.length;
    }

    const singular = label.toLowerCase().replace(/s$/, '');
    return [...document.querySelectorAll('article')].filter((card) => {
      const tag = card.querySelector('.tag, [class*="category"], [data-category]');
      const value = tag?.dataset.category || tag?.textContent || '';
      return value.trim().toLowerCase().replace(/s$/, '') === singular;
    }).length;
  }, category);
}

function isVersion(version, number) {
  return version.name === `Version ${number}`;
}

function menuCard(page, version) {
  if (isVersion(version, 1)) return page.locator('#menuGrid article.item-card').first();
  if (isVersion(version, 2)) return page.locator('#menuGrid article.food-card').first();
  if (isVersion(version, 3)) return page.locator('#menuGroups article.menu-item').first();
  return page.locator('article.item-card, article.food-card, article.menu-item, article.menu-card').first();
}

async function versionCategoryCount(page, version, category) {
  if (isVersion(version, 3)) {
    const group = page.locator('#menuGroups .menu-group').filter({
      has: page.getByRole('heading', { name: new RegExp(`^${category}s?$`, 'i') }),
    });
    return group.locator('article.menu-item').count();
  }
  return categoryItemCount(page, category);
}

async function cartRoot(page, version) {
  if (isVersion(version, 1)) return page.locator('#cartView');
  if (isVersion(version, 2) || isVersion(version, 3)) return page.locator('#cartItems');
  return page.locator(selectors.cartRoot).filter({ visible: true }).first();
}

async function invoiceRoot(page, version) {
  if (isVersion(version, 1)) return page.locator('#app > .cart-layout');
  if (isVersion(version, 2)) return page.locator('#invoiceOutput');
  if (isVersion(version, 3)) return page.locator('#invoiceOutput');
  return visibleInvoice(page);
}

for (const version of versions) {
  test.describe(version.name, () => {
    test('MB-01 Date selector shows valid range', async ({ page }) => {
      await check(version.name, 'MB-01', 'Date selector shows valid range', async () => {
        await openVersion(page, version);
        const input = page.locator(selectors.date).first();
        await expect(input).toBeVisible();
        await expect(input).toHaveAttribute('min', await localDate(page, 2));
        await expect(input).toHaveAttribute('max', await localDate(page, 14));
      });
    });

    test('MB-02 Each day shows its unique menu', async ({ page }) => {
      await check(version.name, 'MB-02', 'Each day shows its unique menu', async () => {
        await openVersion(page, version);
        await chooseDate(page, 2);
        const first = await page.locator('main').innerText();
        await chooseDate(page, 3);
        expect(await page.locator('main').innerText()).not.toBe(first);
      });
    });

    test('MB-03 Menu contains correct item counts', async ({ page }) => {
      await check(version.name, 'MB-03', 'Menu contains 5 protein, 3 vegetarian, and 2 sides', async () => {
        await openVersion(page, version);
        await chooseDate(page);
        expect(await versionCategoryCount(page, version, 'Protein')).toBe(5);
        expect(await versionCategoryCount(page, version, 'Vegetarian')).toBe(3);
        expect(await versionCategoryCount(page, version, 'Sides')).toBe(2);
      });
    });

    test('MB-04 Food card shows required fields', async ({ page }) => {
      await check(version.name, 'MB-04', 'Food card shows name, price, quantity, and image', async () => {
        await openVersion(page, version);
        await chooseDate(page);
        const card = menuCard(page, version);
        await expect(card).toBeVisible();
        await expect(card.locator('img, svg').first()).toBeVisible();
        await expect(card.locator('h2, h3, h4, strong').first()).toBeVisible();
        await expect(card).toContainText(/\$\d+/);

        const cardText = await card.innerText();
        const globalQuantity = page.locator(
          '#guestCount, #defaultPortions, input[name="portionSize"], input[type="number"][min="6"][max="30"]'
        ).filter({ visible: true }).first();
        const hasQuantityText = /\b(portions?|serves?|tray|people|pieces?)\b/i.test(cardText);
        expect(hasQuantityText || await globalQuantity.count() > 0).toBeTruthy();
      });
    });

    test('MB-05 Item detail view loads correctly', async ({ page }) => {
      await check(version.name, 'MB-05', 'Detail view has description, ingredients, and nutrition', async () => {
        await openVersion(page, version);
        await chooseDate(page);
        await page.locator(selectors.details).filter({ visible: true }).first().click();
        const detail = page.locator('dialog[open], [role="dialog"]:visible').first();
        await expect(detail).toContainText(/ingredient/i);
        await expect(detail).toContainText(/nutrition|calories|protein/i);
      });
    });

    test('C-01 Adding an item appears in cart', async ({ page }) => {
      await check(version.name, 'C-01', 'Added item appears in cart with quantity', async () => {
        await openVersion(page, version);
        await addItem(page, 0, 6);
        await openCart(page);
        const cart = await cartRoot(page, version);
        await expect(cart).not.toContainText(/cart is empty/i);
        if (isVersion(version, 3)) {
          await expect(cart.locator('input[type="number"]').first()).toHaveValue('6');
        } else {
          await expect(cart).toContainText(/6|1/);
        }
      });
    });

    test('C-02 Quantity can be changed in cart', async ({ page }) => {
      await check(version.name, 'C-02', 'Cart quantity updates and total changes', async () => {
        await openVersion(page, version);
        await addItem(page);
        await openCart(page);
        const cart = await cartRoot(page, version);
        const input = cart.locator('input[type="number"]').first();
        const total = isVersion(version, 2)
          ? page.locator('#grandTotal')
          : isVersion(version, 3)
            ? page.locator('#cartTotal')
            : cart;
        const beforeTotal = await total.innerText();
        if (await input.isVisible().catch(() => false)) {
          const current = Number(await input.inputValue());
          await input.fill(String(current + 1));
          await input.dispatchEvent('change');
          expect(Number(await input.inputValue())).toBe(current + 1);
        } else {
          const increase = cart.locator(
            '[data-increase], [data-action="increase"], button:has-text("+")'
          ).first();
          await expect(increase).toBeVisible();
          const quantity = cart.locator(
            '[aria-label="Current quantity"], .quantity-row span'
          ).first();
          const beforeQuantity = await quantity.innerText();
          await increase.click();
          await expect(quantity).not.toHaveText(beforeQuantity);
        }
        await expect(total).not.toHaveText(beforeTotal);
      });
    });

    test('C-03 Item can be removed from cart', async ({ page }) => {
      await check(version.name, 'C-03', 'One item can be removed while another remains', async () => {
        await openVersion(page, version);
        await addItem(page, 0);
        await addItem(page, 1);
        await openCart(page);
        const cart = await cartRoot(page, version);
        const remove = cart.locator('button:has-text("Remove"), [data-remove]').first();
        const before = await cart.innerText();
        await remove.click();
        await page.waitForTimeout(200);
        const after = await cart.innerText();
        expect(after).not.toBe(before);
        expect(after).not.toMatch(/cart is empty/i);
      });
    });

    test('C-04 Cart total reflects all items', async ({ page }) => {
      await check(version.name, 'C-04', 'Cart total reflects multiple items', async () => {
        await openVersion(page, version);
        await addItem(page, 0, 6);
        await addItem(page, 1, 7);
        await openCart(page);
        const cart = await cartRoot(page, version);
        const total = isVersion(version, 3) ? page.locator('#cartTotal') : cart;
        const twoItems = await cart.innerText();
        expect((twoItems.match(/\$\d+(?:\.\d{2})?/g) || []).length).toBeGreaterThanOrEqual(2);
        await expect(total).toContainText(/\$\d+/);
      });
    });

    for (const boundary of [
      { id: 'CH-01', value: 5, expected: 6, name: 'Minimum portion size enforced' },
      { id: 'CH-02', value: 31, expected: 30, name: 'Maximum portion size enforced' },
    ]) {
      test(`${boundary.id} ${boundary.name}`, async ({ page }) => {
        await check(version.name, boundary.id, boundary.name, async () => {
          await openVersion(page, version);
          if (isVersion(version, 1)) {
            const portions = page.locator('#guestCount');
            await portions.fill(String(boundary.value));
            await portions.dispatchEvent('change');
            await expect(portions).toHaveValue(String(boundary.expected));
            return;
          }
          await addItem(page);
          await openCart(page);
          const cart = await cartRoot(page, version);
          const boundedInput = page.locator('input[type="number"][min="6"][max="30"]').filter({ visible: true }).first();
          if (await boundedInput.isVisible().catch(() => false)) {
            await boundedInput.fill(String(boundary.value));
            await boundedInput.dispatchEvent('change');
            await page.waitForTimeout(200);
            const actual = Number(await boundedInput.inputValue());
            const valid = await boundedInput.evaluate((node) => node.checkValidity());
            expect(actual === boundary.expected || !valid).toBeTruthy();
            return;
          }

          const button = boundary.id === 'CH-01'
            ? cart.locator('[data-decrease], [data-action="decrease"], button:has-text("-")').first()
            : cart.locator('[data-increase], [data-action="increase"], button:has-text("+")').first();
          await expect(button).toBeVisible();
          if (boundary.id === 'CH-02') {
            for (let i = 0; i < 24; i += 1) await button.click();
          }
          const before = await cart.innerText();
          await button.click();
          await page.waitForTimeout(100);
          expect(await cart.innerText()).toBe(before);
        });
      });
    }

    test('CH-03 Contact info is required', async ({ page }) => {
      await check(version.name, 'CH-03', 'Blank checkout contact fields are blocked', async () => {
        await openVersion(page, version);
        await addItem(page);
        const form = await showCheckout(page);
        await form.locator('button[type="submit"], input[type="submit"]').first().click();
        const invalid = await form.locator('input:invalid').count();
        expect(invalid).toBeGreaterThanOrEqual(3);
      });
    });

    test('CH-04 Payment info is required', async ({ page }) => {
      await check(version.name, 'CH-04', 'Checkout is blocked without payment', async () => {
        await openVersion(page, version);
        await addItem(page);
        const form = await showCheckout(page);
        await fillValidCheckout(form, { includePayment: false });
        await form.locator('button[type="submit"], input[type="submit"]').first().click();
        const payment = form.locator('select[name*="payment" i]:invalid, input[name*="payment" i]:invalid');
        expect(await payment.count()).toBeGreaterThan(0);
      });
    });

    test('CH-05 Special instructions are optional', async ({ page }) => {
      await check(version.name, 'CH-05', 'Order succeeds without special instructions', async () => {
        await openVersion(page, version);
        const invoice = await placeValidOrder(page);
        await expect(invoice).toContainText(/invoice|order|confirmation/i);
      });
    });

    test('CH-06 Pickup details are captured', async ({ page }) => {
      await check(version.name, 'CH-06', 'Pickup date and time controls exist', async () => {
        await openVersion(page, version);
        await addItem(page);
        const form = await showCheckout(page);
        const pickup = form.locator('select[name*="pickup" i], input[name*="pickup" i], input[type="time"]');
        expect(await pickup.count()).toBeGreaterThan(0);
      });
    });

    test('OI-01 Invoice is shown after order', async ({ page }) => {
      await check(version.name, 'OI-01', 'Invoice appears after a successful order', async () => {
        await openVersion(page, version);
        await placeValidOrder(page);
        const invoice = await invoiceRoot(page, version);
        await expect(invoice).toContainText(/total/i);
        await expect(invoice).toContainText(/test customer/i);
      });
    });

    test('OI-02 Invoice is stored locally', async ({ page }) => {
      await check(version.name, 'OI-02', 'Placed invoice is stored locally', async () => {
        await openVersion(page, version);
        await placeValidOrder(page);
        const stored = await page.evaluate(() =>
          Object.entries(localStorage).some(([key, value]) =>
            /invoice|order/i.test(key) && /test customer/i.test(value)
          )
        );
        expect(stored).toBeTruthy();
      });
    });

    test('OI-03 Invoice matches cart contents', async ({ page }) => {
      await check(version.name, 'OI-03', 'Invoice preserves cart item and quantity', async () => {
        await openVersion(page, version);
        await chooseDate(page);
        const card = menuCard(page, version);
        const itemName = (await card.locator('h2, h3, h4, strong').first().innerText()).trim();
        expect(itemName).not.toBe('');
        await addItem(page, 0, 6);
        await submitCheckout(page, { includePayment: true });
        const invoice = await invoiceRoot(page, version);
        await expect(invoice).toContainText(itemName);
        await expect(invoice).toContainText(/6/);
        await expect(invoice).toContainText(/total/i);
      });
    });

    test('AC-01 About page loads with business info', async ({ page }) => {
      await check(version.name, 'AC-01', 'About content is accessible', async () => {
        await openVersion(page, version);
        const link = page.locator('a[href="#about"], a:has-text("About")').first();
        if (await link.count()) await link.click();
        const about = page.locator('#about, #about-page, [class*="about"], main').filter({ visible: true }).first();
        expect((await about.innerText()).trim().length).toBeGreaterThan(50);
      });
    });

    test('AC-02 Contact form submits successfully', async ({ page }) => {
      await check(version.name, 'AC-02', 'Contact form submits without JavaScript errors', async () => {
        const errors = [];
        page.on('pageerror', (error) => errors.push(error.message));
        await openVersion(page, version);
        const link = page.locator('a[href="#contact"], a:has-text("Contact")').first();
        if (await link.count()) await link.click();
        const form = page.locator(selectors.contactForm).filter({ visible: true }).first();
        await form.locator('input[name*="name" i], input[autocomplete="name"]').first().fill('Test Customer');
        await form.locator('input[type="email"], input[name*="email" i]').first().fill('test@example.com');
        await form.locator('textarea').first().fill('Test message');
        await form.locator('button[type="submit"], button:has-text("Send")').first().click();
        expect(errors).toEqual([]);
        const status = form.locator(
          '#contactStatus, #contact-status, #contact-note, [role="status"]'
        ).filter({ visible: true }).first();
        await expect(status).toContainText(/thank|sent|received|success|saved|captured/i);
      });
    });

    test('AC-03 Contact form validates required fields', async ({ page }) => {
      await check(version.name, 'AC-03', 'Blank contact form is blocked', async () => {
        await openVersion(page, version);
        const link = page.locator('a[href="#contact"], a:has-text("Contact")').first();
        if (await link.count()) await link.click();
        const form = page.locator(selectors.contactForm).filter({ visible: true }).first();
        await form.locator('button[type="submit"], button:has-text("Send")').first().click();
        expect(await form.locator(':invalid').count()).toBeGreaterThan(0);
      });
    });

    test('AC-04 Social media and phone links work', async ({ page }) => {
      await check(version.name, 'AC-04', 'Phone and social links have valid destinations', async () => {
        await openVersion(page, version);
        const phone = page.locator('a[href^="tel:"]').first();
        await expect(phone).toHaveAttribute('href', /^tel:\+?\d/);
        const social = page.locator('a[href*="instagram"], a[href*="facebook"], a[href*="twitter"], a[href*="tiktok"]');
        expect(await social.count()).toBeGreaterThan(0);
        for (let i = 0; i < await social.count(); i += 1) {
          await expect(social.nth(i)).toHaveAttribute('href', /^https?:\/\//);
        }
      });
    });

    test('AXE-01 No serious or critical accessibility violations', async ({ page }) => {
      await check(version.name, 'AXE-01', 'axe-core WCAG scan', async () => {
        await openVersion(page, version);
        const results = await new AxeBuilder({ page })
          .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
          .analyze();
        const blocking = results.violations.filter(
          (violation) => violation.impact === 'serious' || violation.impact === 'critical'
        );
        expect(
          blocking.map((violation) => ({
            id: violation.id,
            impact: violation.impact,
            targets: violation.nodes.map((node) => node.target.join(' ')),
          }))
        ).toEqual([]);
      });
    });
  });
}
