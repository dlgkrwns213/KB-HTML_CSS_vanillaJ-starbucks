import { drawCart } from './cart.js';
import { drawProduct } from './layout.js'
import { drawLogin } from './login.js';
import { drawOrderList } from './order_list.js';
import { drawCoffeeProduct } from './products.js';
import { drawSignupForm } from './signup.js';

window.addEventListener('load', function() {
  const path = window.location.pathname;

  console.log(path);

  if (path.endsWith('/layout.html')) {
    drawProduct();
  } else if (path.endsWith('/login.html')) {
    drawLogin();
  } else if (path.endsWith('/cart.html')) {
    drawCart();
  } else if (path.endsWith('/products.html')) {
    drawCoffeeProduct();
  } else if (path.endsWith('/signup.html')) {
    drawSignupForm();
  } else if (path.endsWith('/order_list.html')) {
    drawOrderList();
  } else {
    console.log("알 수 없는 경로:", path);
  }

})