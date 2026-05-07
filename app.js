const DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const CATEGORY_LABELS = {
  protein: "Protein",
  vegetarian: "Vegetarian",
  sides: "Sides"
};

const imageBank = [
  "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1625944525533-473f1a3d54e7?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1601000938259-9e92002320fb?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80"
];

const weeklyMenus = {
  Sunday: makeMenu("Sunday", [
    ["protein", "Citrus Herb Chicken", 15, "Roasted chicken with lemon, parsley, and pan jus."],
    ["protein", "Maple Braised Pork", 17, "Slow-braised pork shoulder with maple cider glaze."],
    ["protein", "Garlic Butter Salmon", 19, "Oven-roasted salmon with dill and roasted garlic butter."],
    ["protein", "Smoky Beef Meatballs", 16, "Tender beef meatballs in tomato paprika sauce."],
    ["protein", "Turkey Kofta Tray", 15, "Spiced turkey skewers with yogurt herb drizzle."],
    ["vegetarian", "Mushroom Lentil Loaf", 13, "Savory lentil loaf with cremini mushrooms and herbs."],
    ["vegetarian", "Spinach Ricotta Shells", 14, "Baked pasta shells with tomato basil sauce."],
    ["vegetarian", "Chickpea Tagine", 13, "Warm chickpeas, apricot, carrot, and saffron broth."],
    ["sides", "Rosemary Potatoes", 6, "Crisp roasted potatoes with rosemary salt."],
    ["sides", "Honey Carrot Salad", 6, "Shaved carrot salad with herbs and toasted seeds."]
  ]),
  Monday: makeMenu("Monday", [
    ["protein", "Lemongrass Chicken", 15, "Grilled chicken thighs with lemongrass marinade."],
    ["protein", "Beef Bulgogi", 18, "Sweet soy-marinated beef with scallion and sesame."],
    ["protein", "Coconut Curry Shrimp", 19, "Shrimp simmered in coconut curry sauce."],
    ["protein", "Ginger Pork Patties", 16, "Seared pork patties with ginger garlic glaze."],
    ["protein", "Miso Turkey Meatloaf", 15, "Turkey meatloaf with miso mushroom gravy."],
    ["vegetarian", "Tofu Peanut Noodles", 13, "Chilled noodles with tofu, vegetables, and peanut sauce."],
    ["vegetarian", "Sweet Potato Curry", 13, "Sweet potatoes and greens in yellow curry."],
    ["vegetarian", "Sesame Broccoli Rice", 12, "Brown rice, broccoli, edamame, and sesame dressing."],
    ["sides", "Cucumber Herb Salad", 6, "Cool cucumbers with rice vinegar and mint."],
    ["sides", "Scallion Jasmine Rice", 5, "Steamed jasmine rice with scallion oil."]
  ]),
  Tuesday: makeMenu("Tuesday", [
    ["protein", "Adobo Chicken", 15, "Chicken braised with vinegar, soy, garlic, and bay."],
    ["protein", "Carnitas Tray", 17, "Crisp-edged pulled pork with citrus and oregano."],
    ["protein", "Ancho Beef Roast", 18, "Tender beef with ancho chile sauce."],
    ["protein", "Chili Lime Cod", 19, "Roasted cod with chili lime butter."],
    ["protein", "Salsa Verde Turkey", 15, "Pulled turkey in tomatillo salsa."],
    ["vegetarian", "Poblano Bean Bake", 13, "Black beans, poblanos, corn, and melted jack."],
    ["vegetarian", "Roasted Cauliflower Tacos", 12, "Spiced cauliflower with lime crema."],
    ["vegetarian", "Pumpkin Seed Enchiladas", 14, "Vegetable enchiladas with pepita sauce."],
    ["sides", "Cilantro Lime Rice", 5, "Long-grain rice with lime and cilantro."],
    ["sides", "Charred Corn Salad", 6, "Corn, peppers, cotija, and lime."]
  ]),
  Wednesday: makeMenu("Wednesday", [
    ["protein", "Rosemary Chicken Cutlets", 15, "Pan-seared chicken with rosemary gravy."],
    ["protein", "Beef Short Rib Ragu", 19, "Slow short rib sauce for pasta or polenta."],
    ["protein", "Italian Sausage Peppers", 16, "Sausage roasted with peppers and onions."],
    ["protein", "Parmesan Turkey Bake", 15, "Turkey patties with marinara and parmesan."],
    ["protein", "Lemon Caper Trout", 19, "Roasted trout with lemon caper sauce."],
    ["vegetarian", "Eggplant Parmesan", 14, "Layered eggplant, tomato sauce, and mozzarella."],
    ["vegetarian", "White Bean Pesto Pasta", 13, "Pasta with basil pesto and cannellini beans."],
    ["vegetarian", "Farro Stuffed Peppers", 13, "Peppers filled with farro, tomato, and herbs."],
    ["sides", "Garlic Green Beans", 6, "Green beans tossed with garlic oil."],
    ["sides", "Creamy Polenta", 5, "Soft polenta with parmesan."]
  ]),
  Thursday: makeMenu("Thursday", [
    ["protein", "Tandoori Chicken", 15, "Yogurt-marinated chicken with warming spices."],
    ["protein", "Lamb Keema", 18, "Ground lamb with peas, ginger, and garam masala."],
    ["protein", "Butter Chicken", 16, "Chicken simmered in tomato cream sauce."],
    ["protein", "Coriander Fish Curry", 19, "White fish in coriander coconut curry."],
    ["protein", "Spiced Turkey Kebabs", 15, "Ground turkey kebabs with mint chutney."],
    ["vegetarian", "Paneer Pea Masala", 14, "Paneer and peas in spiced tomato sauce."],
    ["vegetarian", "Chana Saag", 13, "Chickpeas and spinach with cumin and ginger."],
    ["vegetarian", "Vegetable Biryani", 13, "Fragrant rice layered with vegetables and herbs."],
    ["sides", "Cumin Basmati Rice", 5, "Basmati rice scented with cumin."],
    ["sides", "Kachumber Salad", 6, "Tomato, cucumber, onion, and lemon."]
  ]),
  Friday: makeMenu("Friday", [
    ["protein", "BBQ Chicken Quarters", 15, "Roasted chicken with smoky house sauce."],
    ["protein", "Coffee Rub Brisket", 19, "Sliced brisket with coffee spice bark."],
    ["protein", "Cajun Shrimp", 19, "Shrimp with cajun butter and herbs."],
    ["protein", "Brown Sugar Ham", 16, "Baked ham with brown sugar mustard glaze."],
    ["protein", "Hot Honey Turkey", 15, "Turkey tenders with hot honey finish."],
    ["vegetarian", "Mac and Greens Bake", 13, "Creamy pasta with collards and cheddar."],
    ["vegetarian", "BBQ Jackfruit", 13, "Pulled jackfruit with smoky sauce."],
    ["vegetarian", "Red Beans and Rice", 12, "Slow red beans with peppers and spices."],
    ["sides", "Buttermilk Slaw", 5, "Cabbage slaw with buttermilk dressing."],
    ["sides", "Cornbread Squares", 5, "Tender cornbread with honey butter."]
  ]),
  Saturday: makeMenu("Saturday", [
    ["protein", "Herb Roast Turkey", 16, "Sliced turkey breast with thyme gravy."],
    ["protein", "Peppercorn Beef Tips", 18, "Beef tips with peppercorn pan sauce."],
    ["protein", "Apricot Glazed Chicken", 15, "Chicken with apricot mustard glaze."],
    ["protein", "Crispy Pork Belly", 19, "Pork belly bites with apple relish."],
    ["protein", "Pesto Salmon", 19, "Salmon with basil pesto crust."],
    ["vegetarian", "Squash Lasagna", 14, "Butternut squash, ricotta, and sage lasagna."],
    ["vegetarian", "Harvest Grain Bowl", 13, "Quinoa, greens, apple, walnuts, and vinaigrette."],
    ["vegetarian", "Tomato Chickpea Bake", 13, "Chickpeas baked with tomato and feta."],
    ["sides", "Maple Brussels Sprouts", 6, "Roasted sprouts with maple mustard."],
    ["sides", "Apple Fennel Salad", 6, "Crisp apple, fennel, and lemon vinaigrette."]
  ])
};

let state = {
  date: "",
  guests: 6,
  cart: readJson("jt_cart", []),
  invoices: readJson("jt_invoices", [])
};

const app = document.querySelector("#app");
const itemDialog = document.querySelector("#itemDialog");
const itemDetail = document.querySelector("#itemDetail");

window.addEventListener("hashchange", render);
document.addEventListener("DOMContentLoaded", () => {
  if (!location.hash) location.hash = "#menu";
  render();
});

function makeMenu(day, rows) {
  return rows.map((row, index) => {
    const [category, name, price, description] = row;
    const ingredients = buildIngredients(category, index);
    return {
      id: `${day.toLowerCase()}-${index}`,
      day,
      category,
      name,
      price,
      quantity: "Half-pan serving, priced per person",
      description,
      ingredients,
      nutrition: makeNutrition(category, price, index),
      image: imageBank[index]
    };
  });
}

function buildIngredients(category, index) {
  const base = {
    protein: ["olive oil", "fresh herbs", "garlic", "citrus", "kosher salt"],
    vegetarian: ["seasonal vegetables", "legumes", "herbs", "olive oil", "whole grains"],
    sides: ["seasonal produce", "fresh herbs", "olive oil", "lemon", "spices"]
  };
  return [...base[category], ["parsley", "ginger", "tomato", "sesame", "rosemary"][index % 5]];
}

function makeNutrition(category, price, index) {
  const calories = category === "sides" ? 170 : category === "vegetarian" ? 330 : 430;
  return {
    Calories: calories + index * 8,
    Protein: `${category === "protein" ? 28 + index : category === "vegetarian" ? 14 + index : 4 + index}g`,
    Carbs: `${category === "sides" ? 26 + index : 22 + index}g`,
    Fat: `${Math.round(price / 2) + index}g`,
    Sodium: `${420 + index * 32}mg`
  };
}

function render() {
  const route = location.hash.replace("#", "") || "menu";
  document.querySelectorAll(".nav a").forEach((link) => {
    link.classList.toggle("active", link.getAttribute("href") === `#${route}`);
  });
  updateCartCount();

  if (route === "about") renderTemplate("aboutTemplate");
  else if (route === "contact") renderContact();
  else if (route === "cart") renderCart();
  else if (route === "checkout") renderCheckout();
  else if (route === "invoices") renderInvoices();
  else if (route.startsWith("invoice-")) renderInvoice(route.replace("invoice-", ""));
  else renderMenu();
}

function renderTemplate(id) {
  app.replaceChildren(document.querySelector(`#${id}`).content.cloneNode(true));
}

function renderMenu() {
  renderTemplate("menuTemplate");
  const dateInput = document.querySelector("#cateringDate");
  const guestInput = document.querySelector("#guestCount");
  const min = addDays(new Date(), 2);
  const max = addDays(new Date(), 14);

  dateInput.min = toDateInput(min);
  dateInput.max = toDateInput(max);
  dateInput.value = state.date || dateInput.min;
  state.date = dateInput.value;
  guestInput.value = state.guests;
  document.querySelector("#dateHelp").textContent = `Order window: ${formatDate(min)} through ${formatDate(max)}.`;

  dateInput.addEventListener("change", () => {
    state.date = dateInput.value;
    renderMenuItems();
  });
  guestInput.addEventListener("change", () => {
    state.guests = clamp(Number(guestInput.value), 6, 30);
    guestInput.value = state.guests;
    persistCart();
    renderMenuItems();
  });
  document.querySelector("#clearCartForDate").addEventListener("click", () => {
    state.cart = [];
    persistCart();
    renderMenuItems();
    updateCartCount();
  });
  renderMenuItems();
}

function renderMenuItems() {
  const selected = new Date(`${state.date}T12:00:00`);
  const day = DAYS[selected.getDay()];
  const menu = weeklyMenus[day];
  document.querySelector("#menuDay").textContent = `${day} menu for ${formatDate(selected)}`;
  const grid = document.querySelector("#menuGrid");
  grid.replaceChildren(...["protein", "vegetarian", "sides"].map((category) => {
    const section = el("section", "category");
    section.append(el("h3", "", CATEGORY_LABELS[category]));
    const cards = el("div", "items-grid");
    menu.filter((item) => item.category === category).forEach((item) => cards.append(renderItemCard(item)));
    section.append(cards);
    return section;
  }));
}

function renderItemCard(item) {
  const card = el("article", "item-card");
  card.innerHTML = `
    <img src="${item.image}" alt="${item.name}">
    <div class="item-body">
      <div class="item-title">
        <h4>${item.name}</h4>
        <span class="price">$${item.price}</span>
      </div>
      <div class="pill-row">
        <span class="pill">${CATEGORY_LABELS[item.category]}</span>
        <span class="pill">${state.guests} portions</span>
      </div>
      <p class="field-note">${item.quantity}</p>
      <div class="card-actions">
        <button class="secondary-button" type="button">Details</button>
        <button class="primary-button" type="button">Add</button>
      </div>
    </div>
  `;
  card.querySelector(".secondary-button").addEventListener("click", () => openDetail(item));
  card.querySelector(".primary-button").addEventListener("click", () => addToCart(item));
  return card;
}

function openDetail(item) {
  itemDetail.innerHTML = `
    <div class="detail-grid">
      <img src="${item.image}" alt="${item.name}">
      <div class="detail-content">
        <div class="dialog-top">
          <div>
            <p class="eyebrow">${CATEGORY_LABELS[item.category]}</p>
            <h2>${item.name}</h2>
          </div>
          <button class="icon-button" type="button" aria-label="Close details">&times;</button>
        </div>
        <p>${item.description}</p>
        <p><strong>$${item.price} per person</strong> for ${state.guests} portions.</p>
        <h3>Ingredients</h3>
        <ul class="ingredients">${item.ingredients.map((ingredient) => `<li>${ingredient}</li>`).join("")}</ul>
        <h3>Nutrition facts</h3>
        <table class="nutrition">
          <tbody>${Object.entries(item.nutrition).map(([key, value]) => `<tr><th>${key}</th><td>${value}</td></tr>`).join("")}</tbody>
        </table>
        <button class="primary-button" type="button">Add to cart</button>
      </div>
    </div>
  `;
  itemDetail.querySelector(".icon-button").addEventListener("click", () => itemDialog.close());
  itemDetail.querySelector(".primary-button").addEventListener("click", () => {
    addToCart(item);
    itemDialog.close();
  });
  itemDialog.showModal();
}

function addToCart(item) {
  const line = state.cart.find((cartItem) => cartItem.id === item.id && cartItem.date === state.date);
  if (line) line.multiplier += 1;
  else state.cart.push({ ...item, date: state.date, guests: state.guests, multiplier: 1 });
  persistCart();
  updateCartCount();
}

function renderCart() {
  renderTemplate("cartTemplate");
  const view = document.querySelector("#cartView");
  if (!state.cart.length) {
    view.className = "cart-layout empty-state";
    view.innerHTML = `<div><h2>Your cart is empty.</h2><p>Pick a catering date and add dishes from that day's menu.</p><a class="primary-button" href="#menu">Browse menu</a></div>`;
    return;
  }
  const list = el("section", "cart-items");
  state.cart.forEach((item, index) => list.append(renderCartRow(item, index)));
  view.append(list, renderSummaryPanel("cart"));
}

function renderCartRow(item, index) {
  const row = el("article", "cart-row");
  row.innerHTML = `
    <div class="cart-main">
      <img src="${item.image}" alt="${item.name}">
      <div>
        <h3>${item.name}</h3>
        <p class="field-note">${formatDate(new Date(`${item.date}T12:00:00`))} • ${item.guests} portions • $${item.price}/person</p>
      </div>
    </div>
    <div class="cart-controls">
      <label>Trays<input type="number" min="1" max="10" value="${item.multiplier}"></label>
      <button class="danger-button" type="button">Remove</button>
    </div>
  `;
  row.querySelector("input").addEventListener("change", (event) => {
    state.cart[index].multiplier = clamp(Number(event.target.value), 1, 10);
    persistCart();
    renderCart();
  });
  row.querySelector("button").addEventListener("click", () => {
    state.cart.splice(index, 1);
    persistCart();
    renderCart();
  });
  return row;
}

function renderSummaryPanel(mode) {
  const panel = el("aside", "summary-panel");
  const subtotal = cartSubtotal();
  const service = Math.round(subtotal * 0.08 * 100) / 100;
  const total = subtotal + service;
  panel.innerHTML = `
    <h2>Order summary</h2>
    <div class="summary-line"><span>Dishes</span><strong>${state.cart.length}</strong></div>
    <div class="summary-line"><span>Food subtotal</span><strong>${money(subtotal)}</strong></div>
    <div class="summary-line"><span>Service estimate</span><strong>${money(service)}</strong></div>
    <div class="summary-line total"><span>Total</span><strong>${money(total)}</strong></div>
    ${mode === "cart" ? '<a class="primary-button" href="#checkout">Checkout</a>' : '<button class="primary-button" type="submit">Place order</button>'}
  `;
  return panel;
}

function renderCheckout() {
  renderTemplate("checkoutTemplate");
  if (!state.cart.length) {
    app.innerHTML = `<section class="page-head"><h1>Your cart is empty.</h1><p>Add dishes before checkout.</p><a class="primary-button" href="#menu">Browse menu</a></section>`;
    return;
  }
  const summary = document.querySelector("#checkoutSummary");
  summary.replaceWith(renderSummaryPanel("checkout"));
  document.querySelector("#checkoutForm").addEventListener("submit", placeOrder);
}

function placeOrder(event) {
  event.preventDefault();
  const data = Object.fromEntries(new FormData(event.currentTarget).entries());
  const invoice = {
    id: `JT-${Date.now()}`,
    createdAt: new Date().toISOString(),
    customer: data,
    items: state.cart,
    subtotal: cartSubtotal(),
    service: Math.round(cartSubtotal() * 0.08 * 100) / 100
  };
  invoice.total = invoice.subtotal + invoice.service;
  state.invoices.unshift(invoice);
  state.cart = [];
  writeJson("jt_invoices", state.invoices);
  persistCart();
  location.hash = `#invoice-${invoice.id}`;
}

function renderInvoice(id) {
  const invoice = state.invoices.find((entry) => entry.id === id);
  if (!invoice) {
    app.innerHTML = `<section class="page-head"><h1>Invoice not found.</h1><a class="primary-button" href="#menu">Return to menu</a></section>`;
    return;
  }
  updateCartCount();
  app.innerHTML = `
    <section class="page-head">
      <p class="eyebrow">Order placed</p>
      <h1>Invoice ${invoice.id}</h1>
      <p>This invoice is shown here for the customer and stored locally in this browser for the business owner.</p>
    </section>
    <section class="cart-layout">
      <div class="cart-items">
        ${invoice.items.map((item) => `
          <article class="cart-row">
            <div class="cart-main">
              <img src="${item.image}" alt="${item.name}">
              <div>
                <h3>${item.name}</h3>
                <p class="field-note">${formatDate(new Date(`${item.date}T12:00:00`))} • ${item.guests} portions • ${item.multiplier} tray(s)</p>
              </div>
            </div>
            <strong>${money(item.price * item.guests * item.multiplier)}</strong>
          </article>
        `).join("")}
      </div>
      <aside class="summary-panel">
        <div class="invoice-head"><h2>Total</h2><strong>${money(invoice.total)}</strong></div>
        <p><strong>Customer:</strong> ${invoice.customer.name}</p>
        <p><strong>Phone:</strong> ${invoice.customer.phone}</p>
        <p><strong>Email:</strong> ${invoice.customer.email}</p>
        <p><strong>Pickup:</strong> ${invoice.customer.pickupTime}</p>
        <p><strong>Payment:</strong> ${invoice.customer.paymentMethod}</p>
        <p><strong>Instructions:</strong> ${invoice.customer.instructions || "None"}</p>
        <a class="primary-button" href="#menu">Start another order</a>
        <div class="invoice">
          <h3>Local invoice archive</h3>
          <p class="field-note">${state.invoices.length} invoice(s) saved in this browser.</p>
          <a class="secondary-button" href="#invoices">View archive</a>
        </div>
      </aside>
    </section>
  `;
}

function renderInvoices() {
  if (!state.invoices.length) {
    app.innerHTML = `<section class="page-head"><p class="eyebrow">Local archive</p><h1>No invoices saved yet.</h1><p>Completed orders will be stored in this browser.</p><a class="primary-button" href="#menu">Create an order</a></section>`;
    return;
  }
  app.innerHTML = `
    <section class="page-head">
      <p class="eyebrow">Local archive</p>
      <h1>Saved invoices</h1>
      <p>These demo invoices are stored locally in this browser for later business-owner review.</p>
    </section>
    <section class="archive-list">
      ${state.invoices.map((invoice) => `
        <article class="archive-item">
          <div>
            <h2>${invoice.id}</h2>
            <p class="field-note">${invoice.customer.name} • ${new Date(invoice.createdAt).toLocaleString()} • ${invoice.items.length} item(s)</p>
          </div>
          <div>
            <strong>${money(invoice.total)}</strong>
            <a class="secondary-button" href="#invoice-${invoice.id}">Open</a>
          </div>
        </article>
      `).join("")}
    </section>
  `;
}

function renderContact() {
  renderTemplate("contactTemplate");
  document.querySelector("#contactForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const messages = readJson("jt_contact_messages", []);
    messages.unshift({ id: Date.now(), createdAt: new Date().toISOString(), ...Object.fromEntries(new FormData(event.currentTarget).entries()) });
    writeJson("jt_contact_messages", messages);
    event.currentTarget.reset();
    document.querySelector("#contactStatus").textContent = "Message saved locally for the demo.";
  });
}

function cartSubtotal() {
  return state.cart.reduce((sum, item) => sum + item.price * item.guests * item.multiplier, 0);
}

function persistCart() {
  writeJson("jt_cart", state.cart);
}

function updateCartCount() {
  document.querySelector("#cartCount").textContent = state.cart.reduce((sum, item) => sum + item.multiplier, 0);
}

function readJson(key, fallback) {
  try {
    return JSON.parse(localStorage.getItem(key)) || fallback;
  } catch {
    return fallback;
  }
}

function writeJson(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function addDays(date, days) {
  const copy = new Date(date);
  copy.setHours(12, 0, 0, 0);
  copy.setDate(copy.getDate() + days);
  return copy;
}

function toDateInput(date) {
  return date.toISOString().slice(0, 10);
}

function formatDate(date) {
  return new Intl.DateTimeFormat("en-US", { weekday: "short", month: "short", day: "numeric", year: "numeric" }).format(date);
}

function money(value) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(value);
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, Number.isFinite(value) ? value : min));
}

function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text) node.textContent = text;
  return node;
}
