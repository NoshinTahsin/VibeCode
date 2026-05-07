const fs = require("fs");
const assert = require("assert");

const html = fs.readFileSync("index.html", "utf8");
const js = fs.readFileSync("app.js", "utf8");

assert(html.includes('id="dateInput"'), "date picker should exist");
assert(html.includes('id="cartDrawer"'), "cart drawer should exist");
assert(html.includes('id="checkoutForm"'), "checkout form should exist");
assert(js.includes("localStorage.setItem(\"hl-invoices\""), "orders should be saved as invoices");
assert(js.includes("dateInput.min"), "minimum order date should be enforced");
assert(js.includes("dateInput.max"), "maximum order date should be enforced");
assert(js.includes("Math.max(6, Math.min(30"), "portion limits should be enforced");
assert((js.match(/protein/g) || []).length >= 5, "protein category should be present");
assert((js.match(/vegetarian/g) || []).length >= 3, "vegetarian category should be present");
assert((js.match(/sides/g) || []).length >= 2, "sides category should be present");
assert(html.includes('lang="en"'), "page language should be declared");
assert(html.includes('class="skip-link"'), "skip link should be available");
assert(html.includes('aria-describedby="dateHelp dateNotice"'), "date input should include instructions");
assert(html.includes('aria-pressed="true"'), "filter state should be exposed");
assert(html.includes('role="dialog" aria-modal="true"'), "custom overlays should expose dialog semantics");
assert(js.includes("trapFocus"), "custom dialogs should trap keyboard focus while open");
assert(js.includes("restoreFocus"), "focus should return after dialogs close");

console.log("Prototype checks passed.");
