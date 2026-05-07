I want you to build a website for a small business. The business is a homemade food catering service that receives orders from customers, and prepares the food for pickup. Here are the features I want you to build:

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

Show more
1:27 AM



Worked for 5m 11s
I’ll build this as a usable static catering ordering site in the existing HTML/CSS/JS files. I’m going to inspect the current structure first so the new pieces fit cleanly.


Ran 5 commands
The workspace is effectively empty except for .git, so I’m going to create the app from scratch: a static index.html, styles.css, app.js, plus a small test.js for the date/menu/cart rules. The site will persist placed invoices in localStorage, which matches the “stored locally” requirement without adding an admin surface.

Created 4 files
The first pass is in place. I spotted one thing before verification: the browser app and Node test file need a cleaner boundary so the tests can import the pure rule data without pretending a browser DOM exists.

Edited 1 file
Now I’m running the rule tests and doing a quick browser-free smoke check of the generated files. If anything shakes loose, I’ll tighten it before handing it over.


Ran 3 commands
The functional checks are passing. I’m going to make one small product-level adjustment now: checkout should capture the overall guest count with the 6-30 rule, so the invoice reflects party size as well as per-item portions.

Edited 2 files
That’s the core build complete. I’m doing one final verification pass against the menu-count rules and a quick file status check so the handoff is crisp.


Ran 2 commands
Built the catering website as a static app:


index.html
 for the full customer flow

styles.css
 for the responsive design

app.js
 for menus, item details, cart, checkout, invoices, contact form behavior

test.js
 for the menu/date/portion rules
It includes unique daily menus, 10 items per day with the required category split, item detail dialogs, cart updates/removal, checkout with guest count/pickup/contact/payment/instructions, local invoice storage via localStorage, About, and Contact sections.

Verification passed:

All catering site checks passed.
You can open 
index.html
 directly in the browser.


Gather & Ladle Catering
Website
Open
4 files changed
+1266
-0
Undo
Review

app.js
index.html
styles.css
test.js

Make the website WCAG 2.2 accessible by following these Success Criteria (SC).

SC 1.1.1 Non-text Content
SC 1.3.1 Info and Relationships
1.3.2 Meaningful Sequence
1.3.3 Sensory Characteristics
1.3.4 Orientation
1.3.5 Identify Input Purpose
1.4.1 Use of Color
1.4.2 Audio Control
1.4.3 Contrast (Minimum)
1.4.4 Resize Text
1.4.5 Images of Text
1.4.6 Contrast (Enhanced)
1.4.8 Visual Presentation
1.4.9 Images of Text (No Exception)
1.4.10 Reflow
1.4.11 Non-text Contrast
1.4.12 Text Spacing
2.2.1 Timing Adjustable
2.2.2 Pause, Stop, Hide
2.4.1 Bypass Blocks
2.4.2 Page Titled
2.4.4 Link Purpose (In Context)
2.4.5 Multiple Ways
2.4.6 Headings and Labels
2.4.8 Location
2.4.9 Link Purpose (Link Only)
2.4.10 Section Headings
2.5.3 Label in Name
2.5.5 Target Size (Enhanced)
2.5.8 Target Size (Minimum)
3.1.1 Language of Page
3.1.2 Language of Parts
3.1.4 Abbreviations
3.2.2 On Input
3.2.5 Change on Request
3.3.2 Labels or Instructions
4.1.2 Name, Role, Value

Show more
2:15 AM


Worked for 4m 50s
I’ll do an accessibility pass across the static app, focusing on semantic structure, keyboard/screen-reader behavior, labels, contrast, target sizes, reflow, and avoiding unexpected changes on input. I’ll read the current files in parallel, then patch the relevant HTML/CSS/JS.


Ran 4 commands
The page already has good bones: language, title, real form controls, no audio/video/timers. I’m tightening the parts that matter for WCAG: adding a skip link and footer navigation, explicit instructions and descriptions, live regions, clearer button names, stronger focus/contrast styles, table captions, and changing date switching so the cart is only cleared after an explicit “View menu” request.

The HTML has a little encoding debris from the earlier separator character, so the cleanest fix is to replace the document with an accessible version rather than patching around corrupted text.

Created 1 file
Next I’m adjusting the visual layer for contrast, visible keyboard focus, larger touch targets, reduced-motion preference, and robust reflow. These are the quiet accessibility bits that make the page feel steadier without changing the business flow.

Edited 1 file
I’m moving into the behavior now: the date selector will wait for the “View menu” button, cart opening will expose state through aria-expanded, generated controls will include item names in their accessible names, and invoices/detail tables will get captions and scoped headers.

Edited 1 file
A couple of small follow-through edits are needed after the behavior patch: the checkout/invoice sections should be programmatically focusable after they appear, and the cart quantity layout needs to match its now-explicit label/input/button structure.


Edited 2 files
I’m running the existing automated checks now, then I’ll add a few targeted accessibility checks to catch regressions like missing skip links, unlabeled controls, and absent table captions.


Ran 3 commands
The rule tests still pass. I’m adding a lightweight static accessibility test layer now, so future content edits are more likely to preserve the WCAG scaffolding instead of accidentally undoing it.

Edited 3 files
The accessibility checks are in place. I’m running them now along with a quick scan for accidental non-ASCII or encoding junk, since that bit can quietly sneak back into generated markup.


Ran 3 commands
One last polish pass: contact links are inline text links, so I’m making those targets at least 44 CSS pixels high too. That brings them in line with the enhanced target-size criterion without changing the layout much.


Edited 1 file, ran 2 commands
Implemented the WCAG 2.2 accessibility pass across the site.

Key updates:

Added skip link, clearer page title, landmark/section labels, footer navigation, and current-section status.
Improved form labels, instructions, autocomplete/input purpose, required-field language, and live regions.
Made date changes happen only after the explicit “View menu” button request.
Added accessible cart state with aria-expanded, controlled panel references, and better generated button names.
Added table captions/scoped headers for nutrition facts and invoices.
Strengthened contrast, focus indicators, target sizes, reduced-motion support, and small-screen reflow.
Removed encoding junk/non-ASCII separators.
Updated files:


index.html

styles.css

app.js

test.js
Verification passed:

All catering site checks passed.

Gather & Ladle Catering | Pickup Orders
Website
Open
4 files changed
+345
-98
Undo
Review

app.js
index.html
styles.css
test.js




2:20 AM
So what changed?
2:49 AM


I made the catering site much more accessible and predictable.

In plain terms:

Added a Skip to main content link for keyboard users.
Improved page structure with clearer headings, landmarks, section labels, and footer navigation.
Made forms more accessible with explicit labels, required-field text, autocomplete hints, and helper instructions.
Changed the date picker behavior so selecting a date does not immediately wipe the cart; the menu updates only when the customer clicks View menu for selected date.
Improved cart accessibility with live updates, clearer button names, and aria-expanded state.
Added accessible names/captions to the item details dialog, nutrition table, and invoice table.
Strengthened color contrast, visible keyboard focus, touch target sizes, mobile reflow, and reduced-motion support.
Cleaned up a text encoding glitch from the earlier separator character.
Added accessibility checks to 
test.js
 so these basics are harder to accidentally break later.
I verified it with node test.js, and all checks pass.


