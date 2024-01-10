let cart = [];
if (!localStorage.cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
} else {
  cart = JSON.parse(localStorage.getItem("cart"));
}

let container = document.querySelector(".cart-container");

if (cart.length === 0) {
  container.innerHTML = "<h2>Your Cart is Empty : (</h2>";
} else {
  container.innerHTML = cart.map(
    (item) =>
      `<div class"list-item"> <h4>${item.name}</h4> <p>Price: ${item.price} </p> <p>Quantity:  ${item.quantity}</div>`
  );
  container.innerHTML =
    container.innerHTML +
    `Total Price: ${cart.reduce(
      (acc, curr) => acc + curr.price * curr.quantity,
      0
    )}` +
    "<button>Checkout</button>";
}
