async function getTotalCoffeeData() {
  try {
    const response = await fetch('http://localhost:3000/product');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function drawProduct() {
  const mainSection = document.querySelector('.main_products .container');

  if (!mainSection) return;

  // 음료 리스트
  const products = await getTotalCoffeeData();

  console.log(products)

  mainSection.innerHTML = '';

  products.forEach((product) => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <a href="product.html?name=${encodeURIComponent(product.prodName)}">
        <div class="card_image">
          <img src="src/images/${product.img}" alt="${product.prodName}" />
        </div>
        <div class="card_descript">
          <p>${product.prodName}</p>
        </div>
      </a>
    `;
    mainSection.appendChild(card);
  });
};
