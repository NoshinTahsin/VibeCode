const today = new Date();
today.setHours(0, 0, 0, 0);

const menuByDay = {
  Sunday: [
    item("su1", "protein", "Lemon Herb Roast Chicken", 19, "Serves 6", "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=900&q=80"),
    item("su2", "protein", "Smoky Brisket Tray", 24, "Serves 6", "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?auto=format&fit=crop&w=900&q=80"),
    item("su3", "protein", "Garlic Butter Salmon", 26, "Serves 6", "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=900&q=80"),
    item("su4", "protein", "Turkey Meatball Marinara", 18, "Serves 6", "https://images.unsplash.com/photo-1529042410759-befb1204b468?auto=format&fit=crop&w=900&q=80"),
    item("su5", "protein", "Coconut Curry Shrimp", 23, "Serves 6", "https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=900&q=80"),
    item("su6", "vegetarian", "Wild Mushroom Lasagna", 17, "Serves 6", "https://images.unsplash.com/photo-1619895092538-128341789043?auto=format&fit=crop&w=900&q=80"),
    item("su7", "vegetarian", "Chickpea Tagine", 15, "Serves 6", "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=900&q=80"),
    item("su8", "vegetarian", "Spinach Feta Pie", 16, "Serves 6", "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=900&q=80"),
    item("su9", "sides", "Rosemary Potatoes", 9, "Serves 6", "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=900&q=80"),
    item("su10", "sides", "Citrus Garden Salad", 8, "Serves 6", "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=80")
  ],
  Monday: [],
  Tuesday: [],
  Wednesday: [],
  Thursday: [],
  Friday: [],
  Saturday: []
};

const weekdayNames = Object.keys(menuByDay);
const baseNames = {
  Monday: ["Adobo Chicken", "Beef Kofta", "Honey Soy Salmon", "Turkey Chili", "Pork Carnitas", "Roasted Cauliflower Steaks", "Paneer Pea Masala", "Vegetable Enchiladas", "Cilantro Lime Rice", "Charred Corn Salad"],
  Tuesday: ["Jerk Chicken", "Braised Short Rib", "Sesame Tuna Cakes", "Sausage Peppers", "Herbed Lamb Patties", "Eggplant Parmesan", "Lentil Shepherd's Pie", "Sweet Potato Curry", "Garlic Noodles", "Cucumber Tomato Salad"],
  Wednesday: ["Chicken Piccata", "Beef Bourguignon", "Maple Mustard Salmon", "Chicken Sausage Bake", "Ginger Pork Loin", "Butternut Risotto", "Black Bean Tamales", "Broccoli Cheddar Bake", "Mashed Yukon Potatoes", "Green Bean Almondine"],
  Thursday: ["Tandoori Chicken", "Korean BBQ Beef", "Cajun Catfish", "Italian Turkey Roast", "Orange Glazed Ham", "Stuffed Bell Peppers", "Miso Mushroom Bowls", "Zucchini Ricotta Rollups", "Herbed Couscous", "Apple Cabbage Slaw"],
  Friday: ["Chicken Shawarma", "Pepper Steak", "Crab Cake Tray", "BBQ Turkey Tips", "Mojo Pork", "Falafel Platter", "Three Bean Chili", "Pesto Tortellini", "Macaroni Gratin", "Roasted Seasonal Vegetables"],
  Saturday: ["Peri Peri Chicken", "Carne Asada", "Dill Yogurt Salmon", "Baked Ziti with Beef", "Chicken Satay", "Vegetable Paella", "Mushroom Stroganoff", "Tofu Peanut Curry", "Saffron Rice", "Classic Caesar Salad"]
};

const imagePool = [
  "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1562967916-eb82221dfb92?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1543352634-a1c51d9f1fa7?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1523986371872-9d3ba2e2a389?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=900&q=80"
];

Object.entries(baseNames).forEach(([day, names], dayIndex) => {
  menuByDay[day] = names.map((name, index) => {
    const category = index < 5 ? "protein" : index < 8 ? "vegetarian" : "sides";
    const price = category === "protein" ? 18 + ((dayIndex + index) % 9) : category === "vegetarian" ? 14 + ((dayIndex + index) % 5) : 8 + ((dayIndex + index) % 4);
    return item(`${day.slice(0, 2).toLowerCase()}${index + 1}`, category, name, price, "Serves 6", imagePool[index]);
  });
});

const state = {
  selectedDate: "",
  category: "all",
  cart: loadCart()
};

const dateInput = document.querySelector("#pickup-date");
const menuGrid = document.querySelector("#menu-grid");
const menuPanel = document.querySelector("#menu-panel");
const menuStatus = document.querySelector("#menu-status");
const cartDrawer = document.querySelector("#cart-drawer");
const cartItems = document.querySelector("#cart-items");
const cartSummary = document.querySelector("#cart-summary");
const cartCount = document.querySelector("#cart-count");
const itemDialog = document.querySelector("#item-dialog");
const itemDetail = document.querySelector("#item-detail");
const invoiceDialog = document.querySelector("#invoice-dialog");
const invoiceDetail = document.querySelector("#invoice-detail");

init();

function init() {
  const minDate = addDays(today, 2);
  const maxDate = addDays(today, 14);
  dateInput.min = toInputDate(minDate);
  dateInput.max = toInputDate(maxDate);
  dateInput.value = dateInput.min;
  state.selectedDate = dateInput.value;

  dateInput.addEventListener("change", () => {
    if (dateInput.value < dateInput.min) dateInput.value = dateInput.min;
    if (dateInput.value > dateInput.max) dateInput.value = dateInput.max;
    state.selectedDate = dateInput.value;
    renderMenu();
    renderCart();
  });

  const categoryTabs = Array.from(document.querySelectorAll("[data-category]"));
  categoryTabs.forEach((button) => {
    button.addEventListener("click", () => {
      selectCategoryTab(button);
    });
    button.addEventListener("keydown", (event) => {
      const currentIndex = categoryTabs.indexOf(button);
      let nextIndex = currentIndex;
      if (event.key === "ArrowRight") nextIndex = (currentIndex + 1) % categoryTabs.length;
      if (event.key === "ArrowLeft") nextIndex = (currentIndex - 1 + categoryTabs.length) % categoryTabs.length;
      if (event.key === "Home") nextIndex = 0;
      if (event.key === "End") nextIndex = categoryTabs.length - 1;
      if (nextIndex !== currentIndex) {
        event.preventDefault();
        categoryTabs[nextIndex].focus();
        selectCategoryTab(categoryTabs[nextIndex]);
      }
    });
  });

  document.querySelector("[data-open-cart]").addEventListener("click", openCart);
  document.querySelector("[data-close-cart]").addEventListener("click", closeCart);
  cartDrawer.addEventListener("click", (event) => {
    if (event.target === cartDrawer) closeCart();
  });

  document.querySelector("#checkout-form").addEventListener("submit", placeOrder);
  document.querySelector("#contact-form").addEventListener("submit", sendContact);

  renderMenu();
  renderCart();
}

function selectCategoryTab(button) {
  state.category = button.dataset.category;
  document.querySelectorAll("[data-category]").forEach((tab) => {
    const active = tab === button;
    tab.classList.toggle("active", active);
    tab.setAttribute("aria-selected", active.toString());
    tab.setAttribute("tabindex", active ? "0" : "-1");
  });
  menuPanel.setAttribute("aria-labelledby", button.id);
  renderMenu();
}

function item(id, category, name, price, quantity, image) {
  return {
    id,
    category,
    name,
    price,
    quantity,
    image,
    altText: `${name} prepared as a pickup catering tray`,
    description: `${name} is prepared in small batches with balanced seasoning and packed for easy pickup service.`,
    ingredients: buildIngredients(category, name),
    nutrition: {
      Calories: category === "sides" ? 180 : category === "vegetarian" ? 320 : 430,
      Protein: category === "protein" ? "32g" : category === "vegetarian" ? "14g" : "5g",
      Carbs: category === "sides" ? "28g" : "22g",
      Fat: category === "protein" ? "18g" : "12g",
      Sodium: category === "sides" ? "260mg" : "520mg"
    }
  };
}

function buildIngredients(category, name) {
  const pantry = category === "protein"
    ? ["olive oil", "garlic", "fresh herbs", "citrus", "sea salt"]
    : category === "vegetarian"
      ? ["seasonal vegetables", "legumes", "aromatics", "herbs", "olive oil"]
      : ["market produce", "herbs", "butter", "sea salt", "black pepper"];
  return [name.split(" ")[0].toLowerCase(), ...pantry].join(", ");
}

function renderMenu() {
  const date = parseInputDate(state.selectedDate);
  const day = weekdayNames[date.getDay()];
  const menu = menuByDay[day].filter((food) => state.category === "all" || food.category === state.category);
  menuStatus.textContent = `${day}'s pickup menu includes 5 protein items, 3 vegetarian items, and 2 sides.`;
  menuGrid.innerHTML = menu.map(foodCard).join("");

  menuGrid.querySelectorAll("[data-detail]").forEach((button) => {
    button.addEventListener("click", () => showItemDetail(button.dataset.detail));
  });
  menuGrid.querySelectorAll("[data-add]").forEach((button) => {
    button.addEventListener("click", () => addToCart(button.dataset.add));
  });
}

function foodCard(food) {
  return `
    <li>
      <article class="food-card" aria-labelledby="food-${food.id}-title">
        <img src="${food.image}" alt="${food.altText}" />
        <div class="food-card-body">
          <span class="tag">${food.category}</span>
          <h3 id="food-${food.id}-title">${food.name}</h3>
          <div class="food-meta">
            <span>$${food.price.toFixed(2)}</span>
            <span>${food.quantity}</span>
          </div>
          <div class="card-actions">
            <button class="button secondary" type="button" data-detail="${food.id}">Details</button>
            <button class="button primary" type="button" data-add="${food.id}">Add to cart</button>
          </div>
        </div>
      </article>
    </li>
  `;
}

function showItemDetail(id) {
  const food = findFood(id);
  if (!food) return;
  const nutritionRows = Object.entries(food.nutrition).map(([label, value]) => `<tr><th scope="row">${label}</th><td>${value}</td></tr>`).join("");
  itemDetail.innerHTML = `
    <img class="detail-image" src="${food.image}" alt="${food.altText}" />
    <div class="detail-heading">
      <div>
        <span class="tag">${food.category}</span>
        <h2 id="item-detail-title">${food.name}</h2>
      </div>
      <button class="icon-button" type="button" data-close-detail aria-label="Close details">x</button>
    </div>
    <p>${food.description}</p>
    <p><strong>Ingredients:</strong> ${food.ingredients}</p>
    <h3>Nutrition facts per serving</h3>
    <div class="table-scroll" tabindex="0" role="region" aria-label="Nutrition facts table">
      <table>
        <caption>Nutrition facts for ${food.name} per serving</caption>
        <tbody>${nutritionRows}</tbody>
      </table>
    </div>
    <button class="button primary full" type="button" data-add-detail="${food.id}">Add to cart</button>
  `;
  itemDetail.querySelector("[data-close-detail]").addEventListener("click", () => itemDialog.close());
  itemDetail.querySelector("[data-add-detail]").addEventListener("click", () => {
    addToCart(food.id);
    itemDialog.close();
    openCart();
  });
  itemDialog.showModal();
}

function addToCart(id) {
  const food = findFood(id);
  if (!food) return;
  const key = `${state.selectedDate}:${id}`;
  const existing = state.cart.find((cartItem) => cartItem.key === key);
  if (existing) {
    existing.portions = Math.min(30, existing.portions + 6);
  } else {
    state.cart.push({ key, id, date: state.selectedDate, portions: 6 });
  }
  saveCart();
  renderCart();
}

function renderCart() {
  state.cart = state.cart.filter((cartItem) => findFood(cartItem.id, cartItem.date));
  saveCart();
  cartCount.textContent = state.cart.length;
  if (!state.cart.length) {
    cartItems.innerHTML = `<li><p class="form-note">Your cart is empty. Add items from the menu to begin an order.</p></li>`;
    cartSummary.innerHTML = "";
    return;
  }

  cartItems.innerHTML = state.cart.map((cartItem) => {
    const food = findFood(cartItem.id, cartItem.date);
    const lineTotal = food.price * (cartItem.portions / 6);
    const cartTitleId = `cart-${cartItem.key.replace(/[^a-zA-Z0-9]/g, "-")}-title`;
    return `
      <li>
      <article class="cart-item" aria-labelledby="${cartTitleId}">
        <img src="${food.image}" alt="" aria-hidden="true" />
        <div>
          <h3 id="${cartTitleId}">${food.name}</h3>
          <p class="form-note">${formatDisplayDate(cartItem.date)} pickup, $${food.price.toFixed(2)} per 6 portions</p>
          <div class="cart-controls">
            <label>
              Portions
              <input type="number" min="6" max="30" step="1" value="${cartItem.portions}" data-portion="${cartItem.key}" />
            </label>
            <strong>$${lineTotal.toFixed(2)}</strong>
            <button class="text-button" type="button" data-remove="${cartItem.key}">Remove</button>
          </div>
        </div>
      </article>
      </li>
    `;
  }).join("");

  cartItems.querySelectorAll("[data-portion]").forEach((input) => {
    input.addEventListener("change", () => updatePortions(input.dataset.portion, input.value));
  });
  cartItems.querySelectorAll("[data-remove]").forEach((button) => {
    button.addEventListener("click", () => removeFromCart(button.dataset.remove));
  });

  const subtotal = cartSubtotal();
  const service = subtotal * 0.08;
  const total = subtotal + service;
  cartSummary.innerHTML = `
    <div class="summary-row"><dt>Subtotal</dt><dd>$${subtotal.toFixed(2)}</dd></div>
    <div class="summary-row"><dt>Packaging/service estimate</dt><dd>$${service.toFixed(2)}</dd></div>
    <div class="summary-row"><dt>Total</dt><dd>$${total.toFixed(2)}</dd></div>
  `;
}

function updatePortions(key, value) {
  const cartItem = state.cart.find((item) => item.key === key);
  if (!cartItem) return;
  cartItem.portions = Math.max(6, Math.min(30, Number(value) || 6));
  saveCart();
  renderCart();
}

function removeFromCart(key) {
  state.cart = state.cart.filter((item) => item.key !== key);
  saveCart();
  renderCart();
}

function placeOrder(event) {
  event.preventDefault();
  const note = document.querySelector("#checkout-note");
  if (!state.cart.length) {
    note.textContent = "Add at least one menu item before placing an order.";
    return;
  }

  const formData = Object.fromEntries(new FormData(event.currentTarget));
  const invoice = createInvoice(formData);
  const invoices = JSON.parse(localStorage.getItem("ggInvoices") || "[]");
  invoices.unshift(invoice);
  localStorage.setItem("ggInvoices", JSON.stringify(invoices));
  state.cart = [];
  saveCart();
  renderCart();
  event.currentTarget.reset();
  note.textContent = "Order placed. Invoice saved locally for the business owner.";
  showInvoice(invoice);
}

function createInvoice(formData) {
  const lines = state.cart.map((cartItem) => {
    const food = findFood(cartItem.id, cartItem.date);
    return {
      name: food.name,
      date: cartItem.date,
      portions: cartItem.portions,
      unitPrice: food.price,
      total: food.price * (cartItem.portions / 6)
    };
  });
  const subtotal = lines.reduce((sum, line) => sum + line.total, 0);
  const service = subtotal * 0.08;
  return {
    id: `GG-${Date.now().toString().slice(-8)}`,
    createdAt: new Date().toISOString(),
    customer: formData,
    lines,
    subtotal,
    service,
    total: subtotal + service
  };
}

function showInvoice(invoice) {
  invoiceDetail.innerHTML = `
    <div class="detail-heading">
      <div>
        <p class="eyebrow">Invoice</p>
        <h2 class="invoice-number" id="invoice-title">${invoice.id}</h2>
      </div>
      <button class="icon-button" type="button" data-close-invoice aria-label="Close invoice">x</button>
    </div>
    <p><strong>Customer:</strong> ${invoice.customer.customerName} | ${invoice.customer.phone} | ${invoice.customer.email}</p>
    <p><strong>Pickup time:</strong> ${invoice.customer.pickupTime}</p>
    <div class="table-scroll" tabindex="0" role="region" aria-label="Invoice line items table">
      <table>
        <caption>Invoice line items</caption>
        <thead><tr><th scope="col">Item</th><th scope="col">Date</th><th scope="col">Portions</th><th scope="col">Total</th></tr></thead>
        <tbody>
          ${invoice.lines.map((line) => `<tr><td>${line.name}</td><td>${formatDisplayDate(line.date)}</td><td>${line.portions}</td><td>$${line.total.toFixed(2)}</td></tr>`).join("")}
        </tbody>
      </table>
    </div>
    <p><strong>Subtotal:</strong> $${invoice.subtotal.toFixed(2)}</p>
    <p><strong>Packaging/service:</strong> $${invoice.service.toFixed(2)}</p>
    <p><strong>Total:</strong> $${invoice.total.toFixed(2)}</p>
    <p><strong>Payment:</strong> ${invoice.customer.paymentMethod} ${invoice.customer.paymentInfo ? `(${invoice.customer.paymentInfo})` : ""}</p>
    <p><strong>Instructions:</strong> ${invoice.customer.instructions || "None"}</p>
  `;
  invoiceDetail.querySelector("[data-close-invoice]").addEventListener("click", () => invoiceDialog.close());
  invoiceDialog.showModal();
}

function sendContact(event) {
  event.preventDefault();
  const messages = JSON.parse(localStorage.getItem("ggContactMessages") || "[]");
  messages.unshift({ ...Object.fromEntries(new FormData(event.currentTarget)), sentAt: new Date().toISOString() });
  localStorage.setItem("ggContactMessages", JSON.stringify(messages));
  document.querySelector("#contact-note").textContent = "Message saved locally. This placeholder can connect to email later.";
  event.currentTarget.reset();
}

function findFood(id, date = state.selectedDate) {
  const day = weekdayNames[parseInputDate(date).getDay()];
  return menuByDay[day].find((food) => food.id === id);
}

function cartSubtotal() {
  return state.cart.reduce((sum, cartItem) => {
    const food = findFood(cartItem.id, cartItem.date);
    return sum + food.price * (cartItem.portions / 6);
  }, 0);
}

function openCart() {
  cartDrawer.classList.add("open");
  cartDrawer.setAttribute("aria-hidden", "false");
}

function closeCart() {
  cartDrawer.classList.remove("open");
  cartDrawer.setAttribute("aria-hidden", "true");
}

function addDays(date, days) {
  const copy = new Date(date);
  copy.setDate(copy.getDate() + days);
  return copy;
}

function parseInputDate(value) {
  const [year, month, day] = value.split("-").map(Number);
  return new Date(year, month - 1, day);
}

function toInputDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function formatDisplayDate(value) {
  return parseInputDate(value).toLocaleDateString(undefined, { weekday: "short", month: "short", day: "numeric", year: "numeric" });
}

function loadCart() {
  return JSON.parse(localStorage.getItem("ggCart") || "[]");
}

function saveCart() {
  localStorage.setItem("ggCart", JSON.stringify(state.cart));
}

window.GGTest = { addDays, toInputDate, parseInputDate, menuByDay };
