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
    alert("Your cart is empty");
    return;
  }

  if(!name || !address){
    alert("Please enter your details");
    return;
  }

  let itemsText = "";

  let total = 0;

  cart.forEach(item=>{

    itemsText +=
    `${item.name} - ₦${item.price}\n`;

    total += item.price;

  });

  /* SAVE TO SUPABASE */

  await supabaseClient
  .from("orders")
  .insert([{

    customer_name:name,

    customer_address:address,

    items:itemsText,

    total:`₦${total}`

  }]);

  /* WHATSAPP */

  let message =
  `✨ BLUSHORIA ORDER ✨%0A%0A`;

  message +=
  `👩 Name: ${name}%0A`;

  message +=
  `📍 Address: ${address}%0A%0A`;

  message +=
  `🛍️ ITEMS:%0A`;

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

}