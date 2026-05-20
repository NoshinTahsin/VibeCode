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




