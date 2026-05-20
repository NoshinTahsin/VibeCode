const MENU_IMAGES = [
  "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1529042410759-befb1204b468?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=900&q=80"
];

const DAILY_NAMES = {
  0: ["Lemon Herb Chicken Trays", "Smoked Paprika Beef Tips", "Garlic Butter Salmon", "Turkey Meatball Marinara", "Coconut Curry Shrimp", "Spinach Ricotta Shells", "Roasted Vegetable Lasagna", "Mushroom Lentil Loaf", "Rosemary Potatoes", "Citrus Garden Salad"],
  1: ["Honey Soy Chicken", "Beef Barbacoa", "Herbed Pork Tenderloin", "Cajun Catfish", "Chicken Shawarma", "Chickpea Tagine", "Eggplant Parmesan", "Pesto Tortellini Bake", "Cilantro Lime Rice", "Charred Corn Salad"],
  2: ["Maple Dijon Chicken", "Classic Beef Pot Roast", "Pork Carnitas", "Sesame Ginger Tofu", "Shrimp Scampi", "Butternut Squash Mac", "Black Bean Enchiladas", "Caprese Grain Bowl", "Green Beans Almondine", "Pull-Apart Dinner Rolls"],
  3: ["Jerk Chicken", "Korean Beef Bulgogi", "Baked Cod Piccata", "Sausage Pepper Bake", "Chicken Tikka Masala", "Paneer Butter Masala", "Vegetable Paella", "Greek Stuffed Peppers", "Cucumber Yogurt Salad", "Garlic Naan"],
  4: ["BBQ Pulled Chicken", "Peppercorn Steak Bites", "Miso Glazed Salmon", "Chicken Parmesan", "Turkey Chili", "White Bean Cassoulet", "Sweet Potato Curry", "Broccoli Cheddar Quiche", "Creamy Coleslaw", "Baked Mac & Cheese"],
  5: ["Cranberry Orange Chicken", "Braised Short Rib Ragu", "Crispy Pork Schnitzel", "Mediterranean Turkey Kofta", "Old Bay Shrimp Boil", "Wild Mushroom Risotto", "Vegetable Pot Pie", "Falafel Platter", "Maple Carrots", "Herbed Couscous"],
  6: ["Sunday Roast Chicken", "Beef Brisket", "Brown Sugar Ham", "Herb Crusted Trout", "Chicken Pot Pie Filling", "Garden Vegetable Moussaka", "Tomato Basil Gnocchi", "Harvest Stuffed Squash", "Whipped Potatoes", "Braised Greens"]
};

const PRICES = [16, 19, 22, 15, 20, 13, 14, 12, 6, 5];
const CATEGORIES = ["protein", "protein", "protein", "protein", "protein", "vegetarian", "vegetarian", "vegetarian", "sides", "sides"];
const CATEGORY_LABELS = { protein: "Protein", vegetarian: "Vegetarian", sides: "Sides" };
const state = { selectedDate: "", cart: [] };
const hasDOM = typeof document !== "undefined";

const els = hasDOM ? {
  dateInput: document.querySelector("#cateringDate"),
  viewMenuButton: document.querySelector("#viewMenuButton"),
  dateHelp: document.querySelector("#dateHelp"),
  selectedDay: document.querySelector("#selectedDay"),
  menuTitle: document.querySelector("#menuTitle"),
  menuSummary: document.querySelector("#menuSummary"),
  menuGroups: document.querySelector("#menuGroups"),
  defaultPortions: document.querySelector("#defaultPortions"),
  cartButton: document.querySelector("#cartButton"),
  cartCount: document.querySelector("#cartCount"),
  cartPanel: document.querySelector("#cartPanel"),
  closeCart: document.querySelector("#closeCart"),
  cartDate: document.querySelector("#cartDate"),
  cartItems: document.querySelector("#cartItems"),
  cartTotal: document.querySelector("#cartTotal"),
  checkoutButton: document.querySelector("#checkoutButton"),
  checkoutSection: document.querySelector("#checkout"),
  checkoutForm: document.querySelector("#checkoutForm"),
  invoiceSection: document.querySelector("#invoiceSection"),
  invoiceOutput: document.querySelector("#invoiceOutput"),
  itemDialog: document.querySelector("#itemDialog"),
  dialogClose: document.querySelector("#dialogClose"),
  itemDetails: document.querySelector("#itemDetails"),
  contactForm: document.querySelector("#contactForm"),
  contactStatus: document.querySelector("#contactStatus"),
  pageLocation: document.querySelector("#pageLocation"),
  navLinks: document.querySelectorAll(".site-nav a, .site-footer a")
} : {};

function addDays(date, days) {
  const next = new Date(date);
  next.setDate(next.getDate() + days);
  return next;
}

function toDateValue(date) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}

function clampPortions(value) {
  const number = Number.parseInt(value, 10);
  if (Number.isNaN(number)) return 6;
  return Math.min(30, Math.max(6, number));
}

function money(value) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(value);
}

function prettyDate(value) {
  return new Date(`${value}T12:00:00`).toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric", year: "numeric" });
}

function scrollBehavior() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth";
}

function itemFor(dayIndex, index) {
  const name = DAILY_NAMES[dayIndex][index];
  const category = CATEGORIES[index];
  return {
    id: `${dayIndex}-${index}-${name.toLowerCase().replaceAll(" ", "-").replaceAll("&", "and")}`,
    category,
    name,
    price: PRICES[index],
    quantity: `${clampPortions(els.defaultPortions?.value || 6)} portions`,
    image: MENU_IMAGES[index],
    description: `${name} prepared in family-style trays with fresh herbs and pickup-friendly packaging.`,
    ingredients: [name.split(" ")[0].toLowerCase(), "olive oil", "garlic", "seasonal herbs", "sea salt"],
    nutrition: {
      calories: (category === "protein" ? 310 : category === "vegetarian" ? 250 : 170) + PRICES[index] * 3,
      protein: category === "sides" ? "4g" : category === "vegetarian" ? "12g" : "25g",
      carbs: category === "protein" ? "9g" : "30g",
      fat: category === "sides" ? "6g" : "13g",
      sodium: `${420 + PRICES[index] * 8}mg`
    }
  };
}

function getMenuForDate(dateValue) {
  const dayIndex = new Date(`${dateValue}T12:00:00`).getDay();
  return DAILY_NAMES[dayIndex].map((_, index) => itemFor(dayIndex, index));
}

function initializeDates() {
  const min = addDays(new Date(), 2);
  const max = addDays(new Date(), 14);
  els.dateInput.min = toDateValue(min);
  els.dateInput.max = toDateValue(max);
  els.dateInput.value = toDateValue(min);
  state.selectedDate = els.dateInput.value;
  els.dateHelp.textContent = `Available pickup dates run from ${prettyDate(els.dateInput.min)} through ${prettyDate(els.dateInput.max)}.`;
}

function renderMenu() {
  const menu = getMenuForDate(state.selectedDate);
  const dateLabel = prettyDate(state.selectedDate);
  els.selectedDay.textContent = `Showing menu for ${dateLabel}.`;
  els.menuTitle.textContent = `${dateLabel} Menu`;
  els.menuSummary.textContent = "10 items available: 5 proteins, 3 vegetarian dishes, and 2 sides.";
  els.menuGroups.innerHTML = "";

  Object.keys(CATEGORY_LABELS).forEach((category) => {
    const items = menu.filter((item) => item.category === category);
    const section = document.createElement("section");
    section.className = "menu-group";
    section.innerHTML = `<div class="category-header"><h3>${CATEGORY_LABELS[category]}</h3><span>${items.length} items</span></div><div class="item-grid"></div>`;
    const grid = section.querySelector(".item-grid");

    items.forEach((item) => {
      const card = document.createElement("article");
      card.className = "menu-item";
      card.setAttribute("aria-labelledby", `${item.id}-title`);
      card.innerHTML = `
        <img src="${item.image}" alt="${item.name} catering tray">
        <div class="item-body">
          <div class="item-title-row"><h4 id="${item.id}-title">${item.name}</h4><span class="price">${money(item.price)}</span></div>
          <p class="item-meta">${item.quantity} | ${item.description}</p>
          <div class="item-actions">
            <button class="detail-button" type="button" data-details="${item.id}" aria-label="Details for ${item.name}">Details</button>
            <button class="add-button" type="button" data-add="${item.id}" aria-label="Add ${item.name} to cart">Add</button>
          </div>
        </div>`;
      grid.append(card);
    });
    els.menuGroups.append(section);
  });
}

function renderCart() {
  const count = state.cart.reduce((sum, line) => sum + line.portions, 0);
  els.cartCount.textContent = count;
  els.cartButton.setAttribute("aria-label", `Open cart, ${count} portions`);
  els.cartDate.textContent = state.cart.length ? `Pickup on ${prettyDate(state.selectedDate)}` : "Your cart is empty.";
  els.cartItems.innerHTML = "";

  state.cart.forEach((line) => {
    const row = document.createElement("article");
    row.className = "cart-line";
    row.setAttribute("aria-labelledby", `${line.id}-cart-title`);
    row.innerHTML = `
      <div class="cart-line-top"><h3 id="${line.id}-cart-title">${line.name}</h3><span class="price">${money(line.price * line.portions)}</span></div>
      <div class="cart-controls">
        <label for="${line.id}-qty">Portions for ${line.name}</label>
        <input id="${line.id}-qty" type="number" min="6" max="30" value="${line.portions}" data-qty="${line.id}">
        <button class="remove-button" type="button" data-remove="${line.id}" aria-label="Remove ${line.name} from cart">Remove</button>
      </div>`;
    els.cartItems.append(row);
  });

  els.cartTotal.textContent = money(state.cart.reduce((sum, line) => sum + line.price * line.portions, 0));
  els.checkoutButton.disabled = state.cart.length === 0;
}

function addToCart(id) {
  const item = getMenuForDate(state.selectedDate).find((menuItem) => menuItem.id === id);
  const existing = state.cart.find((line) => line.id === id);
  const portions = clampPortions(els.defaultPortions.value);
  if (existing) existing.portions = clampPortions(existing.portions + portions);
  else state.cart.push({ ...item, portions });
  renderCart();
  openCart();
}

function showDetails(id) {
  const item = getMenuForDate(state.selectedDate).find((menuItem) => menuItem.id === id);
  els.itemDetails.innerHTML = `
    <div class="detail-hero">
      <img src="${item.image}" alt="${item.name} catering tray">
      <div class="detail-copy">
        <p class="eyebrow">${CATEGORY_LABELS[item.category]}</p>
        <h2>${item.name}</h2>
        <p>${item.description}</p>
        <div><h3>Ingredients</h3><ul class="tag-list">${item.ingredients.map((ingredient) => `<li>${ingredient}</li>`).join("")}</ul></div>
        <div>
          <h3>Nutrition Facts</h3>
          <table class="nutrition-table">
            <caption>Nutrition facts for ${item.name}</caption>
            <tbody>
              <tr><th scope="row">Calories</th><td>${item.nutrition.calories}</td></tr>
              <tr><th scope="row">Protein</th><td>${item.nutrition.protein}</td></tr>
              <tr><th scope="row">Carbs</th><td>${item.nutrition.carbs}</td></tr>
              <tr><th scope="row">Fat</th><td>${item.nutrition.fat}</td></tr>
              <tr><th scope="row">Sodium</th><td>${item.nutrition.sodium}</td></tr>
            </tbody>
          </table>
        </div>
        <button class="add-button" type="button" data-add="${item.id}" aria-label="Add ${item.name} to cart">Add to cart</button>
      </div>
    </div>`;
  els.itemDialog.showModal();
}

function renderInvoice(invoice) {
  els.invoiceSection.hidden = false;
  els.invoiceOutput.innerHTML = `
    <h3>Invoice ${invoice.id}</h3>
    <p><strong>Pickup:</strong> ${prettyDate(invoice.pickupDate)} at ${invoice.pickupTime}</p>
    <p><strong>Guest count:</strong> ${invoice.guestCount} people</p>
    <p><strong>Customer:</strong> ${invoice.customer.name} | ${invoice.customer.email} | ${invoice.customer.phone}</p>
    <table>
      <caption>Invoice line items</caption>
      <thead><tr><th scope="col">Item</th><th scope="col">Portions</th><th scope="col">Unit</th><th scope="col">Line total</th></tr></thead>
      <tbody>${invoice.items.map((item) => `<tr><td>${item.name}</td><td>${item.portions}</td><td>${money(item.price)}</td><td>${money(item.price * item.portions)}</td></tr>`).join("")}</tbody>
    </table>
    <p><strong>Total:</strong> ${money(invoice.total)}</p>
    <p><strong>Payment:</strong> ${invoice.paymentMethod}${invoice.paymentNote ? `, ${invoice.paymentNote}` : ""}</p>
    <p><strong>Special instructions:</strong> ${invoice.instructions || "None"}</p>
    <p>This invoice has been saved locally in this browser for the business owner to review later.</p>`;
  els.invoiceSection.scrollIntoView({ behavior: scrollBehavior() });
  els.invoiceSection.focus({ preventScroll: true });
}

function placeOrder(formData) {
  const invoice = {
    id: `GL-${Date.now().toString().slice(-7)}`,
    createdAt: new Date().toISOString(),
    pickupDate: state.selectedDate,
    customer: { name: formData.get("name"), email: formData.get("email"), phone: formData.get("phone") },
    guestCount: clampPortions(formData.get("guestCount")),
    pickupTime: formData.get("pickupTime"),
    paymentMethod: formData.get("paymentMethod"),
    paymentNote: formData.get("paymentNote"),
    instructions: formData.get("instructions"),
    items: state.cart.map((line) => ({ name: line.name, portions: line.portions, price: line.price })),
    total: state.cart.reduce((sum, line) => sum + line.price * line.portions, 0)
  };
  const invoices = JSON.parse(localStorage.getItem("gatherLadleInvoices") || "[]");
  invoices.push(invoice);
  localStorage.setItem("gatherLadleInvoices", JSON.stringify(invoices));
  renderInvoice(invoice);
  state.cart = [];
  renderCart();
  els.checkoutForm.reset();
}

function openCart() {
  els.cartPanel.classList.add("is-open");
  els.cartButton.setAttribute("aria-expanded", "true");
}

function closeCart() {
  els.cartPanel.classList.remove("is-open");
  els.cartButton.setAttribute("aria-expanded", "false");
}

function updateCurrentLocation() {
  const currentHash = window.location.hash || "#home";
  const labels = { "#home": "Home", "#menu": "Menu", "#checkout": "Checkout", "#about": "About", "#contact": "Contact" };
  els.navLinks.forEach((link) => {
    if (link.getAttribute("href") === currentHash) link.setAttribute("aria-current", "location");
    else link.removeAttribute("aria-current");
  });
  els.pageLocation.textContent = `Current section: ${labels[currentHash] || "Home"}`;
}

function bindEvents() {
  els.viewMenuButton.addEventListener("click", () => {
    if (!els.dateInput.reportValidity()) return;
    state.selectedDate = els.dateInput.value;
    state.cart = [];
    renderMenu();
    renderCart();
    els.menuTitle.scrollIntoView({ behavior: scrollBehavior(), block: "start" });
  });

  els.defaultPortions.addEventListener("change", () => {
    els.defaultPortions.value = clampPortions(els.defaultPortions.value);
    renderMenu();
  });

  document.addEventListener("click", (event) => {
    const addId = event.target.dataset.add;
    const detailId = event.target.dataset.details;
    const removeId = event.target.dataset.remove;
    if (addId) addToCart(addId);
    if (detailId) showDetails(detailId);
    if (removeId) {
      state.cart = state.cart.filter((line) => line.id !== removeId);
      renderCart();
    }
  });

  els.cartItems.addEventListener("change", (event) => {
    const id = event.target.dataset.qty;
    if (!id) return;
    const line = state.cart.find((item) => item.id === id);
    line.portions = clampPortions(event.target.value);
    renderCart();
  });

  els.cartButton.addEventListener("click", () => {
    if (els.cartPanel.classList.contains("is-open")) closeCart();
    else openCart();
  });
  els.closeCart.addEventListener("click", closeCart);

  els.checkoutButton.addEventListener("click", () => {
    if (!state.cart.length) return;
    els.checkoutSection.hidden = false;
    els.checkoutSection.scrollIntoView({ behavior: scrollBehavior() });
    els.checkoutSection.focus({ preventScroll: true });
  });

  els.checkoutForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (state.cart.length) placeOrder(new FormData(els.checkoutForm));
  });

  els.dialogClose.addEventListener("click", () => els.itemDialog.close());
  els.contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    els.contactForm.reset();
    els.contactStatus.textContent = "Thanks. Your message has been saved as a demo inquiry.";
  });
  window.addEventListener("hashchange", updateCurrentLocation);
}

function init() {
  initializeDates();
  renderMenu();
  renderCart();
  bindEvents();
  updateCurrentLocation();
}

if (hasDOM) init();
if (typeof module !== "undefined") module.exports = { DAILY_NAMES, CATEGORIES, addDays, clampPortions };
