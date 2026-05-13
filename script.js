import { supabase } from './supabase.js'

let cart = []

function addToCart(product, price) {

  cart.push({
    product,
    price
  })

  updateCart()

  alert(product + ' added to cart ✨')
}

function updateCart() {

  const cartContainer =
    document.getElementById('cart-items')

  const totalContainer =
    document.getElementById('cart-total')

  cartContainer.innerHTML = ''

  let total = 0

  cart.forEach(item => {

    total += item.price

    cartContainer.innerHTML += `
      <p>
        ${item.product} — ₦${item.price}
      </p>
    `
  })

  totalContainer.innerText =
    '₦' + total
}

async function orderNow() {

  if (cart.length === 0) {

    alert('Cart is empty')

    return
  }

  const productNames =
    cart.map(item => item.product)
    .join(', ')

  const total =
    cart.reduce((sum, item) =>
      sum + item.price, 0)

  const order = {

    customer_name:
      'Website Customer',

    address:
      'Nigeria',

    product:
      productNames,

    total:
      '₦' + total,

    status:
      'Pending'
  }

  const { data, error } =
    await supabase
      .from('orders')
      .insert([order])

  if (error) {

    console.log(error)

    alert(
      'Database connection failed'
    )

    return
  }

  alert(
    'Order saved successfully ✨'
  )

  const whatsappMessage =
`Hello Blushoria ✨

I want to order:

${productNames}

Total: ₦${total}`

  window.open(
`https://wa.me/2347012620748?text=${encodeURIComponent(whatsappMessage)}`,
    '_blank'
  )
}

window.addToCart = addToCart
window.orderNow = orderNow