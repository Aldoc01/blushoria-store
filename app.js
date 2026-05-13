const products = [

  {
    name:"Magic Lipgloss With Mirror",
    price:1500,
    image:"product1.jpg",
    description:"Trendy magic lip gloss with built in mirror and beautiful color changing effect."
  },

  {
    name:"Mini Perfume",
    price:3000,
    image:"product2.jpg",
    description:"Soft feminine fragrance with luxurious long lasting scent."
  },

  {
    name:"Girlie Lip Balm",
    price:1800,
    image:"product3.jpg",
    description:"Cute glossy lip balm for soft hydrated pink lips."
  },

  {
    name:"Beauty Bundle",
    price:5000,
    image:"product4.jpg",
    description:"Complete beauty essentials package for every soft girl."
  },

  {
    name:"Luxury Perfume Oil",
    price:4500,
    image:"product5.jpg",
    description:"Premium perfume oil with sweet rich feminine aroma."
  },

  {
    name:"Blushoria Special Box",
    price:8000,
    image:"product6.jpg",
    description:"Luxury beauty package filled with premium goodies."
  }

];

const productsContainer =
document.getElementById("products");

const cartTotal =
document.getElementById("cart-total");

let cart = [];

function displayProducts(){

  products.forEach((product,index)=>{

    const card =
    document.createElement("div");

    card.className =
    "product-card";

    card.innerHTML = `

      <img src="${product.image}">

      <div class="product-info">

        <h2>${product.name}</h2>

        <p>${product.description}</p>

        <h3>₦${product.price.toLocaleString()}</h3>

        <button onclick="addToCart(${index})">

          Add To Cart 💖

        </button>

      </div>

    `;

    productsContainer.appendChild(card);

  });

}

function addToCart(index){

  cart.push(products[index]);

  updateCart();

  alert(products[index].name + " added to cart 💕");

}

function updateCart(){

  let total = 0;

  cart.forEach(item=>{
    total += item.price;
  });

  cartTotal.innerText =
  `₦${total.toLocaleString()}`;

}

function orderOnWhatsApp(){

  const name =
  document.getElementById(
    "customer-name"
  ).value;

  const address =
  document.getElementById(
    "customer-address"
  ).value;

  if(cart.length === 0){
    alert("Your cart is empty");
    return;
  }

  if(!name || !address){
    alert("Please enter your details");
    return;
  }

  let message =
  `✨ BLUSHORIA ORDER ✨%0A%0A`;

  message +=
  `👩 Name: ${name}%0A`;

  message +=
  `📍 Address: ${address}%0A%0A`;

  message +=
  `🛍️ ITEMS:%0A`;

  let total = 0;

  cart.forEach(item=>{

    message +=
    `• ${item.name} - ₦${item.price}%0A`;

    total += item.price;

  });

  message +=
  `%0A💰 TOTAL: ₦${total.toLocaleString()}`;

  const phone =
  "2347012620748";

  window.open(
    `https://wa.me/${phone}?text=${message}`,
    "_blank"
  );

}

displayProducts();