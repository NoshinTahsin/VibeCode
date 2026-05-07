const DAY_MENUS = {
  0: [
    ["protein", "Lemon Herb Chicken Trays", 16, "Roasted chicken thighs with lemon pan sauce.", "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=900&q=80"],
    ["protein", "Smoked Paprika Beef Tips", 19, "Tender beef tips in a peppery tomato gravy.", "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=900&q=80"],
    ["protein", "Garlic Butter Salmon", 22, "Oven salmon with dill, garlic butter, and citrus.", "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=900&q=80"],
    ["protein", "Turkey Meatball Marinara", 15, "Baked turkey meatballs with slow simmered sauce.", "https://images.unsplash.com/photo-1529042410759-befb1204b468?auto=format&fit=crop&w=900&q=80"],
    ["protein", "Coconut Curry Shrimp", 20, "Shrimp in coconut curry with ginger and lime.", "https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=900&q=80"],
    ["vegetarian", "Spinach Ricotta Shells", 13, "Stuffed pasta shells with basil tomato sauce.", "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=900&q=80"],
    ["vegetarian", "Roasted Vegetable Lasagna", 14, "Layered vegetables, pasta, herbs, and cheese.", "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?auto=format&fit=crop&w=900&q=80"],
    ["vegetarian", "Mushroom Lentil Loaf", 12, "Savory lentils, mushrooms, oats, and glaze.", "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=80"],
    ["sides", "Rosemary Potatoes", 6, "Crisp roasted potatoes with rosemary salt.", "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=900&q=80"],
    ["sides", "Citrus Garden Salad", 5, "Greens, orange, cucumber, seeds, and vinaigrette.", "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=900&q=80"]
  ],
  1: [
    ["protein", "Honey Soy Chicken", 16, "Sticky glazed chicken with scallions and sesame.", "https://images.unsplash.com/photo-1604909052743-94e838986d24?auto=format&fit=crop&w=900&q=80"],
    ["protein", "Beef Barbacoa", 18, "Slow braised beef with warm chile spices.", "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=900&q=80"],
    ["protein", "Herbed Pork Tenderloin", 17, "Sliced pork with mustard herb jus.", "https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=900&q=80"],
    ["protein", "Cajun Catfish", 18, "Blackened catfish with lemon relish.", "https://images.unsplash.com/photo-1601314002592-b8734bca6604?auto=format&fit=crop&w=900&q=80"],
    ["protein", "Chicken Shawarma", 16, "Spiced chicken with garlic yogurt sauce.", "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&w=900&q=80"],
    ["vegetarian", "Chickpea Tagine", 12, "Chickpeas, apricots, tomatoes, and warm spices.", "https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?auto=format&fit=crop&w=900&q=80"],
    ["vegetarian", "Eggplant Parmesan", 14, "Crisp eggplant, mozzarella, and marinara.", "https://images.unsplash.com/photo-1625944228741-cf30983baf93?auto=format&fit=crop&w=900&q=80"],
    ["vegetarian", "Pesto Tortellini Bake", 13, "Cheese tortellini baked with basil pesto.", "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=900&q=80"],
    ["sides", "Cilantro Lime Rice", 5, "Steamed rice with lime zest and cilantro.", "https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?auto=format&fit=crop&w=900&q=80"],
    ["sides", "Charred Corn Salad", 6, "Corn, peppers, herbs, and creamy lime dressing.", "https://images.unsplash.com/photo-1551754655-cd27e38d2076?auto=format&fit=crop&w=900&q=80"]
  ],
  2: [
    ["protein", "Maple Dijon Chicken", 16, "Chicken roasted with maple mustard glaze.", "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?auto=format&fit=crop&w=900&q=80"],
    ["protein", "Classic Beef Pot Roast", 18, "Braised beef with carrots and onion gravy.", "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=80"],
    ["protein", "Pork Carnitas", 17, "Citrus pulled pork with crisp edges.", "https://images.unsplash.com/photo-1615870216519-2f9fa575fa5c?auto=format&fit=crop&w=900&q=80"],
    ["protein", "Sesame Ginger Tofu", 14, "Crisp tofu tossed in ginger sesame sauce.", "https://images.unsplash.com/photo-1512003867696-6d5ce6835040?auto=format&fit=crop&w=900&q=80"],
    ["protein", "Shrimp Scampi", 20, "Garlic shrimp with parsley lemon butter.", "https://images.unsplash.com/photo-1625943553852-781c6dd46faa?auto=format&fit=crop&w=900&q=80"],
    ["vegetarian", "Butternut Squash Mac", 13, "Creamy squash sauce, cheddar, and breadcrumbs.", "https://images.unsplash.com/photo-1543339494-b4cd4f7ba686?auto=format&fit=crop&w=900&q=80"],
    ["vegetarian", "Black Bean Enchiladas", 12, "Rolled tortillas with beans and red sauce.", "https://images.unsplash.com/photo-1534352956036-cd81e27dd615?auto=format&fit=crop&w=900&q=80"],
    ["vegetarian", "Caprese Grain Bowl", 12, "Farro, tomatoes, basil, mozzarella, balsamic.", "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=900&q=80"],
    ["sides", "Green Beans Almondine", 6, "Green beans with toasted almonds and lemon.", "https://images.unsplash.com/photo-1567375698348-5d9d5ae99de0?auto=format&fit=crop&w=900&q=80"],
    ["sides", "Pull-Apart Dinner Rolls", 4, "Soft rolls brushed with honey butter.", "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=80"]
  ],
  3: [
    ["protein", "Jerk Chicken", 17, "Allspice chile chicken with pineapple relish.", "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=900&q=80"],
    ["protein", "Korean Beef Bulgogi", 19, "Marinated sliced beef with pear and garlic.", "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?auto=format&fit=crop&w=900&q=80"],
    ["protein", "Baked Cod Piccata", 18, "Cod with lemon caper butter sauce.", "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=900&q=80"],
    ["protein", "Sausage Pepper Bake", 15, "Italian sausage with sweet peppers and onions.", "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=900&q=80"],
    ["protein", "Chicken Tikka Masala", 17, "Charred chicken in creamy tomato masala.", "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=900&q=80"],
    ["vegetarian", "Paneer Butter Masala", 14, "Paneer in silky tomato cashew sauce.", "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=900&q=80"],
    ["vegetarian", "Vegetable Paella", 13, "Saffron rice with peppers, peas, and artichoke.", "https://images.unsplash.com/photo-1534080564583-6be75777b70a?auto=format&fit=crop&w=900&q=80"],
    ["vegetarian", "Greek Stuffed Peppers", 12, "Peppers filled with rice, herbs, and feta.", "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?auto=format&fit=crop&w=900&q=80"],
    ["sides", "Cucumber Yogurt Salad", 5, "Cucumber, herbs, yogurt, and lemon.", "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?auto=format&fit=crop&w=900&q=80"],
    ["sides", "Garlic Naan", 4, "Soft flatbread with garlic herb butter.", "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=80"]
  ],
  4: [
    ["protein", "BBQ Pulled Chicken", 15, "Shredded chicken in smoky house barbecue sauce.", "https://images.unsplash.com/photo-1628294896516-344152572ee8?auto=format&fit=crop&w=900&q=80"],
    ["protein", "Peppercorn Steak Bites", 21, "Seared steak bites with peppercorn cream.", "https://images.unsplash.com/photo-1558030089-02acba3c214e?auto=format&fit=crop&w=900&q=80"],
    ["protein", "Miso Glazed Salmon", 22, "Salmon with sweet miso and scallions.", "https://images.unsplash.com/photo-1580476262798-bddd9f4b7369?auto=format&fit=crop&w=900&q=80"],
    ["protein", "Chicken Parmesan", 17, "Breaded chicken with marinara and mozzarella.", "https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?auto=format&fit=crop&w=900&q=80"],
    ["protein", "Turkey Chili", 13, "Ground turkey chili with beans and spices.", "https://images.unsplash.com/photo-1604908177522-040785f4778c?auto=format&fit=crop&w=900&q=80"],
    ["vegetarian", "White Bean Cassoulet", 12, "Beans, tomatoes, herbs, and crunchy crumbs.", "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=900&q=80"],
    ["vegetarian", "Sweet Potato Curry", 12, "Sweet potatoes and greens in coconut curry.", "https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?auto=format&fit=crop&w=900&q=80"],
    ["vegetarian", "Broccoli Cheddar Quiche", 11, "Custardy quiche with broccoli and cheddar.", "https://images.unsplash.com/photo-1516714435131-44d6b64dc6a2?auto=format&fit=crop&w=900&q=80"],
    ["sides", "Creamy Coleslaw", 5, "Cabbage, carrot, herbs, and tangy dressing.", "https://images.unsplash.com/photo-1608032077018-c9aad9565d29?auto=format&fit=crop&w=900&q=80"],
    ["sides", "Baked Mac & Cheese", 7, "Elbow pasta in cheddar sauce with crumbs.", "https://images.unsplash.com/photo-1543339494-b4cd4f7ba686?auto=format&fit=crop&w=900&q=80"]
  ],
  5: [
    ["protein", "Cranberry Orange Chicken", 16, "Chicken with cranberry citrus pan glaze.", "https://images.unsplash.com/photo-1546069901-d5bfd2cbfb1f?auto=format&fit=crop&w=900&q=80"],
    ["protein", "Braised Short Rib Ragu", 22, "Short rib sauce over fresh pappardelle.", "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=900&q=80"],
    ["protein", "Crispy Pork Schnitzel", 18, "Panko pork cutlets with lemon and herbs.", "https://images.unsplash.com/photo-1604909052865-93d776a6395b?auto=format&fit=crop&w=900&q=80"],
    ["protein", "Mediterranean Turkey Kofta", 16, "Spiced turkey skewers with tahini sauce.", "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=80"],
    ["protein", "Old Bay Shrimp Boil", 20, "Shrimp, potatoes, corn, and lemon butter.", "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&w=900&q=80"],
    ["vegetarian", "Wild Mushroom Risotto", 14, "Arborio rice with mushrooms and parmesan.", "https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&w=900&q=80"],
    ["vegetarian", "Vegetable Pot Pie", 13, "Root vegetables in gravy under flaky pastry.", "https://images.unsplash.com/photo-1505577058444-a3dab90d4253?auto=format&fit=crop&w=900&q=80"],
    ["vegetarian", "Falafel Platter", 12, "Falafel, hummus, pickles, and tahini.", "https://images.unsplash.com/photo-1593001874117-c99c800e3eb2?auto=format&fit=crop&w=900&q=80"],
    ["sides", "Maple Carrots", 5, "Roasted carrots with maple and thyme.", "https://images.unsplash.com/photo-1447175008436-054170c2e979?auto=format&fit=crop&w=900&q=80"],
    ["sides", "Herbed Couscous", 5, "Pearl couscous with herbs and lemon.", "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=900&q=80"]
  ],
  6: [
    ["protein", "Sunday Roast Chicken", 17, "Whole-style roast chicken pieces with gravy.", "https://images.unsplash.com/photo-1518492104633-130d0cc84637?auto=format&fit=crop&w=900&q=80"],
    ["protein", "Beef Brisket", 21, "Slow cooked brisket with onion pan sauce.", "https://images.unsplash.com/photo-1558030089-02acba3c214e?auto=format&fit=crop&w=900&q=80"],
    ["protein", "Brown Sugar Ham", 18, "Sliced ham with brown sugar mustard glaze.", "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=900&q=80"],
    ["protein", "Herb Crusted Trout", 19, "Trout with herbs, breadcrumbs, and lemon.", "https://images.unsplash.com/photo-1598514982901-ae62764ae75e?auto=format&fit=crop&w=900&q=80"],
    ["protein", "Chicken Pot Pie Filling", 15, "Chicken, vegetables, and creamy herb gravy.", "https://images.unsplash.com/photo-1505577058444-a3dab90d4253?auto=format&fit=crop&w=900&q=80"],
    ["vegetarian", "Garden Vegetable Moussaka", 14, "Eggplant, potatoes, lentils, and bechamel.", "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=900&q=80"],
    ["vegetarian", "Tomato Basil Gnocchi", 13, "Potato gnocchi with tomato basil sauce.", "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?auto=format&fit=crop&w=900&q=80"],
    ["vegetarian", "Harvest Stuffed Squash", 12, "Squash filled with grains, cranberries, and nuts.", "https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?auto=format&fit=crop&w=900&q=80"],
    ["sides", "Whipped Potatoes", 6, "Buttery potatoes with chives.", "https://images.unsplash.com/photo-1633436374961-09b92742047b?auto=format&fit=crop&w=900&q=80"],
    ["sides", "Braised Greens", 5, "Tender greens with garlic and cider vinegar.", "https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&w=900&q=80"]
  ]
};

const CATEGORY_LABELS = {
  protein: "Protein",
  vegetarian: "Vegetarian",
  sides: "Sides"
};

const state = {
  selectedDate: "",
  cart: []
};

const hasDOM = typeof document !== "undefined";

const els = hasDOM ? {
  dateInput: document.querySelector("#cateringDate"),
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
  contactStatus: document.querySelector("#contactStatus")
} : {};

function addDays(date, days) {
  const next = new Date(date);
  next.setDate(next.getDate() + days);
  return next;
}

function toDateValue(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function money(value) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(value);
}

function prettyDate(value) {
  return new Date(`${value}T12:00:00`).toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric"
  });
}

function clampPortions(value) {
  const number = Number.parseInt(value, 10);
  if (Number.isNaN(number)) return 6;
  return Math.min(30, Math.max(6, number));
}

function createMenuItem(dayIndex, item, index) {
  const [category, name, price, description, image] = item;
  const id = `${dayIndex}-${index}-${name.toLowerCase().replaceAll(" ", "-").replaceAll("&", "and")}`;
  const ingredients = buildIngredients(category, name);
  const nutrition = buildNutrition(category, price);

  return {
    id,
    category,
    name,
    price,
    description,
    image,
    quantity: `${clampPortions(els.defaultPortions.value)} portions`,
    ingredients,
    nutrition
  };
}

function buildIngredients(category, name) {
  const common = {
    protein: ["olive oil", "garlic", "fresh herbs", "sea salt"],
    vegetarian: ["seasonal vegetables", "olive oil", "garlic", "fresh herbs"],
    sides: ["market produce", "herbs", "citrus", "sea salt"]
  };
  return [name.split(" ")[0].toLowerCase(), ...common[category]];
}

function buildNutrition(category, price) {
  const base = category === "protein" ? 280 : category === "vegetarian" ? 230 : 160;
  return {
    calories: base + price * 4,
    protein: category === "sides" ? "4g" : category === "vegetarian" ? "11g" : "24g",
    carbs: category === "protein" ? "8g" : "28g",
    fat: category === "sides" ? "6g" : "12g",
    sodium: `${430 + price * 8}mg`
  };
}

function getMenuForSelectedDate() {
  const dayIndex = new Date(`${state.selectedDate}T12:00:00`).getDay();
  return DAY_MENUS[dayIndex].map((item, index) => createMenuItem(dayIndex, item, index));
}

function initializeDates() {
  const today = new Date();
  const min = addDays(today, 2);
  const max = addDays(today, 14);
  els.dateInput.min = toDateValue(min);
  els.dateInput.max = toDateValue(max);
  els.dateInput.value = toDateValue(min);
  state.selectedDate = els.dateInput.value;
  els.dateHelp.textContent = `Available pickup dates run from ${prettyDate(els.dateInput.min)} through ${prettyDate(els.dateInput.max)}.`;
}

function renderMenu() {
  const menu = getMenuForSelectedDate();
  const dateLabel = prettyDate(state.selectedDate);
  els.selectedDay.textContent = dateLabel;
  els.menuTitle.textContent = `${dateLabel} Menu`;
  els.menuSummary.textContent = "10 items available: 5 proteins, 3 vegetarian dishes, and 2 sides.";
  els.menuGroups.innerHTML = "";

  Object.keys(CATEGORY_LABELS).forEach((category) => {
    const items = menu.filter((item) => item.category === category);
    const section = document.createElement("section");
    section.className = "menu-group";
    section.innerHTML = `
      <div class="category-header">
        <h3>${CATEGORY_LABELS[category]}</h3>
        <span>${items.length} items</span>
      </div>
      <div class="item-grid"></div>
    `;

    const grid = section.querySelector(".item-grid");
    items.forEach((item) => {
      const card = document.createElement("article");
      card.className = "menu-item";
      card.innerHTML = `
        <img src="${item.image}" alt="${item.name}">
        <div class="item-body">
          <div class="item-title-row">
            <h4>${item.name}</h4>
            <span class="price">${money(item.price)}</span>
          </div>
          <p class="item-meta">${item.quantity} · ${item.description}</p>
          <div class="item-actions">
            <button class="detail-button" type="button" data-details="${item.id}">Details</button>
            <button class="add-button" type="button" data-add="${item.id}">Add</button>
          </div>
        </div>
      `;
      grid.append(card);
    });

    els.menuGroups.append(section);
  });
}

function renderCart() {
  els.cartCount.textContent = state.cart.reduce((sum, line) => sum + line.portions, 0);
  els.cartDate.textContent = state.cart.length ? `Pickup on ${prettyDate(state.selectedDate)}` : "Your cart is empty.";
  els.cartItems.innerHTML = "";

  state.cart.forEach((line) => {
    const row = document.createElement("article");
    row.className = "cart-line";
    row.innerHTML = `
      <div class="cart-line-top">
        <h3>${line.name}</h3>
        <span class="price">${money(line.price * line.portions)}</span>
      </div>
      <div class="cart-controls">
        <label>Portions
          <input type="number" min="6" max="30" value="${line.portions}" data-qty="${line.id}">
        </label>
        <button class="remove-button" type="button" data-remove="${line.id}">Remove</button>
      </div>
    `;
    els.cartItems.append(row);
  });

  const total = state.cart.reduce((sum, line) => sum + line.price * line.portions, 0);
  els.cartTotal.textContent = money(total);
  els.checkoutButton.disabled = state.cart.length === 0;
}

function addToCart(id) {
  const item = getMenuForSelectedDate().find((menuItem) => menuItem.id === id);
  const existing = state.cart.find((line) => line.id === id);
  const portions = clampPortions(els.defaultPortions.value);

  if (existing) {
    existing.portions = clampPortions(existing.portions + portions);
  } else {
    state.cart.push({ ...item, portions });
  }

  renderCart();
  els.cartPanel.classList.add("is-open");
}

function showDetails(id) {
  const item = getMenuForSelectedDate().find((menuItem) => menuItem.id === id);
  els.itemDetails.innerHTML = `
    <div class="detail-hero">
      <img src="${item.image}" alt="${item.name}">
      <div class="detail-copy">
        <p class="eyebrow">${CATEGORY_LABELS[item.category]}</p>
        <h2>${item.name}</h2>
        <p>${item.description} Prepared for pickup in labeled trays with reheating notes available on request.</p>
        <div>
          <h3>Ingredients</h3>
          <ul class="tag-list">${item.ingredients.map((ingredient) => `<li>${ingredient}</li>`).join("")}</ul>
        </div>
        <div>
          <h3>Nutrition Facts</h3>
          <table class="nutrition-table">
            <tbody>
              <tr><th>Calories</th><td>${item.nutrition.calories}</td></tr>
              <tr><th>Protein</th><td>${item.nutrition.protein}</td></tr>
              <tr><th>Carbs</th><td>${item.nutrition.carbs}</td></tr>
              <tr><th>Fat</th><td>${item.nutrition.fat}</td></tr>
              <tr><th>Sodium</th><td>${item.nutrition.sodium}</td></tr>
            </tbody>
          </table>
        </div>
        <button class="add-button" type="button" data-add="${item.id}">Add to cart</button>
      </div>
    </div>
  `;
  els.itemDialog.showModal();
}

function placeOrder(formData) {
  const invoice = {
    id: `GL-${Date.now().toString().slice(-7)}`,
    createdAt: new Date().toISOString(),
    pickupDate: state.selectedDate,
    customer: {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone")
    },
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

function renderInvoice(invoice) {
  els.invoiceSection.hidden = false;
  els.invoiceOutput.innerHTML = `
    <h3>Invoice ${invoice.id}</h3>
    <p><strong>Pickup:</strong> ${prettyDate(invoice.pickupDate)} at ${invoice.pickupTime}</p>
    <p><strong>Guest count:</strong> ${invoice.guestCount} people</p>
    <p><strong>Customer:</strong> ${invoice.customer.name} · ${invoice.customer.email} · ${invoice.customer.phone}</p>
    <table>
      <thead><tr><th>Item</th><th>Portions</th><th>Unit</th><th>Line total</th></tr></thead>
      <tbody>
        ${invoice.items.map((item) => `
          <tr>
            <td>${item.name}</td>
            <td>${item.portions}</td>
            <td>${money(item.price)}</td>
            <td>${money(item.price * item.portions)}</td>
          </tr>
        `).join("")}
      </tbody>
    </table>
    <p><strong>Total:</strong> ${money(invoice.total)}</p>
    <p><strong>Payment:</strong> ${invoice.paymentMethod}${invoice.paymentNote ? `, ${invoice.paymentNote}` : ""}</p>
    <p><strong>Special instructions:</strong> ${invoice.instructions || "None"}</p>
    <p>This invoice has been saved locally in this browser for the business owner to review later.</p>
  `;
  els.invoiceSection.scrollIntoView({ behavior: "smooth" });
}

function bindEvents() {
  els.dateInput.addEventListener("change", () => {
    state.selectedDate = els.dateInput.value;
    state.cart = [];
    renderMenu();
    renderCart();
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

  els.cartButton.addEventListener("click", () => els.cartPanel.classList.toggle("is-open"));
  els.closeCart.addEventListener("click", () => els.cartPanel.classList.remove("is-open"));

  els.checkoutButton.addEventListener("click", () => {
    if (!state.cart.length) return;
    els.checkoutSection.hidden = false;
    els.checkoutSection.scrollIntoView({ behavior: "smooth" });
  });

  els.checkoutForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!state.cart.length) return;
    placeOrder(new FormData(els.checkoutForm));
  });

  els.dialogClose.addEventListener("click", () => els.itemDialog.close());

  els.contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    els.contactForm.reset();
    els.contactStatus.textContent = "Thanks. Your message has been saved as a demo inquiry.";
  });
}

function init() {
  initializeDates();
  renderMenu();
  renderCart();
  bindEvents();
}

if (hasDOM) {
  init();
}

if (typeof module !== "undefined") {
  module.exports = { DAY_MENUS, addDays, clampPortions };
}
