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

Show more
4:20 AM



Worked for 4m 31s
I’ll turn the existing static files into a working single-page catering site first, then run it locally to catch layout or JavaScript issues. I’m going to inspect the current files so I can fit the implementation into what’s already there.


Ran 5 commands
The workspace is effectively empty apart from Git metadata, so I’ve got a clean canvas. I’m going to create a static HTML/CSS/JS app with localStorage invoices and cart state, using real controls and responsive views rather than a placeholder landing page.

Created 4 files
The first pass is in place: menu rotation, item details, cart, checkout, invoice storage, about, and contact. I’m running the lightweight checks now, then I’ll do a quick review for anything that would feel awkward on mobile or with assistive tech.


Ran 3 commands
The checks passed. I noticed one small interaction wrinkle while reading through the flow: adding from an item detail modal should neatly move the customer into the cart, so I’m tightening that up and making the date guard a little more defensive.


Edited 1 file, ran 3 commands
Built the catering prototype as a static mobile-friendly site.

Created:


index.html

styles.css

app.js

test.js
What’s included: date-based daily menus, categorized food cards, item detail modal with ingredients and nutrition table, cart add/update/remove, checkout form, locally stored invoices in localStorage under hl-invoices, About page, and Contact page.

Verification: node test.js passes.

You can open 
index.html
 directly in your browser.


Hearth & Ladle Catering
Website
Open
4 files changed
+1326
-0
Undo
Review

app.js
index.html
styles.css
test.js




4:25 AM