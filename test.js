const { DAY_MENUS, addDays, clampPortions } = require("./app.js");

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

console.log("All catering site checks passed.");
