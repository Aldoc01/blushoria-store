/* SUPABASE */

const SUPABASE_URL =
"https://emcdsuboutrbpsofxdjn.supabase.co";

const SUPABASE_KEY =
"sb_publishable_duaRAaTPArjd3sqyV69b-Q_N7iOmx2c";

const supabaseClient =
supabase.createClient(
  SUPABASE_URL,
  SUPABASE_KEY
);

/* PRODUCTS */

const products = [

  {
    name:"Magic Lipgloss With Mirror",
    price:1500,
    image:"https://images.unsplash.com/photo-1586495777744-4413f21062fa?q=80&w=1200&auto=format&fit=crop",
    description:
    "Trendy magic lip gloss with built in mirror."
  },

  {
    name:"Mini Perfume",
    price:3000,
    image:"https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=1200&auto=format&fit=crop",
    description:
    "Luxury feminine long lasting fragrance."
  },

  {
    name:"Girlie Lip Balm",
    price:1800,
    image:"https://images.unsplash.com/photo-1631730486572-2260c1f1f3e8?q=80&w=1200&auto=format&fit=crop",
    description:
    "Cute glossy lip balm for soft lips."
  }

];

const productsContainer =
document.getElementById("products");

const cartTotal =
document.getElementById("cart-total");

let cart = [];

/* DISPLAY PRODUCTS */

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
      >

      <div class="product-info">

        <h2>
          ${product.name}
        </h2>

        <p>
          ${product.description}
        </p>

        <h3>
          ₦${product.price}
        </h3>

        <button onclick="addToCart(${index})">

          Add To Cart 💖

        </button>

      </div>

    `;

    productsContainer.appendChild(card);

  });

}

/* ADD TO CART */

function addToCart(index){

  cart.push(products[index]);

  updateCart();

  alert(
    products[index].name +
    " added to cart 💕"
  );

}

/* UPDATE TOTAL */

function updateCart(){

  let total = 0;

  cart.forEach(item=>{

    total += item.price;

  });

  cartTotal.innerText =
  `₦${total}`;

}

/* ORDER */

async function orderOnWhatsApp(){

  const name =
  document.getElementById(
    "customer-name"
  ).value;

  const address =
  document.getElementById(
    "customer-address"
  ).value;

  if(cart.length === 0){

    alert("Cart is empty");

    return;

  }

  let total = 0;

  let productsText = "";

  cart.forEach(item=>{

    total += item.price;

    productsText +=
    item.name + ", ";

  });

  /* SAVE TO DATABASE */

  const { error } =
  await supabaseClient

  .from("orders")

  .insert([{

    customer_name:name,

    address:address,

    product:productsText,

    total:`₦${total}`,

    status:"Pending"

  }]);

  if(error){

    console.log(error);

    alert(
      "Database connection failed"
    );

    return;

  }

  /* WHATSAPP */

  let message =
  `✨ BLUSHORIA ORDER ✨%0A%0A`;

  message +=
  `👩 Name: ${name}%0A`;

  message +=
  `📍 Address: ${address}%0A%0A`;

  cart.forEach(item=>{

    message +=
    `• ${item.name} - ₦${item.price}%0A`;

  });

  message +=
  `%0A💰 TOTAL: ₦${total}`;

  const phone =
  "2347012620748";

  window.open(

    `https://wa.me/${phone}?text=${message}`,

    "_blank"

  );

  alert(
    "Order submitted 💖"
  );

}

/* START */

displayProducts();