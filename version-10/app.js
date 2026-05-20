const dayMenus = {
  Sunday: [
    item("sun-p1", "Citrus Herb Chicken", "Protein", 13, "Half-pan servings of roasted chicken with lemon, parsley, and garlic.", ["Chicken", "lemon", "garlic", "parsley", "olive oil"], [330, 29, 5, 19]),
    item("sun-p2", "Coconut Beef Stew", "Protein", 15, "Slow simmered beef with coconut milk, ginger, and root vegetables.", ["Beef", "coconut milk", "ginger", "carrot", "onion"], [430, 31, 12, 26]),
    item("sun-p3", "Smoky Turkey Meatballs", "Protein", 12, "Tender turkey meatballs with tomato pepper sauce.", ["Turkey", "tomato", "bell pepper", "egg", "breadcrumbs"], [310, 27, 10, 16]),
    item("sun-p4", "Garlic Shrimp Tray", "Protein", 16, "Pan roasted shrimp finished with garlic butter and herbs.", ["Shrimp", "butter", "garlic", "cilantro", "lime"], [280, 26, 3, 17]),
    item("sun-p5", "Maple Mustard Pork", "Protein", 14, "Sliced pork shoulder glazed with maple mustard sauce.", ["Pork", "mustard", "maple", "thyme", "apple cider"], [390, 30, 8, 23]),
    item("sun-v1", "Chickpea Tomato Bake", "Vegetarian", 10, "Warm chickpeas baked with tomato, spinach, and feta.", ["Chickpeas", "tomato", "spinach", "feta", "oregano"], [290, 14, 33, 11]),
    item("sun-v2", "Stuffed Pepper Boats", "Vegetarian", 11, "Bell peppers filled with rice, lentils, and herbs.", ["Bell pepper", "rice", "lentils", "tomato", "mint"], [270, 11, 42, 6]),
    item("sun-v3", "Miso Eggplant", "Vegetarian", 11, "Roasted eggplant brushed with savory miso glaze.", ["Eggplant", "miso", "sesame", "scallion", "ginger"], [240, 7, 29, 10]),
    item("sun-s1", "Golden Rice Pilaf", "Sides", 5, "Fluffy rice with turmeric, peas, and toasted onion.", ["Rice", "turmeric", "peas", "onion", "stock"], [210, 5, 41, 3]),
    item("sun-s2", "Cucumber Herb Salad", "Sides", 6, "Crisp cucumber salad with dill and vinegar dressing.", ["Cucumber", "dill", "vinegar", "red onion", "olive oil"], [90, 2, 9, 5])
  ],
  Monday: [
    item("mon-p1", "Ginger Scallion Chicken", "Protein", 13, "Poached chicken with bright ginger scallion sauce.", ["Chicken", "ginger", "scallion", "soy", "sesame"], [320, 30, 4, 18]),
    item("mon-p2", "Tomato Braised Beef", "Protein", 15, "Fork-tender beef in tomato sauce with herbs.", ["Beef", "tomato", "onion", "bay leaf", "carrot"], [420, 32, 11, 24]),
    item("mon-p3", "Lemon Dill Salmon", "Protein", 17, "Baked salmon portions with lemon dill finish.", ["Salmon", "lemon", "dill", "olive oil", "pepper"], [370, 34, 1, 25]),
    item("mon-p4", "Turkey Picadillo", "Protein", 12, "Ground turkey with olives, raisins, and warm spices.", ["Turkey", "olive", "raisin", "tomato", "cumin"], [350, 28, 14, 18]),
    item("mon-p5", "Adobo Pork Shoulder", "Protein", 14, "Savory pork shoulder cooked with vinegar, garlic, and soy.", ["Pork", "vinegar", "garlic", "soy", "bay leaf"], [410, 31, 5, 27]),
    item("mon-v1", "Spinach Paneer Tray", "Vegetarian", 12, "Creamy spinach paneer with mild spices.", ["Paneer", "spinach", "cream", "garam masala", "onion"], [340, 17, 16, 23]),
    item("mon-v2", "Mushroom Lentil Ragu", "Vegetarian", 10, "Earthy mushrooms and lentils in tomato herb sauce.", ["Lentils", "mushroom", "tomato", "celery", "thyme"], [280, 16, 39, 5]),
    item("mon-v3", "Vegetable Korma", "Vegetarian", 11, "Mixed vegetables in a mild coconut cashew sauce.", ["Cauliflower", "peas", "coconut", "cashew", "spice"], [310, 9, 35, 16]),
    item("mon-s1", "Cilantro Lime Rice", "Sides", 5, "Steamed rice tossed with lime and cilantro.", ["Rice", "lime", "cilantro", "salt", "oil"], [205, 4, 40, 3]),
    item("mon-s2", "Roasted Sweet Potatoes", "Sides", 6, "Sweet potato wedges with smoked paprika.", ["Sweet potato", "paprika", "olive oil", "garlic", "parsley"], [190, 3, 34, 5])
  ],
  Tuesday: [
    item("tue-p1", "Berbere Chicken", "Protein", 13, "Roasted chicken with warm berbere spice and onions.", ["Chicken", "berbere", "onion", "garlic", "tomato"], [350, 30, 8, 20]),
    item("tue-p2", "Beef Kofta Tray", "Protein", 15, "Spiced beef kofta with cucumber yogurt sauce.", ["Beef", "parsley", "cumin", "yogurt", "cucumber"], [390, 28, 7, 25]),
    item("tue-p3", "Tamarind Glazed Fish", "Protein", 16, "White fish baked with tangy tamarind glaze.", ["Cod", "tamarind", "garlic", "honey", "lime"], [300, 31, 9, 12]),
    item("tue-p4", "Rosemary Turkey Roast", "Protein", 13, "Sliced turkey roast with rosemary pan jus.", ["Turkey", "rosemary", "stock", "garlic", "lemon"], [310, 35, 3, 15]),
    item("tue-p5", "Pork Chile Verde", "Protein", 14, "Pork simmered with tomatillo and mild green chile.", ["Pork", "tomatillo", "green chile", "onion", "cilantro"], [400, 30, 8, 24]),
    item("tue-v1", "Black Bean Enchilada Bake", "Vegetarian", 10, "Layered tortillas, beans, and roasted pepper sauce.", ["Black beans", "corn tortilla", "pepper", "cheese", "tomato"], [320, 15, 42, 10]),
    item("tue-v2", "Cauliflower Shawarma", "Vegetarian", 10, "Roasted cauliflower with shawarma spices and tahini.", ["Cauliflower", "tahini", "lemon", "cumin", "parsley"], [260, 8, 24, 16]),
    item("tue-v3", "Sesame Tofu Greens", "Vegetarian", 11, "Tofu and greens tossed in sesame garlic sauce.", ["Tofu", "bok choy", "sesame", "garlic", "soy"], [300, 18, 18, 18]),
    item("tue-s1", "Tomato Couscous", "Sides", 5, "Pearl couscous with tomato, herbs, and olive oil.", ["Couscous", "tomato", "parsley", "olive oil", "stock"], [220, 6, 38, 5]),
    item("tue-s2", "Charred Broccoli", "Sides", 6, "Roasted broccoli with lemon and garlic.", ["Broccoli", "lemon", "garlic", "olive oil", "pepper"], [120, 5, 12, 7])
  ],
  Wednesday: [
    item("wed-p1", "Honey Garlic Chicken", "Protein", 13, "Glazed chicken thighs with honey garlic sauce.", ["Chicken", "honey", "garlic", "soy", "ginger"], [370, 29, 14, 20]),
    item("wed-p2", "Peppercorn Beef Tips", "Protein", 16, "Tender beef tips in peppercorn gravy.", ["Beef", "peppercorn", "cream", "stock", "onion"], [450, 32, 8, 29]),
    item("wed-p3", "Herbed Lamb Patties", "Protein", 16, "Mini lamb patties with parsley and yogurt dip.", ["Lamb", "parsley", "mint", "yogurt", "cumin"], [430, 27, 7, 31]),
    item("wed-p4", "Smoked Paprika Turkey", "Protein", 12, "Ground turkey cooked with paprika and tomatoes.", ["Turkey", "paprika", "tomato", "garlic", "onion"], [320, 29, 9, 16]),
    item("wed-p5", "Mojo Pork", "Protein", 14, "Citrus garlic pork with oregano and onions.", ["Pork", "orange", "lime", "garlic", "oregano"], [390, 31, 6, 24]),
    item("wed-v1", "Roasted Vegetable Lasagna", "Vegetarian", 12, "Layered pasta, vegetables, ricotta, and tomato sauce.", ["Pasta", "zucchini", "ricotta", "tomato", "mozzarella"], [360, 17, 43, 13]),
    item("wed-v2", "Curried Chickpea Potatoes", "Vegetarian", 10, "Chickpeas and potatoes in tomato curry sauce.", ["Chickpeas", "potato", "tomato", "curry", "cilantro"], [330, 13, 52, 7]),
    item("wed-v3", "Pesto White Bean Bake", "Vegetarian", 11, "White beans baked with basil pesto and tomatoes.", ["White beans", "basil", "parmesan", "tomato", "olive oil"], [310, 15, 30, 14]),
    item("wed-s1", "Garlic Mashed Potatoes", "Sides", 6, "Creamy mashed potatoes with roasted garlic.", ["Potato", "milk", "butter", "garlic", "salt"], [230, 5, 34, 8]),
    item("wed-s2", "Green Bean Almondine", "Sides", 6, "Green beans with toasted almonds and lemon.", ["Green beans", "almond", "lemon", "butter", "pepper"], [150, 5, 13, 10])
  ],
  Thursday: [
    item("thu-p1", "Salsa Verde Chicken", "Protein", 13, "Pulled chicken in mild tomatillo salsa.", ["Chicken", "tomatillo", "cilantro", "lime", "onion"], [320, 32, 6, 15]),
    item("thu-p2", "Korean Braised Beef", "Protein", 16, "Beef braised with pear, soy, garlic, and sesame.", ["Beef", "pear", "soy", "garlic", "sesame"], [430, 31, 13, 25]),
    item("thu-p3", "Cajun Shrimp", "Protein", 16, "Shrimp with mild Cajun spices and peppers.", ["Shrimp", "pepper", "paprika", "garlic", "butter"], [290, 27, 5, 17]),
    item("thu-p4", "Turkey Bolognese", "Protein", 12, "Turkey tomato meat sauce for family-style service.", ["Turkey", "tomato", "carrot", "celery", "basil"], [340, 28, 13, 17]),
    item("thu-p5", "Apple Cider Pork", "Protein", 14, "Pork roast with apple cider onion gravy.", ["Pork", "apple cider", "onion", "sage", "stock"], [400, 30, 9, 24]),
    item("thu-v1", "Red Lentil Dal", "Vegetarian", 10, "Soft red lentils with turmeric, cumin, and tomato.", ["Red lentils", "turmeric", "tomato", "cumin", "ginger"], [290, 17, 45, 4]),
    item("thu-v2", "Zucchini Feta Fritters", "Vegetarian", 11, "Baked zucchini fritters with lemon yogurt.", ["Zucchini", "feta", "egg", "flour", "yogurt"], [260, 12, 20, 14]),
    item("thu-v3", "Roasted Mushroom Polenta", "Vegetarian", 12, "Creamy polenta topped with roasted mushrooms.", ["Polenta", "mushroom", "parmesan", "thyme", "butter"], [340, 12, 41, 14]),
    item("thu-s1", "Herbed Farro", "Sides", 6, "Chewy farro tossed with herbs and olive oil.", ["Farro", "parsley", "olive oil", "lemon", "stock"], [230, 8, 39, 5]),
    item("thu-s2", "Carrot Slaw", "Sides", 5, "Carrot slaw with apple, parsley, and lemon.", ["Carrot", "apple", "parsley", "lemon", "olive oil"], [110, 2, 17, 4])
  ],
  Friday: [
    item("fri-p1", "Jerk Chicken Tray", "Protein", 13, "Mild jerk-spiced chicken with lime.", ["Chicken", "allspice", "thyme", "lime", "scallion"], [360, 30, 7, 21]),
    item("fri-p2", "Beef Barbacoa", "Protein", 16, "Shredded beef with chile, cumin, and citrus.", ["Beef", "chile", "cumin", "orange", "garlic"], [440, 34, 6, 27]),
    item("fri-p3", "Dill Yogurt Salmon", "Protein", 17, "Baked salmon with dill yogurt sauce.", ["Salmon", "yogurt", "dill", "lemon", "pepper"], [360, 34, 2, 24]),
    item("fri-p4", "Turkey Chili", "Protein", 12, "Turkey chili with beans and tomatoes.", ["Turkey", "beans", "tomato", "chile", "onion"], [330, 28, 30, 9]),
    item("fri-p5", "Garlic Herb Pork Loin", "Protein", 14, "Pork loin roasted with garlic and herbs.", ["Pork", "garlic", "rosemary", "thyme", "olive oil"], [370, 32, 2, 24]),
    item("fri-v1", "Sweet Potato Black Bean Bake", "Vegetarian", 10, "Roasted sweet potatoes and black beans with salsa.", ["Sweet potato", "black beans", "salsa", "corn", "cheese"], [330, 14, 50, 8]),
    item("fri-v2", "Tofu Peanut Noodles", "Vegetarian", 11, "Rice noodles, tofu, vegetables, and peanut sauce.", ["Tofu", "rice noodles", "peanut", "carrot", "cabbage"], [390, 18, 46, 15]),
    item("fri-v3", "Eggplant Parmesan Bake", "Vegetarian", 12, "Baked eggplant with tomato sauce and cheese.", ["Eggplant", "tomato", "mozzarella", "parmesan", "basil"], [340, 16, 33, 16]),
    item("fri-s1", "Coconut Rice", "Sides", 5, "Jasmine rice steamed with coconut milk.", ["Rice", "coconut milk", "salt", "lime", "scallion"], [250, 4, 41, 8]),
    item("fri-s2", "Roasted Corn Salad", "Sides", 6, "Corn salad with peppers, herbs, and lime.", ["Corn", "pepper", "lime", "cilantro", "onion"], [160, 4, 27, 4])
  ],
  Saturday: [
    item("sat-p1", "Pomegranate Chicken", "Protein", 14, "Chicken braised with pomegranate and warm spices.", ["Chicken", "pomegranate", "cinnamon", "onion", "walnut"], [390, 29, 16, 21]),
    item("sat-p2", "Short Rib Ragu", "Protein", 18, "Slow cooked short rib tomato ragu.", ["Beef short rib", "tomato", "red wine", "carrot", "onion"], [520, 34, 12, 36]),
    item("sat-p3", "Lemon Pepper Cod", "Protein", 16, "Cod baked with lemon, pepper, and olive oil.", ["Cod", "lemon", "pepper", "olive oil", "parsley"], [270, 32, 2, 11]),
    item("sat-p4", "Turkey Shawarma", "Protein", 13, "Turkey strips with shawarma spices and onions.", ["Turkey", "cumin", "coriander", "onion", "yogurt"], [330, 31, 8, 16]),
    item("sat-p5", "Crisp Pork Carnitas", "Protein", 14, "Tender pork with orange, garlic, and crisp edges.", ["Pork", "orange", "garlic", "oregano", "bay leaf"], [430, 31, 4, 30]),
    item("sat-v1", "Wild Mushroom Risotto", "Vegetarian", 12, "Creamy risotto with mushrooms and parmesan.", ["Rice", "mushroom", "parmesan", "stock", "butter"], [360, 12, 48, 13]),
    item("sat-v2", "Falafel Tray", "Vegetarian", 10, "Baked falafel with tahini sauce.", ["Chickpeas", "parsley", "tahini", "garlic", "cumin"], [310, 14, 36, 12]),
    item("sat-v3", "Paneer Tikka Skewers", "Vegetarian", 12, "Paneer and vegetables with tikka marinade.", ["Paneer", "pepper", "yogurt", "spices", "onion"], [340, 17, 18, 22]),
    item("sat-s1", "Lemon Orzo", "Sides", 5, "Orzo pasta with lemon, herbs, and olive oil.", ["Orzo", "lemon", "parsley", "olive oil", "stock"], [220, 6, 37, 5]),
    item("sat-s2", "Seasonal Fruit Tray", "Sides", 6, "Fresh cut seasonal fruit with mint.", ["Melon", "berries", "grape", "mint", "citrus"], [100, 2, 25, 0])
  ]
};

const categoryIds = { Protein: "protein", Vegetarian: "vegetarian", Sides: "sides" };
const cartKey = "hearthLadleCart";
const invoiceKey = "hearthLadleInvoices";
const state = {
  selectedDate: "",
  cart: readStorage(cartKey, []),
  activeItem: null
};

const els = {};

document.addEventListener("DOMContentLoaded", () => {
  cacheElements();
  setupDates();
  bindEvents();
  renderAll();
});

function item(id, name, category, price, description, ingredients, nutrition) {
  return {
    id,
    name,
    category,
    price,
    description,
    ingredients,
    nutrition: {
      calories: nutrition[0],
      protein: nutrition[1],
      carbs: nutrition[2],
      fat: nutrition[3]
    },
    image: plateSvg(category, name)
  };
}

function cacheElements() {
  els.navToggle = document.querySelector(".nav-toggle");
  els.navLinks = document.querySelector("#nav-links");
  els.navAnchors = [...document.querySelectorAll(".nav-links a")];
  els.date = document.querySelector("#pickup-date");
  els.dateStatus = document.querySelector("#date-status");
  els.earliest = document.querySelector("#today-plus-two");
  els.menu = document.querySelector("#menu-list");
  els.cart = document.querySelector("#cart-panel");
  els.cartCount = document.querySelector("#cart-count");
  els.checkoutForm = document.querySelector("#checkout-form");
  els.checkoutStatus = document.querySelector("#checkout-status");
  els.invoiceOutput = document.querySelector("#invoice-output");
  els.invoiceList = document.querySelector("#invoice-list");
  els.clearInvoices = document.querySelector("#clear-invoices");
  els.dialog = document.querySelector("#item-dialog");
  els.dialogTitle = document.querySelector("#dialog-title");
  els.dialogContent = document.querySelector("#dialog-content");
  els.closeDialog = document.querySelector("#close-dialog");
  els.contactForm = document.querySelector("#contact-form");
  els.contactStatus = document.querySelector("#contact-status");
}

function setupDates() {
  const min = addDays(new Date(), 2);
  const max = addDays(new Date(), 14);
  els.date.min = toDateValue(min);
  els.date.max = toDateValue(max);
  state.selectedDate = els.date.min;
  els.date.value = state.selectedDate;
}

function bindEvents() {
  els.navToggle.addEventListener("click", () => {
    const isOpen = els.navToggle.getAttribute("aria-expanded") === "true";
    els.navToggle.setAttribute("aria-expanded", String(!isOpen));
    els.navLinks.classList.toggle("is-open", !isOpen);
    document.body.classList.toggle("nav-open", !isOpen);
  });

  els.navAnchors.forEach((link) => {
    link.addEventListener("click", () => {
      els.navToggle.setAttribute("aria-expanded", "false");
      els.navLinks.classList.remove("is-open");
      document.body.classList.remove("nav-open");
      updateCurrentNav(link.getAttribute("href"));
    });
  });

  window.addEventListener("hashchange", () => updateCurrentNav(location.hash || "#menu"));

  els.date.addEventListener("change", () => {
    if (!els.date.checkValidity()) {
      els.dateStatus.textContent = "Choose a pickup date between " + formatDate(els.date.min) + " and " + formatDate(els.date.max) + ".";
      return;
    }
    state.selectedDate = els.date.value;
    renderMenu();
    els.dateStatus.textContent = "Showing the " + getDayName(state.selectedDate) + " menu for " + formatDate(state.selectedDate) + cartDateNote();
  });

  els.earliest.addEventListener("click", () => {
    els.date.value = els.date.min;
    els.date.dispatchEvent(new Event("change"));
  });

  els.menu.addEventListener("click", handleMenuClick);
  els.cart.addEventListener("click", handleCartClick);
  els.cart.addEventListener("change", handleCartChange);
  els.checkoutForm.addEventListener("submit", handleCheckout);
  els.closeDialog.addEventListener("click", closeDialog);
  els.dialog.addEventListener("click", (event) => {
    if (event.target === els.dialog) closeDialog();
  });
  els.clearInvoices.addEventListener("click", () => {
    localStorage.removeItem(invoiceKey);
    renderInvoices();
  });
  els.contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    els.contactStatus.textContent = "Thanks. This demo captured your message locally in the page, but did not send email.";
    els.contactForm.reset();
  });
}

function renderAll() {
  updateCurrentNav(location.hash || "#menu");
  renderMenu();
  renderCart();
  renderInvoices();
}

function renderMenu() {
  const day = getDayName(state.selectedDate);
  const menu = dayMenus[day];
  els.menu.innerHTML = ["Protein", "Vegetarian", "Sides"].map((category) => {
    const items = menu.filter((entry) => entry.category === category);
    return `
      <section id="${categoryIds[category]}" class="menu-category" aria-labelledby="${categoryIds[category]}-heading">
        <h3 id="${categoryIds[category]}-heading">${category}</h3>
        <div class="items-grid">
          ${items.map(renderItemCard).join("")}
        </div>
      </section>
    `;
  }).join("");
  els.dateStatus.textContent = "Showing the " + day + " menu for " + formatDate(state.selectedDate) + cartDateNote();
}

function renderItemCard(food) {
  return `
    <article class="item-card">
      <img class="item-image" src="${food.image}" alt="${food.name} served family-style on a plate.">
      <div class="item-body">
        <div>
          <h4>${food.name}</h4>
          <p class="meta">${food.category}</p>
        </div>
        <p>${food.description}</p>
        <p><span class="price">$${food.price.toFixed(2)}</span> per person</p>
        <div class="qty-row">
          <label for="qty-${food.id}">Servings
            <input id="qty-${food.id}" type="number" min="6" max="30" value="6" inputmode="numeric">
          </label>
        </div>
        <div class="item-actions">
          <button class="button" type="button" data-action="details" data-id="${food.id}">View details</button>
          <button class="button primary" type="button" data-action="add" data-id="${food.id}">Add to cart</button>
        </div>
      </div>
    </article>
  `;
}

function renderCart() {
  els.cartCount.textContent = String(state.cart.length);
  els.cartCount.setAttribute("aria-label", state.cart.length + " items in cart");
  writeStorage(cartKey, state.cart);

  if (state.cart.length === 0) {
    els.cart.innerHTML = `<div class="empty-state"><p>Your cart is empty.</p><a class="button primary" href="#menu-browser">Choose menu items</a></div>`;
    return;
  }

  const rows = state.cart.map((cartItem) => {
    const food = findFood(cartItem.id);
    if (!food) return "";
    return `
      <li class="cart-item">
        <div>
          <strong>${food.name}</strong>
          <p class="meta">${food.category} - $${food.price.toFixed(2)} per person</p>
        </div>
        <div class="cart-line">
          <label for="cart-qty-${food.id}">Servings
            <input id="cart-qty-${food.id}" type="number" min="6" max="30" value="${cartItem.quantity}" inputmode="numeric" data-id="${food.id}">
          </label>
          <span class="price">$${lineTotal(food, cartItem.quantity).toFixed(2)}</span>
          <button class="button quiet" type="button" data-action="remove" data-id="${food.id}">Remove</button>
        </div>
      </li>
    `;
  }).join("");

  const pickupDate = cartPickupDate();
  els.cart.innerHTML = `
    <p><strong>Pickup date for this cart:</strong> ${formatDate(pickupDate)}</p>
    <ul class="cart-list">${rows}</ul>
    <p class="cart-total">Estimated total: $${cartTotal().toFixed(2)}</p>
    <a class="button primary" href="#checkout">Continue to checkout</a>
  `;
}

function renderInvoices() {
  const invoices = readStorage(invoiceKey, []);
  if (invoices.length === 0) {
    els.invoiceList.innerHTML = `<p class="empty-state">No invoices saved yet.</p>`;
    return;
  }

  els.invoiceList.innerHTML = `
    <ul class="invoice-list">
      ${invoices.map((invoice) => `
        <li class="invoice-card">
          <strong>${invoice.id}</strong>
          <p>${invoice.customer.name} - ${formatDate(invoice.pickupDate)} at ${invoice.pickupTime}</p>
          <p class="price">$${invoice.total.toFixed(2)}</p>
        </li>
      `).join("")}
    </ul>
  `;
}

function handleMenuClick(event) {
  const button = event.target.closest("button[data-action]");
  if (!button) return;
  const food = findFood(button.dataset.id);
  if (!food) return;
  if (button.dataset.action === "details") {
    openDetails(food);
    return;
  }
  const qtyInput = document.querySelector("#qty-" + CSS.escape(food.id));
  addToCart(food.id, clampQuantity(qtyInput.value));
}

function handleCartClick(event) {
  const button = event.target.closest("button[data-action='remove']");
  if (!button) return;
  state.cart = state.cart.filter((entry) => entry.id !== button.dataset.id);
  renderCart();
}

function handleCartChange(event) {
  const input = event.target.closest("input[data-id]");
  if (!input) return;
  const quantity = clampQuantity(input.value);
  input.value = quantity;
  state.cart = state.cart.map((entry) => entry.id === input.dataset.id ? { ...entry, quantity } : entry);
  renderCart();
}

function addToCart(id, quantity) {
  const currentCartDate = cartPickupDate();
  if (state.cart.length > 0 && currentCartDate !== state.selectedDate) {
    state.cart = [];
    els.dateStatus.textContent = "Started a new cart for " + formatDate(state.selectedDate) + ". Previous date items were removed.";
  }
  const existing = state.cart.find((entry) => entry.id === id);
  if (existing) {
    existing.quantity = clampQuantity(existing.quantity + quantity);
  } else {
    state.cart.push({ id, quantity, date: state.selectedDate });
  }
  renderCart();
}

function openDetails(food) {
  els.dialogTitle.textContent = food.name;
  els.dialogContent.innerHTML = `
    <img class="item-image" src="${food.image}" alt="${food.name} served family-style on a plate.">
    <p>${food.description}</p>
    <h3>Ingredients</h3>
    <p>${food.ingredients.join(", ")}.</p>
    <h3>Nutrition facts per serving</h3>
    <table class="nutrition-table">
      <tbody>
        <tr><th scope="row">Calories</th><td>${food.nutrition.calories}</td></tr>
        <tr><th scope="row">Protein</th><td>${food.nutrition.protein} g</td></tr>
        <tr><th scope="row">Carbohydrates</th><td>${food.nutrition.carbs} g</td></tr>
        <tr><th scope="row">Fat</th><td>${food.nutrition.fat} g</td></tr>
      </tbody>
    </table>
    <div class="item-actions">
      <button class="button primary" type="button" data-dialog-add="${food.id}">Add 6 servings to cart</button>
    </div>
  `;
  els.dialogContent.querySelector("[data-dialog-add]").addEventListener("click", () => {
    addToCart(food.id, 6);
    closeDialog();
  });
  if (typeof els.dialog.showModal === "function") {
    els.dialog.showModal();
  }
}

function closeDialog() {
  if (els.dialog.open) els.dialog.close();
}

function handleCheckout(event) {
  event.preventDefault();
  if (state.cart.length === 0) {
    els.checkoutStatus.textContent = "Add at least one item to the cart before checkout.";
    location.hash = "#cart";
    return;
  }
  if (!els.checkoutForm.reportValidity()) return;

  const data = new FormData(els.checkoutForm);
  const invoice = createInvoice(data);
  const invoices = readStorage(invoiceKey, []);
  invoices.unshift(invoice);
  writeStorage(invoiceKey, invoices);
  state.cart = [];
  writeStorage(cartKey, state.cart);
  renderCart();
  renderInvoices();
  renderInvoice(invoice);
  els.checkoutForm.reset();
  els.checkoutStatus.textContent = "Order placed. Invoice " + invoice.id + " is shown below and saved on this device.";
}

function createInvoice(data) {
  const lines = state.cart.map((entry) => {
    const food = findFood(entry.id);
    return {
      name: food.name,
      category: food.category,
      price: food.price,
      quantity: entry.quantity,
      total: lineTotal(food, entry.quantity)
    };
  });
  return {
    id: "INV-" + new Date().toISOString().replace(/\D/g, "").slice(0, 14),
    createdAt: new Date().toISOString(),
    pickupDate: cartPickupDate(),
    pickupTime: data.get("pickupTime"),
    customer: {
      name: data.get("name"),
      email: data.get("email"),
      phone: data.get("phone")
    },
    payment: data.get("payment"),
    billingNote: data.get("billingNote"),
    instructions: data.get("instructions"),
    lines,
    total: lines.reduce((sum, line) => sum + line.total, 0)
  };
}

function renderInvoice(invoice) {
  els.invoiceOutput.innerHTML = `
    <section aria-labelledby="invoice-title">
      <h3 id="invoice-title">Invoice ${invoice.id}</h3>
      <p><strong>Customer:</strong> ${escapeHtml(invoice.customer.name)} (${escapeHtml(invoice.customer.email)}, ${escapeHtml(invoice.customer.phone)})</p>
      <p><strong>Pickup:</strong> ${formatDate(invoice.pickupDate)} at ${escapeHtml(invoice.pickupTime)}</p>
      <p><strong>Payment:</strong> ${escapeHtml(invoice.payment)}</p>
      <table class="invoice-table">
        <thead>
          <tr>
            <th scope="col">Item</th>
            <th scope="col">Servings</th>
            <th scope="col">Price</th>
            <th scope="col">Line total</th>
          </tr>
        </thead>
        <tbody>
          ${invoice.lines.map((line) => `
            <tr>
              <td data-label="Item">${escapeHtml(line.name)}</td>
              <td data-label="Servings">${line.quantity}</td>
              <td data-label="Price">$${line.price.toFixed(2)}</td>
              <td data-label="Line total">$${line.total.toFixed(2)}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
      <p class="cart-total">Total due at pickup: $${invoice.total.toFixed(2)}</p>
      ${invoice.instructions ? `<p><strong>Special instructions:</strong> ${escapeHtml(invoice.instructions)}</p>` : ""}
    </section>
  `;
}

function findFood(id) {
  return Object.values(dayMenus).flat().find((entry) => entry.id === id);
}

function cartTotal() {
  return state.cart.reduce((sum, entry) => {
    const food = findFood(entry.id);
    return food ? sum + lineTotal(food, entry.quantity) : sum;
  }, 0);
}

function lineTotal(food, quantity) {
  return food.price * quantity;
}

function cartPickupDate() {
  return state.cart[0]?.date || state.selectedDate;
}

function cartDateNote() {
  if (state.cart.length === 0 || cartPickupDate() === state.selectedDate) return ".";
  return ". Your current cart is still scheduled for " + formatDate(cartPickupDate()) + ". Adding an item from this menu will start a new cart.";
}

function clampQuantity(value) {
  const number = Number.parseInt(value, 10);
  if (Number.isNaN(number)) return 6;
  return Math.min(30, Math.max(6, number));
}

function addDays(date, days) {
  const next = new Date(date);
  next.setDate(next.getDate() + days);
  return next;
}

function toDateValue(date) {
  const local = new Date(date.getTime() - date.getTimezoneOffset() * 60000);
  return local.toISOString().slice(0, 10);
}

function getDayName(value) {
  const date = new Date(value + "T12:00:00");
  return date.toLocaleDateString("en-US", { weekday: "long" });
}

function formatDate(value) {
  const date = new Date(value + "T12:00:00");
  return date.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric", year: "numeric" });
}

function readStorage(key, fallback) {
  try {
    return JSON.parse(localStorage.getItem(key)) || fallback;
  } catch {
    return fallback;
  }
}

function writeStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function updateCurrentNav(hash) {
  els.navAnchors.forEach((link) => {
    const active = link.getAttribute("href") === hash;
    if (active) link.setAttribute("aria-current", "page");
    else link.removeAttribute("aria-current");
  });
}

function escapeHtml(value) {
  return String(value || "").replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  })[char]);
}

function plateSvg(category, name) {
  const palette = {
    Protein: ["#f7d8c8", "#b5381f", "#f5a15f"],
    Vegetarian: ["#dff0d8", "#2f7d46", "#f2c94c"],
    Sides: ["#efe3c0", "#8a5a1f", "#7aa6a1"]
  }[category];
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" role="img">
      <rect width="640" height="480" fill="${palette[0]}"/>
      <circle cx="320" cy="250" r="148" fill="#fffdf7"/>
      <circle cx="320" cy="250" r="118" fill="${palette[2]}"/>
      <ellipse cx="275" cy="224" rx="74" ry="46" fill="${palette[1]}"/>
      <ellipse cx="366" cy="277" rx="82" ry="52" fill="#f8f2df"/>
      <circle cx="398" cy="201" r="34" fill="#155f3d"/>
      <circle cx="240" cy="302" r="30" fill="#b5381f"/>
      <path d="M150 380c94 28 244 32 340 0" fill="none" stroke="#675f4f" stroke-width="18" stroke-linecap="round" opacity=".28"/>
    </svg>
  `;
  return "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(svg);
}
