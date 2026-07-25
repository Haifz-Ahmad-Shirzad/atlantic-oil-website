//  home page dynamic

let body = document.body;
// create homepage sections
let header = document.createElement("header");
let main = document.createElement("main");
let hero = document.createElement("section");
let feature = document.createElement("section");
let Demo = document.createElement("section");
let testimounial = document.createElement("section");
let FAQ = document.createElement("section");
let footer = document.createElement("footer");

// console.log(header);
// console.log(main);
// console.log(footer);

// header content

body.append(header);
let logo = document.createElement("div");
let image = document.createElement("img");
image.src = "./images/products-all.webp";
header.append(logo);
logo.textContent = image;
logo.append(image);
header.textContent = logo;

console.log(logo);
console.log(image);
console.log(header);
