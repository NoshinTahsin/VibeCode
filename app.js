const MENU_BY_DAY = {
  Sunday: [
    item("sun-brisket", "protein", "Tomato Braised Brisket", 19, "Half tray serves 6", "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=80", "Slow-braised beef with tomato, garlic, and herbs.", ["beef", "tomatoes", "garlic", "thyme", "onion"], [430, "34g", "18g", "11g"]),
    item("sun-chicken", "protein", "Lemon Herb Chicken", 16, "Half tray serves 6", "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=900&q=80", "Roasted chicken thighs with citrus pan sauce.", ["chicken", "lemon", "parsley", "olive oil"], [360, "31g", "20g", "3g"]),
    item("sun-salmon", "protein", "Maple Chili Salmon", 22, "Six fillets", "https://images.unsplash.com/photo-1485921325833-c519f76c4927?auto=format&fit=crop&w=900&q=80", "Glazed salmon with mild chili and scallions.", ["salmon", "maple", "chili", "scallions"], [390, "29g", "23g", "9g"]),
    item("sun-meatballs", "protein", "Sunday Turkey Meatballs", 15, "24 pieces", "https://images.unsplash.com/photo-1529042410759-befb1204b468?auto=format&fit=crop&w=900&q=80", "Tender turkey meatballs in basil marinara.", ["turkey", "breadcrumbs", "egg", "basil"], [310, "24g", "14g", "10g"]),
    item("sun-kebab", "protein", "Garlic Beef Kebabs", 18, "18 skewers", "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=900&q=80", "Charred skewers with garlic yogurt on the side.", ["beef", "garlic", "yogurt", "paprika"], [410, "32g", "24g", "5g"]),
    item("sun-eggplant", "vegetarian", "Stuffed Eggplant Boats", 14, "Half tray serves 6", "https://images.unsplash.com/photo-1625944525533-473f1a3d54e7?auto=format&fit=crop&w=900&q=80", "Eggplant filled with rice, herbs, and tomato.", ["eggplant", "rice", "tomatoes", "mint"], [280, "7g", "10g", "40g"]),
    item("sun-lentils", "vegetarian", "Golden Lentil Stew", 12, "Quart", "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=900&q=80", "A cozy lentil stew with turmeric and greens.", ["lentils", "turmeric", "spinach", "carrot"], [260, "15g", "6g", "38g"]),
    item("sun-frittata", "vegetarian", "Garden Frittata Squares", 13, "12 squares", "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=900&q=80", "Baked eggs with peppers, herbs, and cheese.", ["eggs", "peppers", "cheddar", "chives"], [220, "14g", "15g", "6g"]),
    item("sun-potatoes", "sides", "Rosemary Potatoes", 8, "Half tray serves 6", "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=900&q=80", "Crisp roasted potatoes with rosemary salt.", ["potatoes", "rosemary", "olive oil"], [210, "4g", "8g", "33g"]),
    item("sun-greens", "sides", "Citrus Market Greens", 7, "Bowl serves 6", "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=80", "Seasonal greens with citrus vinaigrette.", ["greens", "orange", "shallot", "mustard"], [120, "3g", "8g", "9g"])
  ],
  Monday: [],
  Tuesday: [],
  Wednesday: [],
  Thursday: [],
  Friday: [],
  Saturday: []
};

const DAILY_THEMES = {
  Monday: ["Smoky Paprika Chicken", "Herbed Beef Roast", "Ginger Turkey Patties", "Honey Garlic Shrimp", "Cumin Lamb Kofta", "Mushroom Barley Bake", "Chickpea Pepper Ragout", "Spinach Ricotta Shells", "Garlic Rice Pilaf", "Cucumber Tomato Salad"],
  Tuesday: ["Orange Sesame Chicken", "Beef Picadillo", "Coconut Cod", "Turkey Chili Verde", "Pork Carnitas Tray", "Sweet Potato Enchiladas", "Tofu Peanut Noodles", "Cauliflower Shawarma", "Cilantro Lime Beans", "Charred Corn Salad"],
  Wednesday: ["Basil Pesto Chicken", "Braised Short Rib", "Tandoori Turkey Bites", "Miso Salmon", "Sausage Pepper Bake", "Vegetable Lasagna", "Black Bean Cakes", "Paneer Tomato Curry", "Herbed Couscous", "Roasted Broccoli"],
  Thursday: ["Moroccan Chicken", "Korean Beef Bulgogi", "Dill Poached Salmon", "Turkey Shepherd Pie", "BBQ Pulled Pork", "Butternut Squash Risotto", "Red Lentil Dal", "Caprese Pasta Bake", "Sesame Green Beans", "Mashed Yukon Potatoes"],
  Friday: ["Jerk Chicken Tray", "Peppercorn Steak Tips", "Crispy Fish Cakes", "Turkey Taco Bake", "Garlic Butter Shrimp", "Wild Mushroom Stroganoff", "Vegetable Paella", "Falafel Platter", "Lemon Orzo", "Apple Fennel Slaw"],
  Saturday: ["Pomegranate Chicken", "Coffee Rubbed Brisket", "Herb Turkey Roulade", "Cajun Salmon", "Mini Beef Sliders", "Roasted Vegetable Tart", "White Bean Cassoulet", "Kale Pesto Gnocchi", "Macaroni Gratin", "Mixed Pickle Salad"]
};

const STOCK_IMAGES = [
  "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1543352634-a1c51d9f1fa7?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1562967916-eb82221dfb92?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80"
];

const state = {
  selectedDate: "",
  activeFilter: "all",
  cart: JSON.parse(localStorage.getItem("hl-cart") || "[]")
};

const dateInput = document.querySelector("#dateInput");
const dateNotice = document.querySelector("#dateNotice");
const menuGroups = document.querySelector("#menuGroups");
const cartDrawer = document.querySelector("#cartDrawer");
const cartItems = document.querySelector("#cartItems");
const cartSummary = document.querySelector("#cartSummary");
const cartCount = document.querySelector("#cartCount");
const itemDialog = document.querySelector("#itemDialog");
const invoiceView = document.querySelector("#invoiceView");
const invoiceContent = document.querySelector("#invoiceContent");

function item(id, category, name, price, quantity, image, description, ingredients, nutrition) {
  return { id, category, name, price, quantity, image, description, ingredients, nutrition };
}

function buildDailyMenus() {
  Object.entries(DAILY_THEMES).forEach(([day, names]) => {
    MENU_BY_DAY[day] = names.map((name, index) => {
      const category = index < 5 ? "protein" : index < 8 ? "vegetarian" : "sides";
      const basePrice = category === "protein" ? 15 + (index % 4) * 2 : category === "vegetarian" ? 11 + (index % 3) : 7 + (index % 2);
      const quantity = category === "sides" ? "Half tray serves 6" : index % 2 ? "12 pieces" : "Half tray serves 6";
      return item(
        `${day.toLowerCase()}-${index}`,
        category,
        name,
        basePrice,
        quantity,
        STOCK_IMAGES[index],
        `${name} prepared in a homestyle catering portion with balanced seasoning and pickup-friendly packaging.`,
        ["seasonal produce", "olive oil", "fresh herbs", category === "vegetarian" ? "plant protein" : "house protein"],
        [220 + index * 24, `${8 + index * 3}g`, `${7 + index}g`, `${12 + index * 2}g`]
      );
    });
  });
}

function toDateInputValue(date) {
  return date.toISOString().slice(0, 10);
}

function addDays(days) {
  const date = new Date();
  date.setHours(0, 0, 0, 0);
  date.setDate(date.getDate() + days);
  return date;
}

function formatDate(value) {
  return new Date(`${value}T12:00:00`).toLocaleDateString(undefined, {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric"
  });
}

function selectedDay() {
  return new Date(`${state.selectedDate}T12:00:00`).toLocaleDateString("en-US", { weekday: "long" });
}

function money(value) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(value);
}

function foodImageAlt(food) {
  return `Prepared catering dish: ${food.name}.`;
}

function initDate() {
  const min = toDateInputValue(addDays(2));
  const max = toDateInputValue(addDays(14));
  dateInput.min = min;
  dateInput.max = max;
  state.selectedDate = min;
  dateInput.value = min;
  updateDateNotice();
}

function updateDateNotice() {
  dateNotice.textContent = `${formatDate(state.selectedDate)} uses the ${selectedDay()} menu. Orders must serve 6 to 30 people.`;
}

function renderMenu() {
  const labels = { protein: "Protein", vegetarian: "Vegetarian", sides: "Sides" };
  const menu = MENU_BY_DAY[selectedDay()];
  const categories = ["protein", "vegetarian", "sides"].filter((category) => state.activeFilter === "all" || state.activeFilter === category);
  menuGroups.innerHTML = categories.map((category) => {
    const items = menu.filter((food) => food.category === category);
    return `
      <section aria-labelledby="${category}Title">
        <div class="category-title">
          <h3 id="${category}Title">${labels[category]}</h3>
          <span>${items.length} items</span>
        </div>
        <div class="item-grid">
          ${items.map(renderFoodCard).join("")}
        </div>
      </section>
    `;
  }).join("");
}

function renderFoodCard(food) {
  return `
    <article class="food-card">
      <img src="${food.image}" alt="${foodImageAlt(food)}">
      <div class="food-body">
        <h3>${food.name}</h3>
        <div class="food-meta">
          <span>${money(food.price)}</span>
          <span aria-hidden="true">.</span>
          <span>${food.quantity}</span>
        </div>
        <div class="food-actions">
          <button class="small-button" type="button" data-details="${food.id}">Details</button>
          <button class="small-button add" type="button" data-add="${food.id}">Add</button>
        </div>
      </div>
    </article>
  `;
}

function getCurrentMenuItem(id) {
  return MENU_BY_DAY[selectedDay()].find((food) => food.id === id);
}

function openDetails(id) {
  const food = getCurrentMenuItem(id);
  if (!food) return;
  itemDialog.querySelector("#dialogContent").innerHTML = `
    <div class="dialog-layout">
      <img src="${food.image}" alt="${foodImageAlt(food)}">
      <div class="dialog-body">
        <p class="eyebrow">${food.category}</p>
        <h2 id="dialogTitle">${food.name}</h2>
        <p><strong>${money(food.price)}</strong> / ${food.quantity}</p>
        <p>${food.description}</p>
        <h3>Ingredients</h3>
        <p>${food.ingredients.join(", ")}</p>
        <table class="nutrition">
          <caption class="sr-only">Nutrition facts for ${food.name}</caption>
          <thead>
            <tr><th scope="col">Calories</th><th scope="col">Protein</th><th scope="col">Fat</th><th scope="col">Carbs</th></tr>
          </thead>
          <tbody>
            <tr><td>${food.nutrition[0]}</td><td>${food.nutrition[1]}</td><td>${food.nutrition[2]}</td><td>${food.nutrition[3]}</td></tr>
          </tbody>
        </table>
        <button class="button primary full" type="button" data-add="${food.id}">Add to cart</button>
      </div>
    </div>
  `;
  itemDialog.showModal();
}

function addToCart(id) {
  const food = getCurrentMenuItem(id);
  if (!food) return;
  const key = `${state.selectedDate}:${food.id}`;
  const existing = state.cart.find((entry) => entry.key === key);
  if (existing) {
    existing.portions = Math.min(30, existing.portions + 6);
  } else {
    state.cart.push({ ...food, key, pickupDate: state.selectedDate, portions: 6 });
  }
  saveCart();
  renderCart();
  if (itemDialog.open) itemDialog.close();
  openCart();
}

function saveCart() {
  localStorage.setItem("hl-cart", JSON.stringify(state.cart));
}

function cartTotals() {
  const subtotal = state.cart.reduce((sum, entry) => sum + entry.price * (entry.portions / 6), 0);
  const service = subtotal ? subtotal * 0.08 : 0;
  return { subtotal, service, total: subtotal + service };
}

function renderCart() {
  const itemCount = state.cart.reduce((sum, entry) => sum + entry.portions, 0);
  cartCount.textContent = String(state.cart.length);
  cartCount.setAttribute("aria-label", `${state.cart.length} items in cart for ${itemCount} portions`);

  if (!state.cart.length) {
    cartItems.innerHTML = `<p class="empty-state">Your cart is empty. Add menu items to start an order.</p>`;
    cartSummary.innerHTML = "";
    return;
  }

  cartItems.innerHTML = state.cart.map((entry) => `
    <article class="cart-item">
      <img src="${entry.image}" alt="">
      <div>
        <h3>${entry.name}</h3>
        <p>${formatDate(entry.pickupDate)} . ${money(entry.price)} per 6 people</p>
        <div class="quantity-row">
          <label>
            <span class="sr-only">Portions for ${entry.name}</span>
            <input type="number" min="6" max="30" step="1" value="${entry.portions}" data-portion="${entry.key}">
          </label>
          <button class="remove-button" type="button" data-remove="${entry.key}">Remove</button>
        </div>
      </div>
    </article>
  `).join("");

  const totals = cartTotals();
  cartSummary.innerHTML = `
    <div><span>Subtotal</span><span>${money(totals.subtotal)}</span></div>
    <div><span>Service estimate</span><span>${money(totals.service)}</span></div>
    <div><span>Total</span><span>${money(totals.total)}</span></div>
  `;
}

function openCart() {
  cartDrawer.classList.add("open");
  cartDrawer.setAttribute("aria-hidden", "false");
}

function closeCart() {
  cartDrawer.classList.remove("open");
  cartDrawer.setAttribute("aria-hidden", "true");
}

function placeOrder(form) {
  if (!state.cart.length) {
    document.querySelector("#checkoutStatus").textContent = "Add at least one item before checkout.";
    return;
  }

  const invalid = state.cart.find((entry) => entry.portions < 6 || entry.portions > 30);
  if (invalid) {
    document.querySelector("#checkoutStatus").textContent = "Each item must be ordered for 6 to 30 people.";
    return;
  }

  const data = Object.fromEntries(new FormData(form).entries());
  const totals = cartTotals();
  const invoice = {
    id: `HL-${Date.now()}`,
    createdAt: new Date().toISOString(),
    customer: data,
    items: state.cart,
    totals
  };
  const invoices = JSON.parse(localStorage.getItem("hl-invoices") || "[]");
  invoices.unshift(invoice);
  localStorage.setItem("hl-invoices", JSON.stringify(invoices));
  state.cart = [];
  saveCart();
  renderCart();
  form.reset();
  closeCart();
  showInvoice(invoice);
}

function showInvoice(invoice) {
  invoiceContent.innerHTML = `
    <p class="eyebrow">Invoice generated locally</p>
    <h2 id="invoiceTitle">Invoice ${invoice.id}</h2>
    <p><strong>${invoice.customer.customerName}</strong><br>${invoice.customer.phone}<br>${invoice.customer.email}</p>
    <p>Pickup time: ${invoice.customer.pickupTime}<br>Payment: ${invoice.customer.payment}</p>
    <table class="invoice-table">
      <thead><tr><th scope="col">Item</th><th scope="col">Pickup date</th><th scope="col">Portions</th><th scope="col">Line total</th></tr></thead>
      <tbody>
        ${invoice.items.map((entry) => `
          <tr>
            <td>${entry.name}</td>
            <td>${formatDate(entry.pickupDate)}</td>
            <td>${entry.portions}</td>
            <td>${money(entry.price * (entry.portions / 6))}</td>
          </tr>
        `).join("")}
      </tbody>
    </table>
    <p>${invoice.customer.instructions ? `<strong>Instructions:</strong> ${invoice.customer.instructions}` : "No special instructions."}</p>
    <p><strong>Total due:</strong> ${money(invoice.totals.total)}</p>
    <p class="form-status">Saved to localStorage as hl-invoices for the business owner.</p>
  `;
  invoiceView.hidden = false;
}

function bindEvents() {
  document.querySelector(".nav-toggle").addEventListener("click", (event) => {
    const links = document.querySelector("#navLinks");
    const isOpen = links.classList.toggle("open");
    event.currentTarget.setAttribute("aria-expanded", String(isOpen));
  });

  dateInput.addEventListener("change", () => {
    state.selectedDate = dateInput.value;
    if (state.selectedDate < dateInput.min) state.selectedDate = dateInput.min;
    if (state.selectedDate > dateInput.max) state.selectedDate = dateInput.max;
    dateInput.value = state.selectedDate;
    updateDateNotice();
    renderMenu();
  });

  document.querySelectorAll("[data-filter]").forEach((button) => {
    button.addEventListener("click", () => {
      state.activeFilter = button.dataset.filter;
      document.querySelectorAll("[data-filter]").forEach((chip) => chip.classList.toggle("active", chip === button));
      renderMenu();
    });
  });

  document.body.addEventListener("click", (event) => {
    const details = event.target.closest("[data-details]");
    const add = event.target.closest("[data-add]");
    if (details) openDetails(details.dataset.details);
    if (add) addToCart(add.dataset.add);
  });

  document.querySelector("[data-close-dialog]").addEventListener("click", () => itemDialog.close());
  document.querySelectorAll("[data-open-cart]").forEach((button) => button.addEventListener("click", openCart));
  document.querySelector("[data-close-cart]").addEventListener("click", closeCart);
  cartDrawer.addEventListener("click", (event) => {
    if (event.target === cartDrawer) closeCart();
  });

  cartItems.addEventListener("input", (event) => {
    const input = event.target.closest("[data-portion]");
    if (!input) return;
    const entry = state.cart.find((cartEntry) => cartEntry.key === input.dataset.portion);
    if (!entry) return;
    entry.portions = Math.max(6, Math.min(30, Number(input.value) || 6));
    input.value = entry.portions;
    saveCart();
    renderCart();
  });

  cartItems.addEventListener("click", (event) => {
    const button = event.target.closest("[data-remove]");
    if (!button) return;
    state.cart = state.cart.filter((entry) => entry.key !== button.dataset.remove);
    saveCart();
    renderCart();
  });

  document.querySelector("#checkoutForm").addEventListener("submit", (event) => {
    event.preventDefault();
    placeOrder(event.currentTarget);
  });

  document.querySelector("#contactForm").addEventListener("submit", (event) => {
    event.preventDefault();
    event.currentTarget.reset();
    document.querySelector("#contactStatus").textContent = "Thanks. Your message was received for this prototype.";
  });

  document.querySelector("[data-close-invoice]").addEventListener("click", () => {
    invoiceView.hidden = true;
  });
}

buildDailyMenus();
initDate();
bindEvents();
renderMenu();
renderCart();
