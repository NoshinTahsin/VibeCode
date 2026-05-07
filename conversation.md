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

Make sure that the website conforms to WCAG 2.2 accessibility guidelines. You’ll find the guidelines here: https://www.w3.org/TR/WCAG22/.
Specifically, maintain these Success Criteria (SC):

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

Show less
4:57 AM



Worked for 8m 25s
I’ll build this directly in the existing static files, first reading what’s already there so the new site fits the project instead of bulldozing it. After that I’ll wire the menu/cart/checkout flow and do a quick accessibility-oriented pass.


Ran 4 commands, searched web 1 time
There aren’t any project files in the workspace yet, so this is a clean static build. I checked the W3C WCAG 2.2 reference and I’m shaping the implementation around semantic structure, keyboard-friendly controls, visible focus, strong contrast, responsive reflow, labeled inputs, and non-timing-based interactions.

I’m going to use the imagegen skill for one reusable food-table visual asset, then keep individual menu images lightweight and accessible in the page. That gives the site a real visual anchor without turning the file set into a pile of placeholder art.

Ran Get-Content -Raw C:\Users\noshi\.codex\skills\.system\imagegen\SKILL.md
The generated hero image is in place visually; now I’m creating the static app files and moving the site behavior into app.js: date-based menu rotation, detail dialogs, cart editing, checkout validation, invoice rendering, and local invoice storage.


Ran 4 commands
I’m making the main edits now: a semantic index.html, a responsive high-contrast stylesheet, and a dependency-free JavaScript app. The cart and invoices will use localStorage, so the business can come back to the same browser and still see placed-order records.


Created 3 files
The core site is assembled. I’m doing a verification pass now: checking JavaScript syntax, scanning for accessibility-sensitive markup mistakes, and looking for places where the mobile layout or form behavior could surprise someone using keyboard or assistive tech.


Ran 3 commands
One behavioral edge came up in review: a user could add items for one date, change the calendar, and accidentally checkout for a different date. I’m tightening that so the cart is explicitly tied to its pickup date, and starting a new date’s order replaces the old date’s cart.


Edited 2 files
The cart-date behavior is now explicit, and the close control’s accessible name matches its visible label. I’m running one more lightweight validation pass so I can hand you something usable, not just “probably fine.”


Ran 3 commands
Syntax is clean, the files stayed ASCII, and git sees the new static site files plus the generated hero asset. I’m checking whether a local browser automation package is available for a quick render smoke test; if it isn’t, I’ll stick to the static checks and give you the direct file to open.

Ran node -e "try { require('playwright'); console.log('playwright available') } catch (error) { console.log('playwright unavailable') }"
Built the static catering site in 
index.html
, 
styles.css
, and 
app.js
. It includes the date-specific menu, categorized items, item detail dialog with ingredients/nutrition, cart editing, checkout, generated invoice display, local invoice storage, About, and Contact sections.

I also added the generated hero image at 
assets/catering-hero.png
. The site is designed as a plain static website, so you can open 
index.html
 directly in a browser.

Verification done: node --check app.js passed, files stayed ASCII, and I used the W3C WCAG 2.2 reference: 
https://www.w3.org/TR/WCAG22/
. Playwright was not installed locally, so I could not run an automated browser screenshot pass.


catering-hero.png
Image · PNG

Open

Generated image 1
3 files changed
+1511
-0
Undo
Review

app.js
index.html
styles.css




5:05 AM