const menuTemplates = {
  Monday: [
    item("mon-lemongrass-chicken", "Protein", "Lemongrass Chicken Thighs", 54, "Tray serves 6", "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=900&q=80", "Marinated chicken thighs roasted until juicy with a bright citrus-herb glaze.", ["Chicken", "Lemongrass", "Lime", "Garlic", "Cilantro"], [310, "28g", "11g", "520mg"]),
    item("mon-beef-kofta", "Protein", "Beef Kofta Skewers", 58, "12 skewers", "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=900&q=80", "Spiced beef skewers with parsley, onion, and a cooling yogurt drizzle.", ["Beef", "Parsley", "Onion", "Cumin", "Yogurt"], [360, "30g", "18g", "640mg"]),
    item("mon-salmon", "Protein", "Maple Ginger Salmon", 72, "Tray serves 6", "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=900&q=80", "Oven-roasted salmon with ginger, maple, and sesame scallion finish.", ["Salmon", "Ginger", "Maple", "Sesame", "Scallion"], [390, "34g", "21g", "470mg"]),
    item("mon-pork", "Protein", "Citrus Pulled Pork", 56, "2.5 lb tray", "https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=900&q=80", "Slow-cooked pork shoulder with orange, cumin, and soft roasted onions.", ["Pork", "Orange", "Cumin", "Onion", "Oregano"], [420, "32g", "24g", "710mg"]),
    item("mon-turkey", "Protein", "Herbed Turkey Meatballs", 49, "24 pieces", "https://images.unsplash.com/photo-1529042410759-befb1204b468?auto=format&fit=crop&w=900&q=80", "Tender turkey meatballs simmered in a light tomato basil sauce.", ["Turkey", "Tomato", "Basil", "Parmesan", "Breadcrumb"], [280, "25g", "13g", "590mg"]),
    item("mon-eggplant", "Vegetarian", "Roasted Eggplant Caponata", 42, "Tray serves 6", "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=80", "Sweet and savory roasted eggplant with olives, tomato, and herbs.", ["Eggplant", "Tomato", "Olives", "Celery", "Capers"], [210, "5g", "14g", "430mg"]),
    item("mon-chickpea", "Vegetarian", "Golden Chickpea Stew", 38, "2 quart pan", "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=80", "Cozy chickpeas in coconut, turmeric, and tomato with tender greens.", ["Chickpeas", "Coconut", "Turmeric", "Spinach", "Tomato"], [330, "12g", "16g", "530mg"]),
    item("mon-peppers", "Vegetarian", "Stuffed Mini Peppers", 36, "24 pieces", "https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?auto=format&fit=crop&w=900&q=80", "Mini peppers filled with herbed rice, feta, and toasted walnuts.", ["Peppers", "Rice", "Feta", "Walnut", "Mint"], [190, "6g", "9g", "350mg"]),
    item("mon-rice", "Sides", "Cilantro Lime Rice", 24, "Tray serves 8", "https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?auto=format&fit=crop&w=900&q=80", "Fluffy rice with lime zest, cilantro, and a gentle garlic note.", ["Rice", "Lime", "Cilantro", "Garlic", "Olive oil"], [210, "4g", "5g", "280mg"]),
    item("mon-salad", "Sides", "Crunchy Market Salad", 28, "Bowl serves 8", "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=900&q=80", "Crisp vegetables, toasted seeds, herbs, and lemon vinaigrette.", ["Cabbage", "Carrot", "Cucumber", "Seeds", "Lemon"], [160, "4g", "11g", "220mg"])
  ],
  Tuesday: [],
  Wednesday: [],
  Thursday: [],
  Friday: [],
  Saturday: [],
  Sunday: []
};

const dayFlavors = {
  Tuesday: ["Smoky", "Tomato Braised", "Harissa", "Garlic Butter", "Pesto"],
  Wednesday: ["Sesame", "Green Curry", "Honey Chile", "Rosemary", "Tamarind"],
  Thursday: ["Adobo", "Miso", "Chimichurri", "Coconut", "Paprika"],
  Friday: ["Jerk", "Piccata", "Saffron", "Gochujang", "Herb Crusted"],
  Saturday: ["BBQ", "Caper Lemon", "Thai Basil", "Za'atar", "Molasses"],
  Sunday: ["Sunday Gravy", "Brown Sugar", "Dill Mustard", "Achiote", "Sage"]
};

const baseNames = ["Chicken Tray", "Beef Roast", "Salmon Filets", "Pork Carnitas", "Turkey Patties"];
const vegNames = ["Mushroom Farro", "Cauliflower Bake", "Lentil Ragout"];
const sideNames = ["Seasonal Rice Pilaf", "Herbed Potato Salad"];

for (const day of Object.keys(dayFlavors)) {
  const flavors = dayFlavors[day];
  menuTemplates[day] = [
    ...baseNames.map((name, index) =>
      item(
        `${day.toLowerCase()}-protein-${index}`,
        "Protein",
        `${flavors[index]} ${name}`,
        [52, 60, 74, 57, 48][index],
        index === 4 ? "20 pieces" : "Tray serves 6",
        menuTemplates.Monday[index].image,
        `A ${flavors[index].toLowerCase()} house protein prepared in small batches for easy pickup catering.`,
        ["House spice blend", "Fresh herbs", "Garlic", "Olive oil", "Citrus"],
        [[330, "29g", "15g", "540mg"], [380, "31g", "19g", "650mg"], [410, "35g", "22g", "490mg"], [430, "33g", "25g", "720mg"], [290, "26g", "12g", "580mg"]][index]
      )
    ),
    ...vegNames.map((name, index) =>
      item(
        `${day.toLowerCase()}-veg-${index}`,
        "Vegetarian",
        `${flavors[index + 1]} ${name}`,
        [40, 37, 39][index],
        index === 2 ? "2 quart pan" : "Tray serves 6",
        menuTemplates.Monday[index + 5].image,
        `A vegetarian favorite built around seasonal produce, grains, and a ${flavors[index + 1].toLowerCase()} finish.`,
        ["Seasonal vegetables", "Fresh herbs", "Grains", "Lemon", "Olive oil"],
        [[260, "9g", "12g", "410mg"], [230, "8g", "13g", "390mg"], [310, "15g", "10g", "500mg"]][index]
      )
    ),
    ...sideNames.map((name, index) =>
      item(
        `${day.toLowerCase()}-side-${index}`,
        "Sides",
        `${flavors[index + 3]} ${name}`,
        [25, 28][index],
        index === 0 ? "Tray serves 8" : "Bowl serves 8",
        menuTemplates.Monday[index + 8].image,
        `A dependable catering side that pairs cleanly with proteins and vegetarian mains.`,
        ["Fresh herbs", "Vegetables", "Sea salt", "Olive oil", "Lemon"],
        [[210, "5g", "6g", "300mg"], [180, "4g", "10g", "260mg"]][index]
      )
    )
  ];
}

const state = {
  selectedDate: "",
  cart: load("harvestTableCart", []),
  invoices: load("harvestTableInvoices", [])
};

const menuGrid = document.querySelector("#menuGrid");
const dateInput = document.querySelector("#cateringDate");
const dateHelp = document.querySelector("#dateHelp");
const cartItems = document.querySelector("#cartItems");
const cartCount = document.querySelector("#cartCount");
const subtotalNode = document.querySelector("#subtotal");
const serviceFeeNode = document.querySelector("#serviceFee");
const grandTotalNode = document.querySelector("#grandTotal");
const itemDialog = document.querySelector("#itemDialog");
const itemDetail = document.querySelector("#itemDetail");
const checkoutForm = document.querySelector("#checkoutForm");
const checkoutStatus = document.querySelector("#checkoutStatus");
const invoiceSection = document.querySelector("#invoiceSection");
const invoiceOutput = document.querySelector("#invoiceOutput");
const invoiceArchive = document.querySelector("#invoiceArchive");
const contactForm = document.querySelector("#contactForm");
const contactStatus = document.querySelector("#contactStatus");

init();

function init() {
  setupDateWindow();
  renderMenu();
  renderCart();
  renderInvoiceArchive();

  dateInput.addEventListener("change", () => {
    state.selectedDate = dateInput.value;
    renderMenu();
    announceCheckout("");
  });

  document.querySelector("#clearCartBtn").addEventListener("click", clearCart);
  document.querySelector("#closeDialogBtn").addEventListener("click", () => itemDialog.close());
  document.querySelector("#printInvoiceBtn").addEventListener("click", () => window.print());
  checkoutForm.addEventListener("submit", placeOrder);
  checkoutForm.addEventListener("invalid", handleCheckoutInvalid, true);
  contactForm.addEventListener("submit", submitContact);
  contactForm.addEventListener("invalid", handleContactInvalid, true);
}

function item(id, category, name, price, quantity, image, description, ingredients, nutrition) {
  return { id, category, name, price, quantity, image, description, ingredients, nutrition };
}

function setupDateWindow() {
  const min = addDays(new Date(), 2);
  const max = addDays(new Date(), 14);
  dateInput.min = toInputDate(min);
  dateInput.max = toInputDate(max);
  state.selectedDate = state.selectedDate || dateInput.min;
  dateInput.value = state.selectedDate;
  dateHelp.textContent = `Available ${formatDate(min)} through ${formatDate(max)}.`;
}

function renderMenu() {
  const day = weekday(state.selectedDate);
  const menu = menuTemplates[day] || [];
  const groups = ["Protein", "Vegetarian", "Sides"];

  menuGrid.setAttribute("aria-busy", "true");
  menuGrid.innerHTML = groups
    .map((category) => {
      const items = menu.filter((food) => food.category === category);
      return `
        <section class="menu-category" aria-labelledby="${category}Heading">
          <h3 id="${category}Heading">${category}</h3>
          <div class="item-list">
            ${items.map(renderFoodCard).join("")}
          </div>
        </section>
      `;
    })
    .join("");
  menuGrid.setAttribute("aria-busy", "false");

  menuGrid.querySelectorAll("[data-add]").forEach((button) => {
    button.addEventListener("click", () => addToCart(button.dataset.add));
  });
  menuGrid.querySelectorAll("[data-detail]").forEach((button) => {
    button.addEventListener("click", () => openDetails(button.dataset.detail));
  });
}

function renderFoodCard(food) {
  return `
    <article class="food-card">
      <img src="${food.image}" alt="${food.name}" loading="lazy" />
      <div class="food-card-body">
        <h4>${food.name}</h4>
        <div class="food-meta">
          <span>${currency(food.price)}</span>
          <span>${food.quantity}</span>
        </div>
        <div class="card-actions">
          <button class="button ghost" type="button" data-detail="${food.id}" aria-label="View details for ${food.name}">Details</button>
          <button class="button primary" type="button" data-add="${food.id}" aria-label="Add ${food.name} to cart">Add</button>
        </div>
      </div>
    </article>
  `;
}

function openDetails(id) {
  const food = findFood(id);
  if (!food) return;

  itemDetail.innerHTML = `
    <div class="detail-layout">
      <img src="${food.image}" alt="${food.name}" />
      <div class="detail-copy">
        <p class="eyebrow">${food.category} - ${food.quantity}</p>
        <h3 id="detailTitle">${food.name}</h3>
        <strong>${currency(food.price)}</strong>
        <p>${food.description}</p>
        <div>
          <h4>Ingredients</h4>
          <ul class="ingredient-list">${food.ingredients.map((ingredient) => `<li>${ingredient}</li>`).join("")}</ul>
        </div>
        <div>
          <h4>Nutrition Facts</h4>
          <table>
            <caption class="sr-only">Nutrition facts per serving for ${food.name}</caption>
            <tbody>
              <tr><th scope="row">Calories</th><td>${food.nutrition[0]}</td></tr>
              <tr><th scope="row">Protein</th><td>${food.nutrition[1]}</td></tr>
              <tr><th scope="row">Fat</th><td>${food.nutrition[2]}</td></tr>
              <tr><th scope="row">Sodium</th><td>${food.nutrition[3]}</td></tr>
            </tbody>
          </table>
        </div>
        <button class="button primary full" type="button" data-add="${food.id}" aria-label="Add ${food.name} to cart">Add to Cart</button>
      </div>
    </div>
  `;

  itemDialog.setAttribute("aria-labelledby", "detailTitle");
  itemDetail.querySelector("[data-add]").addEventListener("click", () => {
    addToCart(food.id);
    itemDialog.close();
  });
  itemDialog.showModal();
}

function addToCart(id) {
  const food = findFood(id);
  if (!food) return;

  const hasDifferentDate = state.cart.some((entry) => entry.date !== state.selectedDate);
  if (hasDifferentDate) {
    const shouldReplace = window.confirm("Your cart has items for another pickup date. Start a new cart for this date?");
    if (!shouldReplace) return;
    state.cart = [];
  }

  const existing = state.cart.find((entry) => entry.id === id && entry.date === state.selectedDate);
  if (existing) {
    existing.count += 1;
  } else {
    state.cart.push({ id, date: state.selectedDate, count: 1 });
  }
  saveCart();
  renderCart();
  announceCheckout(`${food.name} added to cart.`);
}

function renderCart() {
  if (!state.cart.length) {
    cartItems.innerHTML = `<p class="empty-state">Your cart is empty. Add items from the selected daily menu.</p>`;
  } else {
    cartItems.innerHTML = state.cart.map(renderCartRow).join("");
  }

  cartItems.querySelectorAll("[data-decrease]").forEach((button) => {
    button.addEventListener("click", () => updateCart(button.dataset.decrease, -1));
  });
  cartItems.querySelectorAll("[data-increase]").forEach((button) => {
    button.addEventListener("click", () => updateCart(button.dataset.increase, 1));
  });
  cartItems.querySelectorAll("[data-remove]").forEach((button) => {
    button.addEventListener("click", () => removeCartItem(button.dataset.remove));
  });

  const totals = calculateTotals();
  const itemCount = state.cart.reduce((sum, entry) => sum + entry.count, 0);
  cartCount.textContent = itemCount;
  cartCount.setAttribute("aria-label", `${itemCount} items in cart`);
  subtotalNode.textContent = currency(totals.subtotal);
  serviceFeeNode.textContent = currency(totals.fee);
  grandTotalNode.textContent = currency(totals.total);
}

function renderCartRow(entry, index) {
  const food = findFood(entry.id, entry.date);
  if (!food) return "";
  return `
    <article class="cart-row">
      <img src="${food.image}" alt="${food.name}" />
      <div>
        <h3>${food.name}</h3>
        <p>${formatDate(new Date(`${entry.date}T00:00:00`))} - ${food.quantity}</p>
        <strong>${currency(food.price * entry.count)}</strong>
      </div>
      <div class="quantity-control" aria-label="Quantity for ${food.name}">
        <button type="button" data-decrease="${index}" aria-label="Decrease quantity of ${food.name}">-</button>
        <span aria-live="polite" aria-label="Current quantity">${entry.count}</span>
        <button type="button" data-increase="${index}" aria-label="Increase quantity of ${food.name}">+</button>
      </div>
      <button class="button ghost" type="button" data-remove="${index}" aria-label="Remove ${food.name} from cart">Remove</button>
    </article>
  `;
}

function updateCart(index, change) {
  const entry = state.cart[Number(index)];
  if (!entry) return;
  const food = findFood(entry.id, entry.date);
  entry.count += change;
  if (entry.count <= 0) state.cart.splice(Number(index), 1);
  saveCart();
  renderCart();
  if (food) announceCheckout(`${food.name} quantity ${change > 0 ? "increased" : "decreased"}.`);
}

function removeCartItem(index) {
  const entry = state.cart[Number(index)];
  const food = entry ? findFood(entry.id, entry.date) : null;
  state.cart.splice(Number(index), 1);
  saveCart();
  renderCart();
  if (food) announceCheckout(`${food.name} removed from cart.`);
}

function clearCart() {
  state.cart = [];
  saveCart();
  renderCart();
  announceCheckout("Cart cleared.");
}

function placeOrder(event) {
  event.preventDefault();
  if (!state.cart.length) {
    announceCheckout("Add at least one menu item before placing an order.");
    scrollToElement(document.querySelector("#menuTitle"));
    return;
  }

  const formData = new FormData(checkoutForm);
  const portions = Number(formData.get("portionSize"));
  if (portions < 6 || portions > 30) {
    announceCheckout("Portions must be between 6 and 30 people.");
    checkoutForm.elements.portionSize.focus();
    return;
  }

  const invoice = {
    id: `HT-${Date.now().toString().slice(-8)}`,
    createdAt: new Date().toISOString(),
    pickupDate: state.selectedDate,
    items: state.cart.map((entry) => ({ ...entry, item: findFood(entry.id, entry.date) })),
    customer: {
      name: formData.get("customerName"),
      phone: formData.get("phone"),
      email: formData.get("email")
    },
    pickupTime: formData.get("pickupTime"),
    portions,
    paymentMethod: formData.get("paymentMethod"),
    paymentInfo: formData.get("paymentInfo"),
    instructions: formData.get("instructions"),
    totals: calculateTotals()
  };

  state.invoices.unshift(invoice);
  localStorage.setItem("harvestTableInvoices", JSON.stringify(state.invoices));
  renderInvoice(invoice);
  renderInvoiceArchive();
  clearCart();
  checkoutForm.reset();
  invoiceSection.hidden = false;
  scrollToElement(invoiceSection);
  invoiceSection.focus({ preventScroll: true });
  announceCheckout(`Order placed. Invoice ${invoice.id} is ready.`);
}

function renderInvoice(invoice) {
  invoiceOutput.innerHTML = `
    <div class="invoice-head">
      <div>
        <p class="eyebrow">Invoice ${invoice.id}</p>
        <h3>Harvest Table Catering</h3>
      </div>
      <div>
        <strong>${formatDate(new Date(`${invoice.pickupDate}T00:00:00`))}</strong><br />
        <span>Pickup at ${invoice.pickupTime}</span>
      </div>
    </div>
    <p>
      <strong>Customer:</strong> ${invoice.customer.name} - ${invoice.customer.phone} - ${invoice.customer.email}<br />
      <strong>Portions:</strong> ${invoice.portions}<br />
      <strong>Payment:</strong> ${invoice.paymentMethod}${invoice.paymentInfo ? ` (${invoice.paymentInfo})` : ""}
    </p>
    ${invoice.items
      .map(
        (entry) => `
          <div class="invoice-row">
            <span>${entry.count} x ${entry.item.name}</span>
            <strong>${currency(entry.item.price * entry.count)}</strong>
          </div>
        `
      )
      .join("")}
    <div class="invoice-row"><span>Service fee</span><strong>${currency(invoice.totals.fee)}</strong></div>
    <div class="invoice-total"><span>Total</span><strong>${currency(invoice.totals.total)}</strong></div>
    <p><strong>Special instructions:</strong> ${invoice.instructions || "None"}</p>
    <p class="empty-state">Stored locally as <code>harvestTableInvoices</code> in this browser.</p>
  `;
}

function renderInvoiceArchive() {
  if (!state.invoices.length) {
    invoiceArchive.innerHTML = `<p class="empty-state">No saved invoices yet. Completed orders will appear here in this browser.</p>`;
    return;
  }

  invoiceArchive.innerHTML = state.invoices
    .map(
      (invoice, index) => `
        <article class="archive-row">
          <div>
            <strong>${invoice.id} - ${invoice.customer.name}</strong>
            <p>${formatDate(new Date(`${invoice.pickupDate}T00:00:00`))} at ${invoice.pickupTime} - ${currency(invoice.totals.total)}</p>
          </div>
          <button class="button ghost" type="button" data-invoice="${index}" aria-label="View invoice ${invoice.id}">View</button>
        </article>
      `
    )
    .join("");

  invoiceArchive.querySelectorAll("[data-invoice]").forEach((button) => {
    button.addEventListener("click", () => {
      renderInvoice(state.invoices[Number(button.dataset.invoice)]);
      invoiceSection.hidden = false;
      scrollToElement(invoiceSection);
      invoiceSection.focus({ preventScroll: true });
    });
  });
}

function announceCheckout(message) {
  checkoutStatus.textContent = message;
}

function scrollToElement(element) {
  if (!element) return;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  element.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
}

function submitContact(event) {
  event.preventDefault();
  const message = {
    ...Object.fromEntries(new FormData(contactForm).entries()),
    submittedAt: new Date().toISOString()
  };
  const messages = load("harvestTableMessages", []);
  messages.unshift(message);
  localStorage.setItem("harvestTableMessages", JSON.stringify(messages));
  contactForm.reset();
  contactStatus.textContent = "Message saved locally. Replace this with email delivery when a backend is added.";
}

function handleCheckoutInvalid(event) {
  announceCheckout(`Please complete ${fieldName(event.target)} before placing the order.`);
}

function handleContactInvalid(event) {
  contactStatus.textContent = `Please complete ${fieldName(event.target)} before sending your message.`;
}

function fieldName(field) {
  const label = field.closest("label");
  if (!label) return "the highlighted field";
  return label.childNodes[0].textContent.trim().replace(" (required)", "").toLowerCase();
}

function calculateTotals() {
  const subtotal = state.cart.reduce((sum, entry) => {
    const food = findFood(entry.id, entry.date);
    return food ? sum + food.price * entry.count : sum;
  }, 0);
  const fee = subtotal ? Math.round(subtotal * 0.05 * 100) / 100 : 0;
  return { subtotal, fee, total: subtotal + fee };
}

function findFood(id, date = state.selectedDate) {
  const day = weekday(date);
  return (menuTemplates[day] || []).find((food) => food.id === id);
}

function saveCart() {
  localStorage.setItem("harvestTableCart", JSON.stringify(state.cart));
}

function load(key, fallback) {
  try {
    return JSON.parse(localStorage.getItem(key)) || fallback;
  } catch {
    return fallback;
  }
}

function addDays(date, days) {
  const result = new Date(date);
  result.setHours(0, 0, 0, 0);
  result.setDate(result.getDate() + days);
  return result;
}

function toInputDate(date) {
  const offset = date.getTimezoneOffset();
  const local = new Date(date.getTime() - offset * 60000);
  return local.toISOString().slice(0, 10);
}

function weekday(value) {
  return new Date(`${value}T00:00:00`).toLocaleDateString("en-US", { weekday: "long" });
}

function formatDate(date) {
  return date.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric", year: "numeric" });
}

function currency(value) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(value);
}
