const menuDate = document.querySelector("#menu-date");
const dateError = document.querySelector("#date-error");
const selectedDateLabel = document.querySelector("#selected-date-label");
const menuCountLabel = document.querySelector("#menu-count-label");
const cartCount = document.querySelector("#cart-count");
const cartDrawer = document.querySelector("#cart-drawer");
const cartItems = document.querySelector("#cart-items");
const cartTotal = document.querySelector("#cart-total");
const checkoutStart = document.querySelector("#checkout-start");
const itemDialog = document.querySelector("#item-dialog");
const checkoutDialog = document.querySelector("#checkout-dialog");
const invoiceDialog = document.querySelector("#invoice-dialog");
const invoiceOutput = document.querySelector("#invoice-output");
const checkoutForm = document.querySelector("#checkout-form");
const checkoutError = document.querySelector("#checkout-error");
const toast = document.querySelector("#toast");
const nav = document.querySelector("#primary-nav");
const navToggle = document.querySelector(".nav-toggle");

const money = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" });
const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const categoryTargets = {
  Protein: document.querySelector("#protein-list"),
  Vegetarian: document.querySelector("#vegetarian-list"),
  Sides: document.querySelector("#sides-list")
};

const menuByDay = {
  Sunday: [
    item("sun-brisket", "Protein", "Cider Braised Brisket", 18, "half tray", "Slow braised beef with cider onions and thyme.", ["beef", "apple cider", "onion", "thyme"], [390, "31g", "14g", "620mg"], 12),
    item("sun-chicken", "Protein", "Rosemary Roast Chicken", 15, "half tray", "Bone-in chicken roasted with lemon and rosemary.", ["chicken", "lemon", "rosemary", "garlic"], [310, "34g", "3g", "540mg"], 20),
    item("sun-salmon", "Protein", "Maple Mustard Salmon", 19, "serves 6", "Roasted salmon finished with maple mustard glaze.", ["salmon", "maple", "mustard", "dill"], [350, "32g", "9g", "480mg"], 14),
    item("sun-meatballs", "Protein", "Sunday Turkey Meatballs", 14, "dozen", "Tender turkey meatballs in tomato basil sauce.", ["turkey", "tomato", "basil", "parmesan"], [280, "26g", "8g", "590mg"], 18),
    item("sun-pork", "Protein", "Garlic Herb Pork Loin", 16, "half tray", "Sliced pork loin with pan gravy and herbs.", ["pork", "garlic", "sage", "stock"], [330, "33g", "2g", "570mg"], 16),
    item("sun-lasagna", "Vegetarian", "Roasted Vegetable Lasagna", 13, "half tray", "Layers of pasta, ricotta, zucchini, peppers, and marinara.", ["pasta", "ricotta", "zucchini", "pepper"], [410, "19g", "13g", "710mg"], 10),
    item("sun-lentils", "Vegetarian", "Herbed Lentil Bake", 11, "half tray", "Green lentils baked with carrots, herbs, and feta.", ["lentils", "carrot", "feta", "parsley"], [300, "18g", "7g", "450mg"], 22),
    item("sun-mushrooms", "Vegetarian", "Stuffed Portobellos", 12, "serves 6", "Portobellos with spinach, grains, and mozzarella.", ["mushroom", "spinach", "farro", "mozzarella"], [290, "15g", "6g", "430mg"], 8),
    item("sun-potatoes", "Sides", "Crispy Herb Potatoes", 6, "half tray", "Golden potatoes roasted with parsley and sea salt.", ["potato", "parsley", "olive oil"], [210, "4g", "3g", "360mg"], 24),
    item("sun-greens", "Sides", "Lemon Garlic Greens", 7, "half tray", "Seasonal greens sauteed with lemon and garlic.", ["greens", "lemon", "garlic"], [120, "5g", "4g", "230mg"], 18)
  ],
  Monday: makeDay("mon", ["Tamarind Chicken", "Beef Kofta", "Sesame Cod", "Turkey Chili", "Herb Lamb Patties"], ["Chickpea Tagine", "Spinach Paneer Bake", "Miso Eggplant"], ["Cucumber Tomato Salad", "Saffron Rice"]),
  Tuesday: makeDay("tue", ["Adobo Chicken", "Ancho Beef Tips", "Ginger Salmon", "Pork Carnitas", "Turkey Picadillo"], ["Black Bean Enchiladas", "Corn Poblano Bake", "Sweet Potato Curry"], ["Cilantro Lime Rice", "Charred Broccoli"]),
  Wednesday: makeDay("wed", ["Lemon Pepper Chicken", "Short Rib Ragu", "Honey Soy Shrimp", "Baked Ziti with Sausage", "Greek Turkey Skewers"], ["Wild Mushroom Risotto", "Cauliflower Shawarma", "White Bean Stew"], ["Garlic Bread", "Italian Chopped Salad"]),
  Thursday: makeDay("thu", ["Jerk Chicken", "Balsamic Beef", "Coconut Fish Curry", "Sage Pork Chops", "Turkey Shepherd Pie"], ["Paneer Tikka Masala", "Vegetable Moussaka", "Lentil Walnut Loaf"], ["Coconut Rice", "Roasted Carrots"]),
  Friday: makeDay("fri", ["BBQ Chicken", "Smoked Beef Sliders", "Cajun Salmon", "Pork Pozole", "Turkey Burgers"], ["Macaroni Bake", "Vegetable Gumbo", "Falafel Platter"], ["Slaw with Apples", "Buttermilk Biscuits"]),
  Saturday: makeDay("sat", ["Peri Peri Chicken", "Coffee Rubbed Beef", "Dill Poached Salmon", "Pork Dumpling Tray", "Turkey Shawarma"], ["Ratatouille Tart", "Tofu Peanut Noodles", "Three Bean Cassoulet"], ["Sesame Green Beans", "Herbed Couscous"])
};

let cart = loadCart();
let selectedDate = "";
let currentMenu = [];
let lastFocusedElement = null;

function item(id, category, name, price, unit, description, ingredients, nutrition, seed) {
  return { id, category, name, price, unit, description, ingredients, nutrition, seed };
}

function makeDay(prefix, proteins, vegetarian, sides) {
  const proteinItems = proteins.map((name, index) => item(`${prefix}-p-${index}`, "Protein", name, 14 + index, "half tray", `${name} prepared in a generous homemade catering style.`, dummyIngredients(index), [280 + index * 25, `${24 + index}g`, `${4 + index}g`, `${430 + index * 30}mg`], index + 2));
  const vegetarianItems = vegetarian.map((name, index) => item(`${prefix}-v-${index}`, "Vegetarian", name, 11 + index, "half tray", `${name} with fresh herbs, grains, and seasonal vegetables.`, dummyIngredients(index + 5), [240 + index * 30, `${12 + index}g`, `${8 + index}g`, `${380 + index * 25}mg`], index + 8));
  const sideItems = sides.map((name, index) => item(`${prefix}-s-${index}`, "Sides", name, 6 + index, "half tray", `${name} portioned for sharing alongside the main dishes.`, dummyIngredients(index + 10), [160 + index * 25, `${4 + index}g`, `${5 + index}g`, `${260 + index * 20}mg`], index + 11));
  return [...proteinItems, ...vegetarianItems, ...sideItems];
}

function dummyIngredients(offset) {
  const pool = ["olive oil", "garlic", "onion", "parsley", "tomato", "ginger", "rice", "beans", "lemon", "paprika", "thyme", "pepper"];
  return [pool[offset % pool.length], pool[(offset + 3) % pool.length], pool[(offset + 6) % pool.length], pool[(offset + 9) % pool.length]];
}

function dateToInputValue(date) {
  const copy = new Date(date);
  copy.setMinutes(copy.getMinutes() - copy.getTimezoneOffset());
  return copy.toISOString().slice(0, 10);
}

function getOrderWindow() {
  const min = new Date();
  min.setHours(0, 0, 0, 0);
  min.setDate(min.getDate() + 2);
  const max = new Date();
  max.setHours(0, 0, 0, 0);
  max.setDate(max.getDate() + 14);
  return { min, max };
}

function parseLocalDate(value) {
  const [year, month, day] = value.split("-").map(Number);
  return new Date(year, month - 1, day);
}

function initializeDate() {
  const { min, max } = getOrderWindow();
  menuDate.min = dateToInputValue(min);
  menuDate.max = dateToInputValue(max);
  menuDate.value = menuDate.min;
  selectedDate = menuDate.value;
  renderMenu();
}

function renderMenu() {
  const date = parseLocalDate(menuDate.value);
  const { min, max } = getOrderWindow();
  if (date < min || date > max) {
    dateError.textContent = "Choose a pickup date between 2 and 14 days from today.";
    currentMenu = [];
  } else {
    dateError.textContent = "";
    selectedDate = menuDate.value;
    currentMenu = menuByDay[dayNames[date.getDay()]];
  }

  Object.values(categoryTargets).forEach((target) => {
    target.innerHTML = "";
  });

  currentMenu.forEach((food) => {
    categoryTargets[food.category].appendChild(createFoodCard(food));
  });

  selectedDateLabel.textContent = currentMenu.length ? `${dayNames[date.getDay()]}, ${date.toLocaleDateString(undefined, { month: "long", day: "numeric", year: "numeric" })}` : "No menu available";
  menuCountLabel.textContent = currentMenu.length ? `${currentMenu.length} items: 5 protein, 3 vegetarian, 2 sides` : "";
}

function createFoodCard(food) {
  const card = document.createElement("article");
  card.className = "food-card";
  card.innerHTML = `
    <div class="food-image" aria-hidden="true">${foodArt(food)}</div>
    <div class="food-body">
      <h3>${food.name}</h3>
      <div class="food-meta">
        <span>${money.format(food.price)} per ${food.unit}</span>
        <span>${food.category}</span>
      </div>
      <div class="food-actions">
        <button type="button" class="secondary-button" data-details="${food.id}">Details</button>
        <button type="button" data-add="${food.id}">Add to cart</button>
      </div>
    </div>
  `;
  return card;
}

function foodArt(food) {
  const palettes = [
    ["#8d2f1d", "#f0c75e", "#2b6b55"],
    ["#234f63", "#d9efe3", "#b94429"],
    ["#6f7f33", "#fff1bd", "#8d2f1d"],
    ["#b94429", "#f7e4c7", "#2b6b55"]
  ];
  const colors = palettes[food.seed % palettes.length];
  return `
    <svg aria-hidden="true" focusable="false" viewBox="0 0 420 220" xmlns="http://www.w3.org/2000/svg">
      <rect width="420" height="220" fill="${colors[1]}"></rect>
      <ellipse cx="210" cy="120" rx="150" ry="70" fill="#fffaf2"></ellipse>
      <ellipse cx="${145 + food.seed * 4}" cy="115" rx="78" ry="42" fill="${colors[0]}"></ellipse>
      <ellipse cx="${235 - food.seed * 2}" cy="98" rx="62" ry="36" fill="${colors[2]}"></ellipse>
      <circle cx="${252 + food.seed}" cy="135" r="28" fill="#f0c75e"></circle>
      <path d="M96 152c72 26 153 30 242-2" fill="none" stroke="#8e8170" stroke-width="9" stroke-linecap="round"></path>
      <circle cx="170" cy="86" r="8" fill="#fffaf2"></circle>
      <circle cx="287" cy="112" r="7" fill="#fffaf2"></circle>
    </svg>
  `;
}

function findFood(id) {
  return Object.values(menuByDay).flat().find((food) => food.id === id);
}

function addToCart(id) {
  const food = findFood(id);
  const existingDate = cart[0]?.date;
  if (existingDate && existingDate !== selectedDate) {
    announce(`Your cart is for ${formatDate(existingDate)}. Remove those items before starting a different date.`);
    return;
  }
  const existing = cart.find((entry) => entry.id === id && entry.date === selectedDate);
  if (existing) {
    existing.portions = Math.min(30, existing.portions + 1);
  } else {
    cart.push({ id, date: selectedDate, portions: 6 });
  }
  saveCart();
  renderCart();
  announce(`${food.name} added to cart.`);
}

function updateQuantity(index, delta) {
  cart[index].portions = Math.max(6, Math.min(30, cart[index].portions + delta));
  saveCart();
  renderCart();
}

function removeCartItem(index) {
  const [removed] = cart.splice(index, 1);
  saveCart();
  renderCart();
  announce(`${findFood(removed.id).name} removed from cart.`);
}

function renderCart() {
  cartItems.innerHTML = "";
  if (!cart.length) {
    cartItems.innerHTML = "<p>Your cart is empty. Add items from the menu to begin.</p>";
    checkoutStart.disabled = true;
  } else {
    checkoutStart.disabled = false;
    const cartDate = document.createElement("p");
    cartDate.innerHTML = `<strong>Pickup date:</strong> ${formatDate(cart[0].date)}`;
    cartItems.appendChild(cartDate);
    cart.forEach((entry, index) => {
      const food = findFood(entry.id);
      const row = document.createElement("article");
      row.className = "cart-item";
      row.innerHTML = `
        <div>
          <h3>${food.name}</h3>
          <p>${formatDate(entry.date)} &middot; ${money.format(food.price)} per person</p>
        </div>
        <div class="quantity-row" aria-label="Portions for ${food.name}">
          <button type="button" data-decrease="${index}" aria-label="Decrease ${food.name} portions">-</button>
          <span>${entry.portions} people</span>
          <button type="button" data-increase="${index}" aria-label="Increase ${food.name} portions">+</button>
        </div>
        <p><strong>${money.format(food.price * entry.portions)}</strong></p>
        <button type="button" class="secondary-button" data-remove="${index}">Remove</button>
      `;
      cartItems.appendChild(row);
    });
  }
  const count = cart.reduce((total, entry) => total + entry.portions, 0);
  cartCount.textContent = String(cart.length);
  cartCount.setAttribute("aria-label", `${cart.length} cart items, ${count} total portions`);
  cartTotal.textContent = money.format(cart.reduce((total, entry) => total + findFood(entry.id).price * entry.portions, 0));
}

function openItemDetails(id) {
  const food = findFood(id);
  document.querySelector("#item-title").textContent = food.name;
  document.querySelector("#item-detail").innerHTML = `
    <div class="detail-hero">
      <div class="food-image" aria-hidden="true">${foodArt(food)}</div>
      <div>
        <p><strong>${money.format(food.price)} per ${food.unit}</strong></p>
        <p>${food.description}</p>
        <button type="button" data-add="${food.id}">Add to cart</button>
      </div>
    </div>
    <section aria-labelledby="ingredients-heading">
      <h3 id="ingredients-heading">Ingredients</h3>
      <ul class="ingredient-list">${food.ingredients.map((ingredient) => `<li>${ingredient}</li>`).join("")}</ul>
    </section>
    <table>
      <caption>Nutrition facts per serving</caption>
      <tbody>
        <tr><th scope="row">Calories</th><td>${food.nutrition[0]}</td></tr>
        <tr><th scope="row">Protein</th><td>${food.nutrition[1]}</td></tr>
        <tr><th scope="row">Carbohydrates</th><td>${food.nutrition[2]}</td></tr>
        <tr><th scope="row">Sodium</th><td>${food.nutrition[3]}</td></tr>
      </tbody>
    </table>
  `;
  lastFocusedElement = document.activeElement;
  itemDialog.showModal();
}

function openCart() {
  lastFocusedElement = document.activeElement;
  cartDrawer.setAttribute("aria-hidden", "false");
  document.body.classList.add("drawer-open");
  document.querySelector("[data-close-cart]").focus();
}

function closeCart() {
  cartDrawer.setAttribute("aria-hidden", "true");
  document.body.classList.remove("drawer-open");
  if (lastFocusedElement) lastFocusedElement.focus();
}

function placeOrder(formData) {
  const invoice = {
    id: `GHC-${Date.now().toString().slice(-7)}`,
    createdAt: new Date().toISOString(),
    pickupWindow: formData.get("pickupWindow"),
    instructions: formData.get("instructions"),
    customer: {
      name: formData.get("fullName"),
      email: formData.get("email"),
      phone: formData.get("phone")
    },
    payment: {
      method: formData.get("paymentMethod"),
      note: formData.get("paymentNote")
    },
    items: cart.map((entry) => ({ ...entry, name: findFood(entry.id).name, price: findFood(entry.id).price })),
    total: cart.reduce((total, entry) => total + findFood(entry.id).price * entry.portions, 0)
  };

  const invoices = JSON.parse(localStorage.getItem("ghc_invoices") || "[]");
  invoices.push(invoice);
  localStorage.setItem("ghc_invoices", JSON.stringify(invoices));
  cart = [];
  saveCart();
  renderCart();
  checkoutDialog.close();
  closeCart();
  showInvoice(invoice);
}

function showInvoice(invoice) {
  invoiceOutput.innerHTML = `
    <div class="invoice-box">
      <h3>Invoice ${invoice.id}</h3>
      <p><strong>Pickup:</strong> ${invoice.pickupWindow}</p>
      <p><strong>Customer:</strong> ${invoice.customer.name}, ${invoice.customer.email}, ${invoice.customer.phone}</p>
      <p><strong>Payment:</strong> ${invoice.payment.method}${invoice.payment.note ? `, ${invoice.payment.note}` : ""}</p>
      <table>
        <caption>Order items</caption>
        <thead>
          <tr><th scope="col">Item</th><th scope="col">Date</th><th scope="col">People</th><th scope="col">Line total</th></tr>
        </thead>
        <tbody>
          ${invoice.items.map((entry) => `<tr><td>${entry.name}</td><td>${formatDate(entry.date)}</td><td>${entry.portions}</td><td>${money.format(entry.price * entry.portions)}</td></tr>`).join("")}
        </tbody>
      </table>
      <p><strong>Total:</strong> ${money.format(invoice.total)}</p>
      <p><strong>Special instructions:</strong> ${invoice.instructions || "None"}</p>
      <p>This invoice was saved in this browser under local storage key <code>ghc_invoices</code>.</p>
    </div>
  `;
  invoiceDialog.showModal();
}

function formatDate(value) {
  return parseLocalDate(value).toLocaleDateString(undefined, { weekday: "short", month: "short", day: "numeric", year: "numeric" });
}

function saveCart() {
  localStorage.setItem("ghc_cart", JSON.stringify(cart));
}

function loadCart() {
  try {
    return JSON.parse(localStorage.getItem("ghc_cart") || "[]");
  } catch {
    return [];
  }
}

function announce(message) {
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(announce.timer);
  announce.timer = window.setTimeout(() => toast.classList.remove("show"), 2600);
}

function routeTo(hash) {
  const route = (hash || "#menu").replace("#", "");
  document.querySelectorAll(".page").forEach((page) => page.classList.remove("active"));
  document.querySelector(`#${route}-page`)?.classList.add("active");
  document.querySelectorAll("[data-route]").forEach((link) => {
    link.setAttribute("aria-current", link.dataset.route === route ? "page" : "false");
  });
  nav.classList.remove("open");
  navToggle.setAttribute("aria-expanded", "false");
  document.querySelector("#main").focus({ preventScroll: true });
}

document.addEventListener("click", (event) => {
  const detailsId = event.target.closest("[data-details]")?.dataset.details;
  const addId = event.target.closest("[data-add]")?.dataset.add;
  const decrease = event.target.closest("[data-decrease]")?.dataset.decrease;
  const increase = event.target.closest("[data-increase]")?.dataset.increase;
  const remove = event.target.closest("[data-remove]")?.dataset.remove;

  if (detailsId) openItemDetails(detailsId);
  if (addId) addToCart(addId);
  if (decrease !== undefined) updateQuantity(Number(decrease), -1);
  if (increase !== undefined) updateQuantity(Number(increase), 1);
  if (remove !== undefined) removeCartItem(Number(remove));
});

menuDate.addEventListener("change", renderMenu);

document.querySelectorAll("[data-open-cart]").forEach((button) => button.addEventListener("click", openCart));
document.querySelector("[data-close-cart]").addEventListener("click", closeCart);
document.querySelector("[data-close-dialog]").addEventListener("click", () => itemDialog.close());
document.querySelector("[data-close-checkout]").addEventListener("click", () => checkoutDialog.close());
document.querySelectorAll("[data-close-invoice]").forEach((button) => button.addEventListener("click", () => invoiceDialog.close()));

checkoutStart.addEventListener("click", () => {
  if (!cart.length) return;
  checkoutError.textContent = "";
  checkoutDialog.showModal();
});

checkoutForm.addEventListener("submit", (event) => {
  event.preventDefault();
  checkoutError.textContent = "";
  if (!checkoutForm.checkValidity()) {
    checkoutError.textContent = "Complete all required checkout fields before placing the order.";
    checkoutForm.reportValidity();
    return;
  }
  placeOrder(new FormData(checkoutForm));
  checkoutForm.reset();
});

document.querySelector("#contact-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const status = document.querySelector("#contact-status");
  if (!form.checkValidity()) {
    status.textContent = "Please complete your name, email, and message.";
    form.reportValidity();
    return;
  }
  status.textContent = "Thanks. Your message is ready for the owner to review in a future connected version.";
  form.reset();
});

navToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

window.addEventListener("hashchange", () => routeTo(window.location.hash));

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && cartDrawer.getAttribute("aria-hidden") === "false") {
    closeCart();
  }
  if (event.key === "Tab" && cartDrawer.getAttribute("aria-hidden") === "false") {
    trapDrawerFocus(event);
  }
});

itemDialog.addEventListener("close", () => {
  if (lastFocusedElement) lastFocusedElement.focus();
});

cartDrawer.addEventListener("click", (event) => {
  if (event.target === cartDrawer) closeCart();
});

function trapDrawerFocus(event) {
  const focusable = cartDrawer.querySelectorAll("a[href], button:not(:disabled), input:not(:disabled), select:not(:disabled), textarea:not(:disabled), [tabindex]:not([tabindex='-1'])");
  const first = focusable[0];
  const last = focusable[focusable.length - 1];
  if (!first || !last) return;
  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
}

initializeDate();
renderCart();
routeTo(window.location.hash || "#menu");
