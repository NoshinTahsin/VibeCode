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
12:02 AM



Worked for 9m 1s
I’ll build this as the actual ordering experience rather than a brochure: date-aware menu, item details, cart, checkout, invoice history, plus about/contact. I’m going to inspect the current files first so the implementation fits what’s already here.


Ran 4 commands
The workspace is essentially empty apart from Git metadata, so I’m going to scaffold a plain static site in the files you already have open. I’ll use local browser storage for invoices so orders persist for the owner on this machine without needing a backend yet.

Ran Get-Content -Raw C:\Users\noshi\.codex\skills\.system\imagegen\SKILL.md
Using the imagegen skill lightly here because this website needs real visual assets, but I’m going to keep the app itself deterministic and local. I’ll generate one broad catering hero image and use curated remote food photos for individual dummy menu items so the UI has enough visual substance while content remains easy to swap later.


Ran 4 commands
I found one existing Git change: test.js is already deleted, and I’m leaving that alone since it isn’t part of this build. Next I’m adding the static app files and copying the generated hero image into a project assets folder.


Created 2 files, ran 1 command
The HTML and styling are in place now: the first viewport is the real business signal, and the menu/cart/checkout sections are ready for behavior. I’m wiring the data model and local invoice flow next, including the weekday-specific menu rules and portion/date validation.

Created 1 file
The ordering logic is mostly wired. I noticed one domain rule worth tightening while I’m here: a catering order should belong to one pickup date, so I’m adding a guard before mixed-date items can sneak into the same cart.


Edited 1 file, ran 3 commands
The syntax check passed. I’m adding one small local invoice archive now so “stored locally for the owner to view later” is usable from the site, while keeping it intentionally simple and separate from an admin system.


Edited 3 files, ran 2 commands
Built the static catering website in 
index.html
, with behavior in 
app.js
 and styling in 
styles.css
.

What’s included:

Date-aware daily menus with 10 items per day: 5 protein, 3 vegetarian, 2 sides
Date limits: 2 to 14 days ahead
Item cards with image, price, quantity, details modal, ingredients, and nutrition table
Cart add/update/remove/clear flow
Checkout form with pickup, contact, payment placeholder, portions, and special instructions
Portion validation from 6 to 30 people
Invoice generation plus local invoice archive via localStorage
About and Contact sections, including social links and a local in-site message form
Project hero asset copied to 
assets/catering-hero.png
Verification: node --check app.js passed. This is plain HTML/CSS/JS, so no dev server is needed; open 
index.html
 in the browser.

I also left the pre-existing deleted test.js Git change untouched. The hero image was generated with the built-in image tool using a photorealistic catering prep table prompt for this project.


catering-hero.png
Image · PNG

Open

Generated image 1
3 files changed
+1462
-0
Undo
Review

app.js
index.html
styles.css

Make the website WCAG 2.2 accessible.
12:50 AM



Worked for 3m 10s
I’ll do an accessibility pass across structure, keyboard behavior, focus states, color contrast, dialog semantics, form messaging, and motion preferences. First I’m going to scan the current markup/CSS/JS so the changes are precise rather than ornamental.


Ran 4 commands
I’ve got the main gaps: there’s no skip link, dynamic cart/menu updates are silent to assistive tech, some controls need more specific accessible names, and validation currently relies on browser alerts. I’m going to patch those first, then tune focus and contrast in CSS.


Edited 2 files
The page structure and styles now have a better accessibility baseline: skip link, visible focus, reduced motion support, stronger text contrast, fieldset help text, and clearer external-link labels. I’m tightening the JavaScript next so dynamic updates and validation are announced properly instead of disappearing into silence.


Edited 2 files
The interaction layer now announces cart changes, validation errors, and invoice updates through live regions, and it respects reduced-motion preferences for scripted scrolling. I’m running a quick syntax check and a few static scans for the usual accessibility footguns.


Edited 3 files, ran 9 commands
Made the site WCAG 2.2-oriented across 
index.html
, 
styles.css
, and 
app.js
.

Key improvements:

Added skip link and keyboard focus target for main content.
Strengthened focus visibility, color contrast, target sizes, and reduced-motion support.
Added live regions for menu/cart/invoice updates and checkout/contact errors.
Replaced alert() validation with accessible inline status messaging.
Improved form labeling, required-field text, helper text, fieldset/legend structure, and invalid-field announcements.
Improved dialog labeling, nutrition table captioning, cart button names, invoice archive buttons, and external link announcements.
Preserved keyboard access for cart quantity changes, item details, checkout, contact, and invoice viewing.
Verification: node --check app.js passed, and I scanned for leftover alert(), placeholder-only instructions, removed focus outlines, and stale dialog labels. No automated WCAG audit tool was installed here, so this is a code-level accessibility pass rather than a formal certification.


Harvest Table Catering
Website
Open
3 files changed
+398
-263
Undo
Review

app.js
index.html
styles.css

Here’s what changed for the WCAG 2.2 accessibility pass:


Added a Skip to main content link.

Made the main content focusable for skip-link navigation.

Added visible blue focus outlines for keyboard users.

Increased nav and cart quantity button target sizes.

Improved text contrast for muted text, footer text, and eyebrow labels.

Added reduced-motion support for users who prefer less animation.

Added aria-live regions for menu, cart, totals, invoices, and form status updates.

Added accessible validation messages for checkout and contact forms.

Removed alert() validation in favor of inline announced messages.

Added visible (required) text to required fields.

Added helper text for portions, payment notes, and special instructions.

Replaced placeholder-only instructions with real visible helper text.

Grouped pickup time and portions with a fieldset and legend.

Added clearer accessible names for Add, Details, Remove, quantity, and invoice buttons.

Improved item detail dialog labeling.

Added a nutrition table caption for screen readers.

Added screen-reader text for social links that open in a new tab.

Changed contact info wrapper to semantic address.

Added focus movement to the invoice after order placement or invoice viewing.

Made scripted scrolling respect reduced-motion preferences.

Added CSS/JS cache-busting query strings so the browser loads the current files.


Files changed:


index.html

styles.css

app.js

I see no changes in the website
1:06 AM


Worked for 32s
A lot of the accessibility pass is intentionally non-visual, but you should still see things like stronger focus rings when tabbing and “(required)” labels in forms. I’ll quickly verify the files on disk and make the accessibility changes more visibly apparent where it helps, so you can tell the update landed.


Ran 4 commands
The files definitely changed on disk, so the most likely culprit is the browser showing a cached copy or a different index.html than the workspace one. I’m going to add a small cache-busting version to the CSS/JS references so a normal refresh pulls the current accessibility build.


Edited 1 file, ran 2 commands
You were probably seeing a cached copy. The accessibility changes are definitely in the files, and I just added cache-busting query strings to 
index.html
 so the browser reloads the updated CSS/JS:

styles.css?v=wcag-20260507
app.js?v=wcag-20260507
To confirm you’re seeing the current version, refresh the page and check the checkout/contact forms. You should now visibly see labels like Full name (required), Payment method (required), and Message (required). Also press Tab from the top of the page: a Skip to main content link should appear, and focused controls should get a strong blue outline.

I also re-ran node --check app.js, and it passed.


Harvest Table Catering
Website
Open
1 file changed
Undo
Review

index.html




1:07 AM
Okay list what changed
1:07 AM


Here’s what changed for the WCAG 2.2 accessibility pass:

Added a Skip to main content link.
Made the main content focusable for skip-link navigation.
Added visible blue focus outlines for keyboard users.
Increased nav and cart quantity button target sizes.
Improved text contrast for muted text, footer text, and eyebrow labels.
Added reduced-motion support for users who prefer less animation.
Added aria-live regions for menu, cart, totals, invoices, and form status updates.
Added accessible validation messages for checkout and contact forms.
Removed alert() validation in favor of inline announced messages.
Added visible (required) text to required fields.
Added helper text for portions, payment notes, and special instructions.
Replaced placeholder-only instructions with real visible helper text.
Grouped pickup time and portions with a fieldset and legend.
Added clearer accessible names for Add, Details, Remove, quantity, and invoice buttons.
Improved item detail dialog labeling.
Added a nutrition table caption for screen readers.
Added screen-reader text for social links that open in a new tab.
Changed contact info wrapper to semantic address.
Added focus movement to the invoice after order placement or invoice viewing.
Made scripted scrolling respect reduced-motion preferences.
Added CSS/JS cache-busting query strings so the browser loads the current files.
Files changed:


index.html

styles.css

app.js

