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

const LOG_FILE = path.join(__dirname, 'catering-test-results.log');
const totals = { pass: 0, fail: 0 };

function log(version, id, name, status, reason = '') {
  if (status === 'PASS') totals.pass += 1;
  if (status === 'FAIL') totals.fail += 1;
  const line = `[${status}] ${version} | ${id} | ${name}${reason ? ' | ' + reason : ''}\n`;
  fs.appendFileSync(LOG_FILE, line);
  console.log(line.trim());
}

async function softCheck(version, id, name, fn) {
  try {
    await fn();
    log(version, id, name, 'PASS');
  } catch (err) {
    log(version, id, name, 'FAIL', err.message.split('\n')[0]);
  }
}

function daysFromToday(n) {
  const d = new Date();
  d.setDate(d.getDate() + n);
  return d.toISOString().split('T')[0];
}

test.beforeAll(() => {
  fs.writeFileSync(LOG_FILE,
    `===== Catering Test Suite Run: ${new Date().toISOString()} =====\n\n`
  );
});

test.afterAll(() => {
  fs.appendFileSync(
    LOG_FILE,
    `\n===== Summary =====\nPASS: ${totals.pass}\nFAIL: ${totals.fail}\nTOTAL: ${totals.pass + totals.fail}\n===== End of Catering Test Suite =====\n`
  );
});

test.describe.configure({ mode: 'serial' });

// ── KEY CHANGE: each check is its own test() call ──────────────────────────
// This means a timeout on MB-03 never kills MB-04, C-01, etc.
// Every single test writes to the log independently.

for (const version of versions) {
  const v = version.name;
  const BASE_URL = version.url;

  // ════════════════════════════════════════════════════════════════════════
  // SECTION 1 — MENU BROWSING
  // ════════════════════════════════════════════════════════════════════════

  test(`${v} | MB-01 | Date selector shows valid range`, async ({ page }) => {
    test.setTimeout(30000);
    await softCheck(v, 'MB-01', 'Date selector shows valid range', async () => {
      await page.goto(BASE_URL, { timeout: 15000 });
      const dateInput = page.locator('input[type="date"]').first();
      if (await dateInput.count() === 0) throw new Error('No date input found');
      const today = daysFromToday(0);
      const day2  = daysFromToday(2);
      const day14 = daysFromToday(14);
      const day15 = daysFromToday(15);
      const min = await dateInput.getAttribute('min');
      const max = await dateInput.getAttribute('max');
      if (min && min > day2)   throw new Error(`Min date ${min} should allow day+2 (${day2})`);
      if (max && max < day14)  throw new Error(`Max date ${max} should allow day+14 (${day14})`);
      if (min && min <= today) throw new Error(`Today (${today}) should not be selectable`);
      if (max && max >= day15) throw new Error(`Day+15 (${day15}) should be disabled`);
    });
  });

  test(`${v} | MB-02 | Switching days changes menu`, async ({ page }) => {
    test.setTimeout(30000);
    await softCheck(v, 'MB-02', 'Switching days changes menu items', async () => {
      await page.goto(BASE_URL, { timeout: 15000 });
      const dateInput = page.locator('input[type="date"]').first();
      if (await dateInput.count() === 0) throw new Error('No date input found');
      await dateInput.fill(daysFromToday(2));
      await dateInput.dispatchEvent('change');
      await page.waitForTimeout(1000);
      const menu1 = await page.locator('body').innerText();
      await dateInput.fill(daysFromToday(3));
      await dateInput.dispatchEvent('change');
      await page.waitForTimeout(1000);
      const menu2 = await page.locator('body').innerText();
      if (menu1 === menu2) throw new Error('Menu did not change when switching dates');
    });
  });

  test(`${v} | MB-03 | Menu has protein, veg, and sides categories`, async ({ page }) => {
    test.setTimeout(30000);
    await softCheck(v, 'MB-03', 'Menu has protein, vegetarian, and sides categories', async () => {
      await page.goto(BASE_URL, { timeout: 15000 });
      const dateInput = page.locator('input[type="date"]').first();
      if (await dateInput.count() === 0) throw new Error('No date input found');
      await dateInput.fill(daysFromToday(3));
      await dateInput.dispatchEvent('change');
      await page.waitForTimeout(1500);
      const bodyText = await page.locator('body').innerText();
      if (!/protein/i.test(bodyText))    throw new Error('No "Protein" category found');
      if (!/vegetarian/i.test(bodyText)) throw new Error('No "Vegetarian" category found');
      if (!/sides?/i.test(bodyText))     throw new Error('No "Sides" category found');
    });
  });

  test(`${v} | MB-04 | Item cards have name, price, quantity, image`, async ({ page }) => {
    test.setTimeout(30000);
    await softCheck(v, 'MB-04', 'Food item cards have name, price, quantity, and image', async () => {
      await page.goto(BASE_URL, { timeout: 15000 });
      const dateInput = page.locator('input[type="date"]').first();
      if (await dateInput.count() === 0) throw new Error('No date input found');
      await dateInput.fill(daysFromToday(3));
      await dateInput.dispatchEvent('change');
      await page.waitForTimeout(1500);
      const bodyText = await page.locator('body').innerText();
      if (!/\$\d+(\.\d{2})?/.test(bodyText)) throw new Error('No prices found on menu cards');
      const qtyInput = await page.locator('input[type="number"], button[class*="add"], button:has-text("Add")').count();
      if (qtyInput === 0) throw new Error('No quantity input or add button found');
      const menuImages = await page.locator('#menu img, [class*="menu"] img, [class*="item"] img').count();
      if (menuImages === 0) throw new Error('No images found on menu item cards');
    });
  });

  test(`${v} | MB-05 | Item detail has description and ingredients`, async ({ page }) => {
    test.setTimeout(30000);
    await softCheck(v, 'MB-05', 'Item detail view has description and ingredients', async () => {
      await page.goto(BASE_URL, { timeout: 15000 });
      const dateInput = page.locator('input[type="date"]').first();
      if (await dateInput.count() === 0) throw new Error('No date input found');
      await dateInput.fill(daysFromToday(3));
      await dateInput.dispatchEvent('change');
      await page.waitForTimeout(1500);
      const itemCard = page.locator('[class*="item"] h3, [class*="dish"] h3, [class*="card"] h3').first();
      if (await itemCard.count() === 0) throw new Error('No item cards found to click');
      await itemCard.click();
      await page.waitForTimeout(800);
      const bodyText = await page.locator('body').innerText();
      if (!/ingredient/i.test(bodyText)) throw new Error('No "ingredients" text found after clicking item');
    });
  });

  // ════════════════════════════════════════════════════════════════════════
  // SECTION 2 — CART
  // ════════════════════════════════════════════════════════════════════════

  test(`${v} | C-01 | Added item appears in cart`, async ({ page }) => {
    test.setTimeout(30000);
    await softCheck(v, 'C-01', 'Added item appears in cart', async () => {
      await page.goto(BASE_URL, { timeout: 15000 });
      const dateInput = page.locator('input[type="date"]').first();
      if (await dateInput.count() === 0) throw new Error('No date input found');
      await dateInput.fill(daysFromToday(3));
      await dateInput.dispatchEvent('change');
      await page.waitForTimeout(1500);
      const portionsInput = page.locator('input[type="number"][min]').first();
      if (await portionsInput.count() > 0) {
        await portionsInput.fill('6');
        await portionsInput.dispatchEvent('change');
        await page.waitForTimeout(500);
      }
      const cartBefore = await page.locator('nav').innerText().catch(() => '');
      const addBtn = page.locator('button:has-text("Add"), button[class*="add"]').first();
      if (await addBtn.count() === 0) throw new Error('No "Add" button found');
      await addBtn.click();
      await page.waitForTimeout(500);
      const cartAfter = await page.locator('nav').innerText().catch(() => '');
      const cartText = await page.locator('#cart, [class*="cart-items"]').first().innerText().catch(() => '');
      if (cartText.trim().length < 5 && cartBefore === cartAfter)
        throw new Error('Cart appears unchanged after adding item');
    });
  });

  test(`${v} | C-02 | Item quantity updates in cart`, async ({ page }) => {
    test.setTimeout(30000);
    await softCheck(v, 'C-02', 'Item quantity updates in cart', async () => {
      await page.goto(BASE_URL, { timeout: 15000 });
      const dateInput = page.locator('input[type="date"]').first();
      if (await dateInput.count() === 0) throw new Error('No date input found');
      await dateInput.fill(daysFromToday(3));
      await dateInput.dispatchEvent('change');
      await page.waitForTimeout(1500);
      const portionsInput = page.locator('input[type="number"][min]').first();
      if (await portionsInput.count() > 0) {
        await portionsInput.fill('6');
        await portionsInput.dispatchEvent('change');
        await page.waitForTimeout(500);
      }
      const addBtn = page.locator('button:has-text("Add"), button[class*="add"]').first();
      if (await addBtn.count() === 0) throw new Error('No add button found');
      await addBtn.click();
      await page.waitForTimeout(500);
      const cartQty = page.locator('#cart input[type="number"], [class*="cart"] input[type="number"]').first();
      if (await cartQty.count() === 0) throw new Error('No quantity input in cart');
      const before = await cartQty.inputValue();
      await cartQty.fill(String(parseInt(before) + 1));
      await cartQty.dispatchEvent('change');
      await page.waitForTimeout(500);
      const after = await cartQty.inputValue();
      if (after === before) throw new Error(`Quantity did not change — still ${after}`);
    });
  });

  test(`${v} | C-03 | Item can be removed from cart`, async ({ page }) => {
    test.setTimeout(30000);
    await softCheck(v, 'C-03', 'Item can be removed from cart', async () => {
      await page.goto(BASE_URL, { timeout: 15000 });
      const dateInput = page.locator('input[type="date"]').first();
      if (await dateInput.count() === 0) throw new Error('No date input found');
      await dateInput.fill(daysFromToday(3));
      await dateInput.dispatchEvent('change');
      await page.waitForTimeout(1500);
      const portionsInput = page.locator('input[type="number"][min]').first();
      if (await portionsInput.count() > 0) {
        await portionsInput.fill('6');
        await portionsInput.dispatchEvent('change');
        await page.waitForTimeout(500);
      }
      const addBtns = page.locator('button:has-text("Add"), button[class*="add"]');
      if (await addBtns.count() === 0) throw new Error('No add buttons found');
      await addBtns.first().click();
      await page.waitForTimeout(300);
      if (await addBtns.count() > 1) { await addBtns.nth(1).click(); await page.waitForTimeout(300); }
      const removeBtn = page.locator(
        '#cart button:has-text("Remove"), #cart button[class*="remove"], [class*="cart"] button:has-text("×"), [class*="cart"] button:has-text("✕")'
      ).first();
      if (await removeBtn.count() === 0) throw new Error('No remove button found in cart');
      const before = await page.locator('#cart, [class*="cart-items"]').first().innerText().catch(() => '');
      await removeBtn.click();
      await page.waitForTimeout(500);
      const after = await page.locator('#cart, [class*="cart-items"]').first().innerText().catch(() => '');
      if (before === after) throw new Error('Cart unchanged after clicking remove');
    });
  });

  test(`${v} | C-04 | Cart total is displayed`, async ({ page }) => {
    test.setTimeout(30000);
    await softCheck(v, 'C-04', 'Cart total is displayed', async () => {
      await page.goto(BASE_URL, { timeout: 15000 });
      const dateInput = page.locator('input[type="date"]').first();
      if (await dateInput.count() === 0) throw new Error('No date input found');
      await dateInput.fill(daysFromToday(3));
      await dateInput.dispatchEvent('change');
      await page.waitForTimeout(1500);
      const portionsInput = page.locator('input[type="number"][min]').first();
      if (await portionsInput.count() > 0) {
        await portionsInput.fill('6');
        await portionsInput.dispatchEvent('change');
        await page.waitForTimeout(500);
      }
      const addBtns = page.locator('button:has-text("Add"), button[class*="add"]');
      await addBtns.first().click();
      await page.waitForTimeout(300);
      const cartText = await page.locator('#cart, [class*="cart"]').first().innerText().catch(() => '');
      if (!/\$\d+(\.\d{2})?/.test(cartText) && !/total/i.test(cartText))
        throw new Error('No total amount found in cart');
    });
  });

  // ════════════════════════════════════════════════════════════════════════
  // SECTION 3 — CHECKOUT
  // ════════════════════════════════════════════════════════════════════════

  test(`${v} | CH-01 | Min 6 portions enforced`, async ({ page }) => {
    test.setTimeout(30000);
    await softCheck(v, 'CH-01', 'Cannot checkout with fewer than 6 portions', async () => {
      await page.goto(BASE_URL, { timeout: 15000 });
      const portionsInput = page.locator('input[type="number"][min], input[id*="portion" i]').first();
      if (await portionsInput.count() === 0) throw new Error('No portions input found');
      const min = await portionsInput.getAttribute('min');
      if (min && parseInt(min) === 6) return;
      await portionsInput.fill('3');
      await portionsInput.dispatchEvent('change');
      await page.waitForTimeout(500);
      const checkoutBtn = page.locator('button:has-text("Checkout"), button:has-text("Review"), button[class*="checkout"]').first();
      if (await checkoutBtn.count() > 0) {
        await checkoutBtn.click();
        await page.waitForTimeout(500);
        if (!/minimum|at least 6|6 (people|guests|portions)/i.test(await page.locator('body').innerText()))
          throw new Error('No error shown for under-minimum portions');
      }
    });
  });

  test(`${v} | CH-02 | Max 30 portions enforced`, async ({ page }) => {
    test.setTimeout(30000);
    await softCheck(v, 'CH-02', 'Cannot checkout with more than 30 portions', async () => {
      await page.goto(BASE_URL, { timeout: 15000 });
      const portionsInput = page.locator('input[type="number"][max], input[id*="portion" i]').first();
      if (await portionsInput.count() === 0) throw new Error('No portions input found');
      const max = await portionsInput.getAttribute('max');
      if (max && parseInt(max) === 30) return;
      await portionsInput.fill('50');
      await portionsInput.dispatchEvent('change');
      await page.waitForTimeout(500);
      const checkoutBtn = page.locator('button:has-text("Checkout"), button:has-text("Review"), button[class*="checkout"]').first();
      if (await checkoutBtn.count() > 0) {
        await checkoutBtn.click();
        await page.waitForTimeout(500);
        if (!/maximum|no more than 30|30 (people|guests|portions)/i.test(await page.locator('body').innerText()))
          throw new Error('No error shown for over-maximum portions');
      }
    });
  });

  test(`${v} | CH-03 | Blank contact fields blocked`, async ({ page }) => {
    test.setTimeout(30000);
    await softCheck(v, 'CH-03', 'Checkout blocked when contact fields are blank', async () => {
      await page.goto(BASE_URL, { timeout: 15000 });
      const checkoutSection = page.locator('#checkout, [class*="checkout"]').first();
      if (await checkoutSection.count() === 0) throw new Error('No checkout section found');
      const submitBtn = page.locator('#checkout button[type="submit"], #checkout button:has-text("Place"), #checkout button:has-text("Order")').first();
      if (await submitBtn.count() === 0) throw new Error('No submit button in checkout');
      const inputs = page.locator('#checkout input[type="text"], #checkout input[type="email"], #checkout input[type="tel"]');
      for (let i = 0; i < await inputs.count(); i++) await inputs.nth(i).fill('');
      await submitBtn.click();
      await page.waitForTimeout(500);
      const nativeInvalid = await page.evaluate(() => !!document.querySelector('#checkout input:invalid'));
      if (!nativeInvalid && !/required|please fill|enter your|invalid/i.test(await page.locator('body').innerText()))
        throw new Error('No validation shown for blank contact fields');
    });
  });

  test(`${v} | CH-04 | Payment required at checkout`, async ({ page }) => {
    test.setTimeout(30000);
    await softCheck(v, 'CH-04', 'Checkout blocked when payment not selected', async () => {
      await page.goto(BASE_URL, { timeout: 15000 });
      const paymentSelect = page.locator('select[id*="payment" i], select[name*="payment" i], [class*="payment"] select').first();
      if (await paymentSelect.count() === 0) throw new Error('No payment selector found');
      const val = await paymentSelect.inputValue();
      if (!val || /select/i.test(val)) {
        const submitBtn = page.locator('#checkout button:has-text("Place"), #checkout button:has-text("Order")').first();
        if (await submitBtn.count() > 0) {
          await submitBtn.click();
          await page.waitForTimeout(500);
          if (!/payment|select a method|required/i.test(await page.locator('body').innerText()))
            throw new Error('No validation shown when payment not selected');
        }
      }
    });
  });

  test(`${v} | CH-05 | Special instructions is optional`, async ({ page }) => {
    test.setTimeout(30000);
    await softCheck(v, 'CH-05', 'Special instructions field is optional', async () => {
      await page.goto(BASE_URL, { timeout: 15000 });
      const specialField = page.locator('textarea[id*="special" i], textarea[name*="special" i], textarea[placeholder*="instruction" i]').first();
      if (await specialField.count() === 0) throw new Error('No special instructions field found');
      if (await specialField.getAttribute('required') !== null)
        throw new Error('Special instructions has "required" — should be optional');
    });
  });

  test(`${v} | CH-06 | Pickup section exists in checkout`, async ({ page }) => {
    test.setTimeout(30000);
    await softCheck(v, 'CH-06', 'Pickup section exists in checkout', async () => {
      await page.goto(BASE_URL, { timeout: 15000 });
      const pickupSection = page.locator('#checkout [id*="pickup" i], #checkout [class*="pickup" i], select:has-text("AM"), select[id*="time" i]').first();
      if (await pickupSection.count() === 0) throw new Error('No pickup section found in checkout');
      if (!await pickupSection.isVisible()) throw new Error('Pickup section exists but is not visible');
    });
  });

  // ════════════════════════════════════════════════════════════════════════
  // SECTION 4 — ORDER & INVOICE
  // ════════════════════════════════════════════════════════════════════════

  test(`${v} | OI-01 | Invoice element exists in DOM`, async ({ page }) => {
    test.setTimeout(30000);
    await softCheck(v, 'OI-01', 'Invoice or confirmation element exists in DOM', async () => {
      await page.goto(BASE_URL, { timeout: 15000 });
      const invoiceEl = page.locator('[id*="invoice" i], [class*="invoice" i], [id*="confirmation" i], [class*="order-summary" i]').first();
      if (await invoiceEl.count() === 0) throw new Error('No invoice or confirmation element found');
    });
  });

  test(`${v} | OI-02 | Invoice storage mechanism exists`, async ({ page }) => {
    test.setTimeout(30000);
    await softCheck(v, 'OI-02', 'Invoice storage mechanism exists', async () => {
      await page.goto(BASE_URL, { timeout: 15000 });
      const hasLocalStorage = await page.evaluate(() =>
        Object.keys(localStorage).some(k => /order|invoice|cart/i.test(k))
      );
      const adminView = await page.locator('[id*="invoice" i], [class*="invoice-list" i], [class*="orders" i]').count();
      if (!hasLocalStorage && adminView === 0)
        throw new Error('No invoice storage (localStorage) or invoice list UI found');
    });
  });

  test(`${v} | OI-03 | Invoice element has content slots`, async ({ page }) => {
    test.setTimeout(30000);
    await softCheck(v, 'OI-03', 'Invoice element has content/template slots', async () => {
      await page.goto(BASE_URL, { timeout: 15000 });
      const invoiceEl = page.locator('[id*="invoice" i], [class*="invoice" i], [class*="order-summary" i]').first();
      if (await invoiceEl.count() === 0) throw new Error('No invoice element found');
      const html = await invoiceEl.innerHTML().catch(() => '');
      if (html.length < 50) throw new Error('Invoice element appears empty');
    });
  });

  // ════════════════════════════════════════════════════════════════════════
  // SECTION 5 — ABOUT & CONTACT
  // ════════════════════════════════════════════════════════════════════════

  test(`${v} | AC-01 | About section has business content`, async ({ page }) => {
    test.setTimeout(30000);
    await softCheck(v, 'AC-01', 'About section has visible business content', async () => {
      await page.goto(BASE_URL, { timeout: 15000 });
      const aboutLink = page.locator('a[href="#about"], nav a:has-text("About")').first();
      if (await aboutLink.count() > 0) await aboutLink.click();
      await page.waitForTimeout(500);
      const aboutSection = page.locator('#about, [class*="about"], section:has-text("About")').first();
      if (await aboutSection.count() === 0) throw new Error('No about section found');
      const text = await aboutSection.innerText();
      if (text.trim().length < 50) throw new Error(`About section too short (${text.trim().length} chars)`);
    });
  });

  test(`${v} | AC-02 | Contact form submits without JS errors`, async ({ page }) => {
    test.setTimeout(30000);
    await softCheck(v, 'AC-02', 'Contact form accepts valid input without JS errors', async () => {
      await page.goto(BASE_URL, { timeout: 15000 });
      const nameField  = page.locator('[id*="contact"] input[type="text"], form input[name*="name" i]').first();
      const emailField = page.locator('[id*="contact"] input[type="email"], form input[type="email"]').first();
      const msgField   = page.locator('[id*="contact"] textarea, form textarea').first();
      if (await nameField.count() === 0)  throw new Error('No name field in contact form');
      if (await emailField.count() === 0) throw new Error('No email field in contact form');
      if (await msgField.count() === 0)   throw new Error('No message field in contact form');
      await nameField.fill('Test User');
      await emailField.fill('test@example.com');
      await msgField.fill('Playwright automation test message.');
      const errors = [];
      page.on('pageerror', err => errors.push(err.message));
      const sendBtn = page.locator('button:has-text("Send"), button[type="submit"]').last();
      if (await sendBtn.count() === 0) throw new Error('No send button found');
      await sendBtn.click();
      await page.waitForTimeout(1000);
      if (errors.length > 0) throw new Error(`JS errors after submit: ${errors.join(', ')}`);
    });
  });

  test(`${v} | AC-03 | Blank contact form is blocked`, async ({ page }) => {
    test.setTimeout(30000);
    await softCheck(v, 'AC-03', 'Contact form blocked when fields are blank', async () => {
      await page.goto(BASE_URL, { timeout: 15000 });
      const sendBtn = page.locator('[id*="contact"] button, [class*="contact"] button:has-text("Send")').last();
      if (await sendBtn.count() === 0) throw new Error('No send button in contact form');
      const fields = page.locator('[id*="contact"] input, [id*="contact"] textarea, [class*="contact"] input, [class*="contact"] textarea');
      for (let i = 0; i < await fields.count(); i++) await fields.nth(i).fill('');
      await sendBtn.click();
      await page.waitForTimeout(500);
      const nativeInvalid = await page.evaluate(() => !!document.querySelector('input:invalid, textarea:invalid'));
      if (!nativeInvalid && !/required|please fill|cannot be blank/i.test(await page.locator('body').innerText()))
        throw new Error('No validation shown when contact form submitted blank');
    });
  });

  test(`${v} | AC-04 | Phone and social links have valid hrefs`, async ({ page }) => {
    test.setTimeout(30000);
    await softCheck(v, 'AC-04', 'Phone and social media links have valid hrefs', async () => {
      await page.goto(BASE_URL, { timeout: 15000 });
      const phoneLink   = page.locator('a[href^="tel:"]').first();
      const socialLinks = page.locator('a[href*="instagram"], a[href*="facebook"], a[href*="twitter"], a[href*="tiktok"]');
      if (await phoneLink.count() === 0 && await socialLinks.count() === 0)
        throw new Error('No phone or social media links found');
      if (await phoneLink.count() > 0) {
        const href = await phoneLink.getAttribute('href');
        if (!href || href === 'tel:') throw new Error('Phone link has empty tel: href');
      }
      if (await socialLinks.count() > 0) {
        const href = await socialLinks.first().getAttribute('href');
        if (!href || href === '#') throw new Error('Social link points to # — not a real URL');
      }
    });
  });

  // ── log version separator ──────────────────────────────────────────────
  test.afterEach(async () => {
    // small separator between versions in the log (only adds one after last test of each version)
  });
}
