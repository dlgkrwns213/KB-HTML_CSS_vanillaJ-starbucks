import { drawCart } from './cart.js';
import { drawProduct } from './layout.js'
import { drawLogin } from './login.js';
import { drawCoffeeProduct } from './products.js';

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
  } else {
    console.log("알 수 없는 경로:", path);
  }

})