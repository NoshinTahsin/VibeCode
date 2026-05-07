const fs = require("fs");
const app = fs.readFileSync("app.js", "utf8");
const html = fs.readFileSync("index.html", "utf8");

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const missingDays = days.filter((day) => !app.includes(`${day}:`));

if (missingDays.length) {
  throw new Error(`Missing weekday menus: ${missingDays.join(", ")}`);
}

["pickup-date", "menu-grid", "cart-drawer", "checkout-form", "invoice-dialog", "contact-form"].forEach((id) => {
  if (!html.includes(`id="${id}"`)) {
    throw new Error(`Missing required element #${id}`);
  }
});

["min=\"6\"", "max=\"30\"", "localStorage.setItem(\"ggInvoices\"", "dateInput.min", "dateInput.max"].forEach((snippet) => {
  if (!app.includes(snippet)) {
    throw new Error(`Missing required logic snippet: ${snippet}`);
  }
});

[
  'alt="Prepared catering dishes arranged on a kitchen table"',
  'aria-hidden="true">G&G',
  'alt="" aria-hidden="true"',
  "altText:"
].forEach((snippet) => {
  if (!html.includes(snippet) && !app.includes(snippet)) {
    throw new Error(`Missing non-text content accessibility snippet: ${snippet}`);
  }
});

[
  'role="tab"',
  'role="tabpanel"',
  'aria-controls="menu-panel"',
  'tabindex="-1"',
  "selectCategoryTab",
  "<fieldset",
  "<legend>",
  'aria-label="Cart items"',
  'aria-label="Cart totals"',
  "<caption>",
  'scope="row"',
  'scope="col"',
  "<dt>",
  "<dd>"
].forEach((snippet) => {
  if (!html.includes(snippet) && !app.includes(snippet)) {
    throw new Error(`Missing info and relationships snippet: ${snippet}`);
  }
});

console.log("Static catering site checks passed.");
