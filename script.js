import { validateForm } from "./js/form.js";
import { saveMessage } from "./js/storage.js";

// header and footer Load
async function loadComponent(id, file) {
  const container = document.getElementById(id);

  if (!container) return;

  const response = await fetch(file);

  const html = await response.text();

  container.innerHTML = html;
}

window.addEventListener("DOMContentLoaded", () => {
  loadComponent("header", "./components/header.html");

  loadComponent("footer", "./components/footer.html");
});
// ================================
// HOME PAGE DYNAMIC JAVASCRIPT
// ================================

// ================================
// SYSTEM FEATURES DATA
// ================================
const systemFeatures = [
  {
    icon: "fas fa-users",
    title: "کاروونکي",
    desc: "پیرودونکي، شرکتونه او مدیران",
  },

  {
    icon: "fas fa-bullseye",
    title: "هدف",
    desc: "د محصولاتو اسانه معرفي او لاسرسی",
  },

  {
    icon: "fas fa-globe",
    title: "سکوپ",
    desc: "ویب‌سایټ له هر ځایه د لاسرسي وړ دی",
  },
];

// ================================
// MAIN FEATURES DATA
// ================================
const features = [
  {
    icon: "fas fa-oil-can",
    title: "لوړ کیفیت",
    desc: "د نړیوالو معیارونو مطابق تولید",
  },

  {
    icon: "fas fa-cogs",
    title: "دوامداره کارکردګي",
    desc: "ماشینونه اوږده موده ساتي",
  },

  {
    icon: "fas fa-leaf",
    title: "چاپیریال ساتنه",
    desc: "محصولات د چاپیریال سره دوستانه دي",
  },

  {
    icon: "fas fa-truck",
    title: "پر وخت تحویلي",
    desc: "محصولات په ټاکلي وخت سره رسیږي",
  },
];

// ================================
// TESTIMONIALS DATA
// ================================
// const testimonials = [
//   {
//     name: "احمد خان",
//     role: "مدیر",

//     text: "موږ د خپلو صنعتي ماشینونو لپاره د اتلانتیک د روغنیاتو کار اخلو. کیفیت یې ثابت، اوږدمهاله او د باور وړ دی.",

//     img: "./assets/images/hafiz.jpg",
//   },

//   {
//     name: "علي رضا",
//     role: "انجنیر",

//     text: "د تحویلي سیستم یې ډېر منظم دی. موږ هر ځل په وخت سره خپل سفارشونه ترلاسه کوو.",

//     img: "./assets/images/hafiz.jpg",
//   },

//   {
//     name: "محمد عمر",
//     role: "بزنس",

//     text: "د محصول کیفیت یې لوړ دی او زموږ د ماشینونو لپاره ډېر مناسب دی.",

//     img: "./assets/images/احمد_1402 .jpg",
//   },
// ];

// ================================
// FAQ DATA
// ================================
const faqs = [
  {
    q: "آیا ستاسو محصولات لوړ کیفیت لري؟",

    a: "هو، زموږ ټول محصولات د نړیوالو معیارونو مطابق جوړ شوي دي.",
  },

  {
    q: "آیا تاسو صنعتي شرکتونو ته خدمات وړاندي کوئ؟",

    a: "هو، موږ د فابریکو لپاره ځانګړي حل لاري لرو.",
  },

  {
    q: "آیا محصولات چاپیریال ته زیان نه رسوي؟",

    a: "موږ د چاپیریال دوستانه تولید ته ژمن یو.",
  },
];

// ================================
// PRODUCTS DATA
// ================================
const products = [
  {
    category: "Max Power",
    name: "Max Power 7L",
    type: "Engine Oil",
    price: 1050,
    image: "./assets/images/white5.png",
  },

  {
    category: "Max Power",
    name: "Max Power 5L",
    type: "Engine Oil",
    price: 750,
    image: "./assets/images/white5.png",
  },

  {
    category: "X Series",
    name: "X 7L",
    type: "Engine Oil",
    price: 1050,
    image: "./assets/images/white5.png",
  },

  {
    category: "Brake Oil",
    name: "Brake Oil 250ML",
    type: "Brake Fluid",
    price: 100,
    image: "./assets/images/white5.png",
  },
];

// ================================
// RENDER SYSTEM FEATURES
// ================================
function renderSystemFeatures() {
  const container = document.getElementById("systemFeatures");

  if (!container) return;

  for (const feature of systemFeatures) {
    const card = document.createElement("div");
    card.className = "feature-card";

    const icon = document.createElement("i");
    icon.className = feature.icon;

    const title = document.createElement("h3");
    title.textContent = feature.title;

    const desc = document.createElement("p");
    desc.textContent = feature.desc;

    card.append(icon, title, desc);

    container.append(card);
  }
}

// ================================
// RENDER MAIN FEATURES
// ================================
function renderFeatures() {
  const container = document.getElementById("featuresContainer");

  if (!container) return;

  for (const feature of features) {
    const card = document.createElement("div");
    card.className = "feature-card";

    const icon = document.createElement("i");
    icon.className = feature.icon;

    const title = document.createElement("h3");
    title.textContent = feature.title;

    const desc = document.createElement("p");
    desc.textContent = feature.desc;

    card.append(icon, title, desc);

    container.append(card);
  }
}

// ================================
// RENDER TESTIMONIALS
// ================================
// function renderTestimonials() {
//   const container = document.getElementById("testimonialContainer");

//   if (!container) return;

//   for (const person of testimonials) {
//     const card = document.createElement("div");
//     card.className = "testimonial-card";

//     const image = document.createElement("img");
//     image.src = person.img;
//     image.className = "avatar";

//     const text = document.createElement("p");
//     text.textContent = person.text;

//     const name = document.createElement("h4");
//     name.textContent = person.name;

//     const role = document.createElement("span");
//     role.textContent = person.role;

//     card.append(image, text, name, role);

//     container.append(card);
//   }
// }
// ================================
// LOAD TESTIMONIALS FROM API
// ================================
async function loadTestimonials() {
  const container = document.getElementById("testimonialContainer");

  if (!container) return;

  try {
    const response = await fetch("./data/testimonials.json");

    if (!response.ok) {
      throw new Error("Failed to load testimonials");
    }

    const testimonials = await response.json();

    container.innerHTML = ""; // clear old content

    for (const person of testimonials) {
      const card = document.createElement("div");
      card.className = "testimonial-card";

      const image = document.createElement("img");
      image.src = person.img;
      image.className = "avatar";

      const text = document.createElement("p");
      text.textContent = person.text;

      const name = document.createElement("h4");
      name.textContent = person.name;

      const role = document.createElement("span");
      role.textContent = person.role;

      card.append(image, text, name, role);

      container.append(card);
    }
  } catch (error) {
    console.error("Testimonial API Error:", error);
  }
}
// ================================
// RENDER FAQ
// ================================
function renderFAQ() {
  const container = document.querySelector(".faq .container");

  if (!container) return;

  let counter = 0;

  for (const faq of faqs) {
    const faqItem = document.createElement("div");
    faqItem.className = "faq-item";

    const input = document.createElement("input");
    input.type = "checkbox";
    input.id = `faq${counter}`;

    const label = document.createElement("label");
    label.setAttribute("for", `faq${counter}`);
    label.textContent = faq.q;

    const answer = document.createElement("p");
    answer.textContent = faq.a;

    faqItem.append(input, label, answer);

    container.append(faqItem);

    counter++;
  }
}

// ================================
// PRODUCT CARD CREATOR
// ================================
function createProductCard(product, container) {
  const card = document.createElement("div");
  card.className = "card";

  const image = document.createElement("img");
  image.src = product.image;

  const title = document.createElement("h3");
  title.textContent = product.name;

  const type = document.createElement("p");
  type.textContent = product.type;

  const price = document.createElement("span");
  price.className = "price";
  price.textContent = `${product.price} افغانۍ`;

  card.append(image, title, type, price);

  container.append(card);
}

// ================================
// GET PRODUCT CONTAINER
// ================================
function getProductContainer() {
  return document.getElementById("productContainer");
}

// ================================
// RENDER ALL PRODUCTS
// ================================
function renderAllProducts() {
  const container = getProductContainer();

  if (!container) return;

  container.textContent = "";

  for (const product of products) {
    createProductCard(product, container);
  }
}

// ================================
// FILTER PRODUCTS
// ================================
function filterByCategory(category) {
  const container = getProductContainer();

  if (!container) return;

  container.textContent = "";

  let filteredProducts = [];

  if (category === "all") {
    filteredProducts = products;
  } else {
    filteredProducts = products.filter(
      (product) => product.category === category,
    );
  }

  for (const product of filteredProducts) {
    createProductCard(product, container);
  }
}

// ================================
// SEARCH PRODUCTS
// ================================
function searchProducts(value) {
  const container = getProductContainer();

  if (!container) return;

  container.textContent = "";

  const searchValue = value.toLowerCase();

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchValue),
  );

  for (const product of filteredProducts) {
    createProductCard(product, container);
  }
}

// ================================
// API SECTION
// ================================
async function loadAPIProducts() {
  const container = document.getElementById("apiProducts");

  if (!container) return;

  try {
    const response = await fetch("./data/products.json");

    const data = await response.json();

    for (const product of data) {
      const card = document.createElement("div");
      card.className = "feature-card";

      const img = document.createElement("img");
      img.src = product.image;

      const title = document.createElement("h3");
      title.textContent = product.name;

      const type = document.createElement("p");
      type.textContent = product.type;

      const price = document.createElement("p");
      price.textContent = product.price + " افغانۍ";

      card.append(img, title, type, price);

      container.append(card);
    }
  } catch (error) {
    console.log("Local API Error:", error);
  }
}
// ================================
// EXPOSE FUNCTIONS
// ================================
window.filterByCategory = filterByCategory;
window.searchProducts = searchProducts;

// ================================
// INITIALIZE WEBSITE
// ================================

// loadTestimonials();

////////////////

window.addEventListener("DOMContentLoaded", () => {
  renderSystemFeatures();
  renderFeatures();
  loadTestimonials();
  renderFAQ();
  renderAllProducts();
  loadAPIProducts();
});
