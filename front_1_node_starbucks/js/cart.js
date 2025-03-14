async function getTotalCoffeeData() {
  try {
    const response = await fetch('http://localhost:3000/product');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}


async function getCartdata() {
  try {
    const response = await fetch('http://localhost:3000/carts');
    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error);
  }
}


export async function drawCart() {
  const mainSection = document.querySelector('.main_products');

  if (!mainSection) return;

  mainSection.innerHTML = '';  // 초기화

  const totalCoffee = await getTotalCoffeeData();
  const cartItems = await getCartdata();

  const cartContainer = document.createElement('div');
  cartContainer.classList.add('cart_container');

  console.log(totalCoffee)
  for (let cart_coffee_id in cartItems) {
    let carts_coffee_count = cartItems[cart_coffee_id];
    let item = totalCoffee.find(prod => prod.prodNo === cart_coffee_id);
    
    const cartItem = document.createElement('div');
    cartItem.classList.add('cart_item');

    cartItem.innerHTML = `
      <img src="src/images/${item.img}" alt="${item.alt}" />
      <div class="cart_item_info">
        <p><strong>상품명 : </strong> ${item.prodName}</p>
        <p><strong>가격 : </strong> ${item.prodPrice}원</p>
        <p><strong>수량 : </strong> ${carts_coffee_count}</p>
      </div>
    `;

    cartContainer.appendChild(cartItem);
  };

  // 주문하기 버튼 추가
  const orderButton = document.createElement('button');
  orderButton.classList.add('order_button');
  orderButton.textContent = '주문하기';

  // 주문하기 버튼을 cartContainer에 추가
  cartContainer.appendChild(orderButton);

  // mainSection에 장바구니 컨테이너 추가
  mainSection.appendChild(cartContainer);
}
