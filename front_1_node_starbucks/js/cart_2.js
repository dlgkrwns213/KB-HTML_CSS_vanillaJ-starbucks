document.addEventListener('DOMContentLoaded', function () {
  const cartItems = [
    {
      id: 'c0001',
      name: '아메리카노',
      price: 3500,
      quantity: 1,
      image: './src/images/c0001.jpg',
    },
    {
      id: 'c0002',
      name: '아이스아메리카노',
      price: 4000,
      quantity: 1,
      image: './src/images/c0002.jpg',
    },
    {
      id: 'c0003',
      name: '라떼',
      price: 4000,
      quantity: 1,
      image: './src/images/c0003.jpg',
    },
  ];

  const cartList = document.getElementById('cart_list');

  function updateCart() {
    cartList.innerHTML = ''; // 초기화

    cartItems.forEach((item, index) => {
      const cartItem = document.createElement('div');
      cartItem.className = 'cart_item';

      const img = document.createElement('img');
      img.src = item.image;
      img.alt = item.name;

      const cartInfo = document.createElement('div');
      cartInfo.className = 'cart_item_info';
      cartInfo.innerHTML = `
        <p><strong>상품명 :</strong> ${item.name}</p>
        <p><strong>가격 :</strong> ${item.price}원</p>
        <p><strong>수량 :</strong> 
          <button class="decrease" data_index="${index}">-</button> 
          <span>${item.quantity}</span> 
          <button class="increase" data_index="${index}">+</button>
        </p>
        <button class="remove" data_index="${index}">삭제</button>
      `;

      cartItem.appendChild(img);
      cartItem.appendChild(cartInfo);
      cartList.appendChild(cartItem);
    });
  }

  document.addEventListener('click', function (event) {
    if (event.target.classList.contains('increase')) {
      const index = event.target.getAttribute('data_index');
      cartItems[index].quantity++;
      updateCart();
    } else if (event.target.classList.contains('decrease')) {
      const index = event.target.getAttribute('data_index');
      if (cartItems[index].quantity > 1) {
        cartItems[index].quantity--;
      } else {
        cartItems.splice(index, 1);
      }
      updateCart();
    } else if (event.target.classList.contains('remove')) {
      const index = event.target.getAttribute('data_index');
      cartItems.splice(index, 1);
      updateCart();
    }
  });

  updateCart();
});
