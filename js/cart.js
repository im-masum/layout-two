function loadCart() {
  const cart = JSON.parse(localStorage.getItem("shop3d_cart")) || [];
  const cartItemsDiv = document.getElementById("cartItems");
  const cartTotalSpan = document.getElementById("cartTotal");
  cartItemsDiv.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    total += item.price;
    cartItemsDiv.innerHTML += `
        <div class="cart-item">
          <h4>${item.title}</h4>
          <p>$${item.price}</p>
          <button onclick="removeItem(${index})">Remove</button>
        </div>
      `;
  });

  cartTotalSpan.textContent = total.toFixed(2);
}

function removeItem(index) {
  const cart = JSON.parse(localStorage.getItem("shop3d_cart")) || [];
  cart.splice(index, 1);
  localStorage.setItem("shop3d_cart", JSON.stringify(cart));
  loadCart();
}

window.onload = loadCart;
// Add to Cart functionality
function addToCart(title, price) {
  const cart = JSON.parse(localStorage.getItem("shop3d_cart")) || [];
  const item = { title, price };
  cart.push(item);
  localStorage.setItem("shop3d_cart", JSON.stringify(cart));
  alert(`${title} has been added to your cart!`);
}