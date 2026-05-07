const { DAY_MENUS, addDays, clampPortions } = require("./app.js");
const fs = require("fs");

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

Object.entries(DAY_MENUS).forEach(([day, items]) => {
  assert(items.length === 10, `Day ${day} should have 10 items`);
  assert(items.filter((item) => item[0] === "protein").length === 5, `Day ${day} should have 5 proteins`);
  assert(items.filter((item) => item[0] === "vegetarian").length === 3, `Day ${day} should have 3 vegetarian items`);
  assert(items.filter((item) => item[0] === "sides").length === 2, `Day ${day} should have 2 sides`);
});

assert(clampPortions(1) === 6, "Portions should clamp to minimum 6");
assert(clampPortions(99) === 30, "Portions should clamp to maximum 30");
assert(clampPortions(12) === 12, "Portions should preserve valid quantities");

const now = new Date("2026-05-07T12:00:00");
assert(addDays(now, 2).getDate() === 9, "Minimum order date should be 2 days ahead");
assert(addDays(now, 14).getDate() === 21, "Maximum order date should be 14 days ahead");

const html = fs.readFileSync("index.html", "utf8");
const css = fs.readFileSync("styles.css", "utf8");
const js = fs.readFileSync("app.js", "utf8");

assert(html.includes('lang="en"'), "Page language should be declared");
assert(html.includes("Skip to main content"), "Skip link should be present");
assert(html.includes('id="mainContent"'), "Main content target should be present");
assert(html.includes('aria-controls="cartPanel"'), "Cart button should identify the controlled panel");
assert(html.includes('aria-expanded="false"'), "Cart button should expose expanded state");
assert(html.includes('autocomplete="name"'), "Name fields should identify input purpose");
assert(html.includes('autocomplete="email"'), "Email fields should identify input purpose");
assert(html.includes('autocomplete="tel"'), "Phone field should identify input purpose");
assert(html.includes('aria-live="polite"'), "Dynamic status areas should use polite live regions");
assert(html.includes('aria-label="Food item details"'), "Dialog should have an accessible name");
assert(css.includes(".skip-link"), "Skip link should be styled");
assert(css.includes(":focus-visible"), "Visible keyboard focus should be styled");
assert(css.includes("prefers-reduced-motion"), "Reduced motion preference should be honored");
assert(css.includes("min-height: 44px"), "Interactive targets should meet minimum target sizing");
assert(js.includes("<caption>Nutrition facts"), "Nutrition table should include a caption");
assert(js.includes("<caption>Invoice line items"), "Invoice table should include a caption");
assert(js.includes('scope="col"'), "Invoice column headers should be scoped");
assert(js.includes('scope="row"'), "Nutrition row headers should be scoped");

console.log("All catering site checks passed.");
