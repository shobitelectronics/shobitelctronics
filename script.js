// const availableKeywords = [
//   { keyword: 'Hp G-Force', link: 'sproduct2.html' },
//   { keyword: 'shoe', link: 'shoe.html' },
//   { keyword: 'bag', link: 'bag.html' },
//   { keyword: 'begger', link: 'begger.html' }
// ];

// const resultsBox = document.querySelector(".result-box");
// const inputBox = document.getElementById("input-box");

// inputBox.onkeyup = function() {
//   let result = [];
//   let input = inputBox.value;

//   if (input.length) {
//     result = availableKeywords.filter(keyword => {
//       return keyword.keyword.toLowerCase().includes(input.toLowerCase());
//     });
//   }

//   display(result);

//   if (!result.length) {
//     resultsBox.innerHTML = '';
//   }
// };

// function display(result) {
//   const content = result.map(list => {
//     return "<li onclick=selectInput(this)>" + list.keyword + "</li>";
//   });

//   resultsBox.innerHTML = "<ul>" + content.join('') + "</ul>";
// }

// function selectInput(list) {
//   const selectedKeyword = list.innerHTML;
//   const keyword = availableKeywords.find(item => item.keyword === selectedKeyword);

//   if (keyword) {
//     inputBox.value = keyword.keyword;
//     window.location.href = keyword.link;
//   }

//   resultsBox.innerHTML = '';
// }


// // Function to fetch cart items from localStorage
// function getCartItems() {
//   return JSON.parse(localStorage.getItem('cart')) || [];
// }

// // Function to generate HTML for a single product listing
// function generateProductListingHTML(product) {
//   return `
//     <div class="product">
//       <h3>${product.name}</h3>
//       <p>Price: ${product.price}</p>
//       <button class="addToCartBtn" data-product-id="${product.id}">Add to Cart</button>
//     </div>
//   `;
// }

// // Function to generate HTML for all product listings
// function generateProductListingsHTML(products) {
//   return products.map(product => generateProductListingHTML(product)).join('');
// }

// // Function to generate HTML for a single cart item
// function generateCartItemHTML(item) {
//   return `
//     <tr>
//       <td>${item.productName}</td>
//       <td>${item.price}</td>
//       <td>${item.quantity}</td>
//     </tr>
//   `;
// }

// // Function to generate HTML for all cart items
// function generateCartItemsHTML(cartItems) {
//   return cartItems.map(item => generateCartItemHTML(item)).join('');
// }

// // Function to send order email to the website owner
// function sendOrderEmail(orderData) {
//   // Replace with your actual implementation to send the email
//   console.log('Sending order email:', orderData);
// }

// // Function to handle adding a product to the cart
// function addToCart(productId) {
//   const products = getProductsFromServer(); // Fetch products from the server
//   const product = products.find(product => product.id === productId);
  
//   if (product) {
//     const cartItems = getCartItems();
//     const existingCartItem = cartItems.find(item => item.productId === productId);
  
//     if (existingCartItem) {
//       existingCartItem.quantity++;
//     } else {
//       cartItems.push({
//         productId: product.id,
//         productName: product.name,
//         price: product.price,
//         quantity: 1
//       });
//     }
  
//     localStorage.setItem('cart', JSON.stringify(cartItems));
//     alert('Product added to cart successfully!');
//   } else {
//     alert('Product not found!');
//   }
// }

// // Function to handle placing the order
// function placeOrder() {
//   const cartItems = getCartItems();

//   // Check if the cart is empty
//   if (cartItems.length === 0) {
//     alert('Your cart is empty. Please add some items before placing an order.');
//     return;
//   }

//   // Get customer details
//   const name = prompt('Enter your name:');
//   const email = prompt('Enter your email:');
//   const address = prompt('Enter your address:');

//   // Prepare order data
//   const orderData = {
//     customer: {
//       name,
//       email,
//       address
//     },
//     cartItems
//   };

//   // Send order email to the website owner
//   sendOrderEmail(orderData);

//   // Clear the cart and show success message
//   localStorage.removeItem('cart');
//   alert('Order placed successfully! We will contact you shortly.');
//   location.reload(); // Refresh the page
// }

// // DOMContentLoaded event listener for index.html
// document.addEventListener('DOMContentLoaded', function() {
//   // Your code for index.html goes here
// });

// // DOMContentLoaded event listener for shop.html
// document.addEventListener('DOMContentLoaded', function() {
//   const products = getProductsFromServer(); // Fetch products from the server
//   const productsHTML = generateProductListingsHTML(products);
//   const productsContainer = document.getElementById('products');
//   productsContainer.innerHTML = productsHTML;

//   // Add event listeners to "Add to Cart" buttons
//   const addToCartBtns = document.getElementsByClassName('addToCartBtn');
//   Array.from(addToCartBtns).forEach(btn => {
//     const productId = btn.getAttribute('data-product-id');
//     btn.addEventListener('click', function() {
//       addToCart(productId);
//     });
//   });
// });

// // DOMContentLoaded event listener for cart.html
// document.addEventListener('DOMContentLoaded', function() {
//   const placeOrderBtn = document.getElementById('placeOrderBtn');
  
//   // Generate cart items HTML
//   const cartItems = getCartItems();
//   const cartItemsHTML = generateCartItemsHTML(cartItems);
//   const tbody = document.querySelector('#cart tbody');
//   tbody.innerHTML = cartItemsHTML;

//   // Add event listener to place order button
//   placeOrderBtn.addEventListener('click', placeOrder);
// });

const storage = [
  {
    itemName: "HP",
    model: "hp pavilion 360 Quard Core",
    price: 1000,
    quantity: 10,
    id: "adlsfjaldkfjlkajdflkjsfljlj34893"
  },
  {
    itemName: "dell",
    price: 10000,
    model: "dell xps 15 intel Core i9",
    quantity: 10,
    id: "lasdflkjlkjasdlfjsldjflaf"
  },
  {
    itemName: "lenovo",
    price: 100000,
    model: "lenovo flex 5 amd radeon 9",
    quantity: 100,
    id: "somerandomid"
  },
]

const container = document.querySelector(".pro-container")

const cartCount = document.querySelector(".cart-icon span")

let count = 0;

function addItemToCart(item) {
  count++
  cartCount.textContent = count

  console.log(item)
}


storage.map(item => {
  let product = `<div class="product"><img src="/assets/Hp.jpg" alt="">
                <div class="description" onclick="window.location.href='sproduct.html';">
                <span>${item.itemName}</span>
                <h5>${item.model}</h5>
                <div class="star"><i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                </div>
                <h4>${item.price}</h4>
                </div>
                <button class="add-to-cart" onclick=${addItemToCart(item)}>Add to Cart</button>
                <a href="#" class="cart"><i class="fa-sharp fa-solid fa-cart-shopping"></i></a>
  </div>
`

container.innerHTML += product
})
