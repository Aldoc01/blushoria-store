const products = [

  {
    name:"Magic Lipgloss",
    price:1500,
    image:"product1.jpg",
    description:
    "Luxury glossy lip shine."
  },

  {
    name:"Mini Perfume",
    price:3000,
    image:"product2.jpg",
    description:
    "Long lasting feminine fragrance."
  },

  {
    name:"Lip Balm",
    price:1800,
    image:"product3.jpg",
    description:
    "Soft glossy pink lips."
  }

];

const productsContainer =
document.getElementById("products");

const cartTotal =
document.getElementById("cart-total");

let cart = [];

function displayProducts(){

  productsContainer.innerHTML = "";

  products.forEach((product,index)=>{

    const card =
    document.createElement("div");

    card.className =
    "product-card";

    card.innerHTML = `

      <img
        src="${product.image}"
        alt="${product.name}"
      >

      <div class="product-info">

        <h2>${product.name}</h2>

        <p>${product.description}</p>

        <h3>
          ₦${product.price.toLocaleString()}
        </h3>

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

  alert(
    products[index].name +
    " added to cart 💕"
  );

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

  let message =
  `✨ BLUSHORIA ORDER ✨%0A%0A`;

  message +=
  `👩 Name: ${name}%0A`;

  message +=
  `📍 Address: ${address}%0A%0A`;

  let total = 0;

  cart.forEach(item=>{

    message +=
    `• ${item.name} - ₦${item.price}%0A`;

    total += item.price;

  });

  message +=
  `%0ATotal: ₦${total}`;

  const phone =
  "2347012620748";

  window.open(
    `https://wa.me/${phone}?text=${message}`,
    "_blank"
  );

}

displayProducts();