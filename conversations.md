I want you to build an accessible mobile-friendly website for a small business. The business is a homemade food catering service that receives orders from customers, and prepares the food for pickup. Here are the features I want you to build:

1. Customer can view the menu on date they want catering on.
2. Customer can view the menu as a list of food items, categorized into protein, vegetarian and sides, with necessary information like name, price, quantity and image.
3. Customer can also view details for a food item upon selection, complete with description, ingredients and a nutritional facts table.
4. Customer can add food items to a cart.
5. Customer can view and update their cart - change quantity of individual items and remove items.
6. Customer can check out their cart by specifying pick up, contact information, payment method and information, special instructions and so on.
7. Once an order is placed, an invoice is generated to both show the customer and stored locally for the business owner to view later.
8. Customer can learn more about the business in an About page.
9. Customer can contact the owner through social media, phone, or an in-site form in a Contact page.

A few functional logics include:

1. Each day of the week has a unique menu.
2. Customer can order at least two days and at most 2 weeks before their delivery.
3. Each day’s menu will include 10 food items, including 5 protein items, 3 vegetarian items, and 2 sides.
4. The maximum portion size for an order is 30 people, and the minimum is 6.

Things to avoid:

1. No need to implement user profiles.
2. No need to create an admin view.
3. No need for an actual payment feature.

For the food items, about information and contact information, you can generate dummy data. We will work on actual content later.

Make sure that the website conforms to WCAG 2.2 accessibility guidelines. You’ll find the guidelines here: https://www.w3.org/TR/WCAG22/

Show more
5:50 AM


Worked for 6m 9s
I’ll build this as a real usable static ordering experience, and I’ll use the WCAG reference you linked as the accessibility baseline while I inspect the current files.

Searched web 1 time
I’ve got the WCAG 2.2 reference open. The main points I’ll bake in are semantic structure, labeled controls, visible focus, keyboard-friendly dialogs and carts, status messages, alt text, reflow on small screens, and non-color-only states.

This folder is currently empty apart from Git metadata, so I’m creating the site from scratch: one HTML entry point, a stylesheet, and a small JavaScript app for menus, cart, checkout, invoice storage, and page navigation.

Created 1 file
The structure is in place now. Next I’m adding the responsive visual system and accessibility states: high-contrast controls, touch-sized buttons, reflowing grids, skip link, focus styles, and modal/cart layouts that stay usable on narrow screens.

Created 1 file
The interface styling is drafted. I’m wiring the app behavior now: weekday menu generation, date guardrails, item details, cart updates, checkout validation, and local invoice persistence in localStorage for later owner retrieval.

Created 1 file
The core JavaScript is in. I’m going through a verification pass now, starting with syntax and then tightening anything that could trip accessibility or mobile behavior.

Syntax is clean. I noticed a few non-ASCII characters slipped into the new files, so I’m normalizing those now and adding a small keyboard trap for the custom cart drawer so tab focus stays inside it while it’s open.


Edited 2 files
One logic point needed a firmer interpretation: the catering date is singular for an order, so I’m preventing mixed-date carts and making the cart’s 6-to-30 portion controls explicit per menu item. That keeps checkout coherent without adding profiles or an admin area.

Edited 1 file
Built the static catering website from scratch. You can open index.html directly in a browser.

What’s included:

Date-based weekday menus with 10 items per day: 5 protein, 3 vegetarian, 2 sides.
Date ordering rules: 2 to 14 days ahead.
Accessible menu cards, item detail dialogs, nutrition tables, and ingredient lists.
Cart drawer with quantity updates, removal, totals, and single-date order protection.
Checkout form with pickup, contact, payment-method note, and special instructions.
Invoice generation shown to the customer and saved in localStorage under ghc_invoices.
About and Contact pages, including social/contact links and an in-site form.
WCAG-minded structure based on the W3C WCAG 2.2 reference: semantic headings, labels, focus states, keyboard-friendly dialogs/drawer, status messages, alt/hidden decorative imagery, reflowing mobile layout, and touch-sized controls.
Verified with:

node --check app.js
git diff --check
Source referenced: W3C WCAG 2.2: https://www.w3.org/TR/WCAG22/


Golden Hearth Catering
Website
Open

Edited 3 files
+1,445
-7
Undo
Review
index.html
styles.css
app.js


Make the website WCAG 2.2 accessible by following Success Criteria 1.1.1 Non-text Content. https://www.w3.org/WAI/WCAG22/Understanding/non-text-content.html
6:26 AM


Worked for 44s
I’ll use the WCAG page you linked as the source of truth, then inspect the site for images/icons/media that need text alternatives or hiding from assistive tech.


Ran 2 commands, searched web 1 time
The first search found a compact static site: index.html, styles.css, and app.js. My pattern tripped over PowerShell quoting, so I’m reading the relevant files directly and then I’ll patch the actual markup.


Ran 3 commands
The only meaningful 1.1.1 issue I found is in the generated food illustrations: they’re decorative, but the inline SVGs are exposed as images with an empty label before being nested in an aria-hidden wrapper. I’m tightening that markup so assistive tech can ignore the artwork cleanly while the actual menu item names and descriptions remain the text alternative.

Edited 1 file
I’ve made the SVG change. Now I’m doing a quick pass over the markup for remaining non-text content patterns: images, SVGs, media, canvases, image inputs, and ARIA labels.


Ran 3 commands
Updated app.js (line 153) for WCAG 2.2 SC 1.1.1.

The generated food SVGs are decorative because the menu item name, description, ingredients, and nutrition are already available as text. I changed the SVG from an exposed empty role="img" to aria-hidden="true" focusable="false", matching the WCAG guidance that decorative non-text content should be ignored by assistive technology.

Verified there are no <img>, media, canvas, iframe, or image input elements needing text alternatives. Source used: W3C Understanding SC 1.1.1 Non-text Content: https://www.w3.org/WAI/WCAG22/Understanding/non-text-content.html


Edited app.js
+1
-1
Undo
Review


Now make it accessible following Success Criteria 1.3.1 Info and Relationships. https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html
6:28 AM


Worked for 55s
I’ll use the W3C understanding doc you linked, then audit the existing structure for relationships that are currently only visual: grouped controls, generated cards, tables, headings, and form associations.

Searched web 1 time
The W3C guidance here is about preserving visual structure in code: headings, labels, groups, tables, lists, regions, and control relationships. I’m going to patch the generated UI where visual grouping currently isn’t as explicit programmatically.


Ran 2 commands
I found three worthwhile upgrades: make each generated menu card name its article from its heading, encode price/category as a description list instead of loose spans, and expose the cart quantity controls as a named group. I’m also tightening the invoice table so each order row has a row header.

Edited 1 file
The semantic markup is patched; I’m updating the CSS so the description list keeps the same compact visual layout without relying on non-semantic spans.

Edited 1 file
One CSS detail is worth correcting for accessibility robustness: display: contents can be spotty in accessibility trees, so I’m switching that wrapper styling to a normal flex layout.

Edited 1 file
Now I’m checking the resulting diff and scanning the page for the main 1.3.1 structures again: labels, fieldsets, headings, tables, and grouped controls.


Ran 2 commands
The diff is tidy and focused. I’m doing a quick JavaScript syntax check now, since these changes touch template literals in generated markup.

Ran node --check app.js
Implemented WCAG 2.2 SC 1.3.1 improvements.

Changed:

Menu cards now use aria-labelledby tied to each card heading.
Price/category metadata is now a semantic <dl> instead of loose visual spans.
Cart portion controls are exposed as a named role="group".
Invoice order rows now use row headers with scope="row".
Verified with node --check app.js.

Source used: W3C Understanding SC 1.3.1 Info and Relationships: https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html


Edited 2 files
+33
-8
Undo
Review
app.js
styles.css

Now make it accessible following Success Criteria 1.4.10 Reflow. https://www.w3.org/WAI/WCAG22/Understanding/reflow.html
6:29 AM


Worked for 1m 18s
I’ll treat the W3C reflow page as the benchmark, then audit the layout for anything likely to force two-dimensional scrolling at narrow widths or 400% zoom equivalents.


Ran 2 commands, searched web 1 time
The main reflow risks are the data tables and a few flex/grid children that can resist shrinking when text gets long. I’m going to isolate tables in their own scroll containers, let text wrap more aggressively, and add small-screen safeguards so the page itself doesn’t require horizontal scrolling.


Edited 2 files
The reflow patch is in place. I’m checking syntax and the final diff now; if there’s a local browser test harness available I’ll use it, otherwise I’ll verify the responsive rules statically.


Ran 3 commands
There isn’t a Playwright CLI installed in this workspace, so I’ll avoid pulling in new tooling. I’m doing one more static pass for fixed-size pieces that could still exceed a 320px viewport.


Ran 3 commands
Implemented WCAG 2.2 SC 1.4.10 Reflow updates in styles.css (line 17) and app.js (line 257).

Key changes:

Wrapped nutrition and invoice tables in their own scrollable regions so table overflow stays local instead of forcing page-level two-dimensional scrolling.
Added responsive wrapping safeguards for long text, labels, buttons, table cells, and links.
Added min-width: 0 protections for flex/grid children that can otherwise resist shrinking.
Kept dialogs and narrow layouts constrained to the viewport.
Verified:

node --check app.js
git diff --check
I couldn’t run a browser reflow test because Playwright isn’t installed in this workspace. Source used: https://www.w3.org/WAI/WCAG22/Understanding/reflow.html


Edited 2 files
+63
-18
Undo
Review
app.js
styles.css




6:31 AM
Now make it accessible following Success Criteria 4.1.2 Name, Role, Value. https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html

Worked for 1m 13s
I’ll use the W3C Name, Role, Value doc as the benchmark, then check the custom interactive pieces: cart drawer, nav toggle, cart count, generated buttons, dialogs, and scroll regions.

Searched web 1 time
The strongest 4.1.2 gap I see is the custom cart drawer/button pairing: the drawer dialog needs its own programmatic name, and the cart button should expose its dynamic “open cart / item count” state directly on the control. I’m patching that now.


Edited 1 file, ran 2 commands
The static markup now names the drawer dialog and cart button correctly. I’m updating the cart render code so the cart button’s accessible name changes whenever its value changes.

Edited 1 file
I’m also making the repeated generated controls more explicit: “Details,” “Add to cart,” and “Remove” all have names today, but adding item-specific accessible names makes the scripted controls clearer to assistive tech.

Edited 1 file
One last state detail: since the cart button controls a drawer, I’m exposing the open/closed state with aria-expanded and updating it when the drawer opens or closes.


Edited 2 files
The 4.1.2 changes are in. I’m running syntax and diff checks, plus a scan of ARIA-bearing elements to catch any obvious name/role/state mistakes.


Ran 4 commands
Implemented WCAG 2.2 SC 4.1.2 Name, Role, Value updates.

Changed:

Cart drawer dialog now has its own aria-labelledby name.
Cart open button now exposes aria-controls, aria-expanded, and a dynamic aria-label with item/portion counts.
Generated menu buttons now have item-specific accessible names like “View details for…” and “Add … to cart.”
Cart remove buttons now identify the item being removed.
Cart open/closed state is updated when the drawer opens and closes.
Verified:

node --check app.js
git diff --check
Source used: https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html


Golden Hearth Catering
Website
Open

Edited 2 files
+14
-9
Undo
Review
index.html
app.js











