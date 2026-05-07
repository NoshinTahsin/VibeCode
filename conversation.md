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
11:25 PM



Worked for 4m 56s
I’ll build this as a real local web app, then start it so you can click through the menu, cart, checkout, invoice history, About, and Contact flows. I’m going to inspect the workspace first to see what framework is already here, then I’ll fit the implementation to it.


Ran 2 commands
The workspace is essentially empty except for Git metadata, so I’m going to create a self-contained static site: no dependency install, no backend needed, and invoices will persist in browser local storage for the owner to view later. Next I’m laying down the app files and wiring the ordering rules directly into the client logic.


Ran 2 commands
I noticed Git already records a deleted test.js; I’m leaving that alone since it wasn’t part of this request. I’m about to add three new site files: structure, styling, and the ordering/invoice logic.

Created 3 files
The first pass is in place: daily menus, item detail modal, cart editing, checkout, generated invoice, About, and Contact. I’m doing a quick verification pass now for syntax and the ordering flow edges, then I’ll tighten anything that feels awkward.


Ran 4 commands
The JavaScript syntax check is clean. I found one product detail I want to improve before calling it done: invoices are being stored, but I’m adding a lightweight local invoice archive route so the owner can retrieve them later without turning the project into a full admin system.


Edited 2 files, ran 3 commands
Built the catering website as a static app:

index.html
styles.css
app.js
It includes daily menus, categorized item cards, item detail modals with ingredients and nutrition facts, cart add/update/remove, checkout with pickup/contact/payment notes, generated invoices saved in localStorage, a local invoice archive at #invoices, plus About and Contact pages.

Verification: node --check app.js passes. I left the existing deleted test.js Git state untouched. Since this is a self-contained static site, you can open index.html directly in your browser.


Juniper Table Catering
Website
Open
3 files changed
+1363
-0
Undo
Review

app.js
index.html
styles.css




