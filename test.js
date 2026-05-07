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
assert(html.includes('id="heroImageAlt"'), "hero background image should have a text alternative");
assert(html.includes('aria-describedby="heroImageAlt"'), "hero should reference the background image text alternative");
assert(js.includes("function foodImageAlt"), "menu images should use intentional alt text");
assert(js.includes('alt="${foodImageAlt(food)}"'), "food images should render descriptive alt attributes");
assert(js.includes('<img src="${entry.image}" alt="">'), "cart thumbnails should be ignored by assistive technology");
assert(html.includes('role="group" aria-label="Menu category filters"'), "filter controls should expose their group relationship");
assert(html.includes('aria-pressed="true"'), "active filter should expose selected state");
assert(html.includes('<dl class="about-stats"'), "business stats should use description list semantics");
assert(js.includes('<dl class="food-meta">'), "food card metadata should use description list semantics");
assert(js.includes('<ul class="ingredient-list">'), "ingredients should be exposed as a list");
assert(js.includes('<dl class="cart-item-meta">'), "cart item metadata should use description list semantics");
assert(js.includes("<dt>Subtotal</dt>"), "cart summary labels and values should be associated");
assert(js.includes('chip.setAttribute("aria-pressed", String(isActive))'), "filter state should update programmatically");
assert((js.match(/protein/g) || []).length >= 5, "protein category should be present");
assert((js.match(/vegetarian/g) || []).length >= 3, "vegetarian category should be present");
assert((js.match(/sides/g) || []).length >= 2, "sides category should be present");

console.log("Prototype checks passed.");
