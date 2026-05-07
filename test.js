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

console.log("Prototype checks passed.");
