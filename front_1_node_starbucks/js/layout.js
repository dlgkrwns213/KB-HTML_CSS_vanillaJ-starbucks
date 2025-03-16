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
  const mainSection = document.querySelector('.main_products');

  if (!mainSection) return;

  // 기존 내용 초기화
  mainSection.innerHTML = '';

  // h2 제목 추가
  const title = document.createElement('h2');
  title.textContent = '음료';
  mainSection.appendChild(title);

  // article 생성
  const article = document.createElement('article');
  mainSection.appendChild(article);

  // 컨테이너 생성 (음료 리스트 담을 곳)
  const container = document.createElement('div');
  container.className = 'container';
  article.appendChild(container);

  // 지도 div 생성
  const mapDiv = document.createElement('div');
  mapDiv.id = 'map';
  mapDiv.style.width = '100%';
  mapDiv.style.height = '95%';
  mapDiv.style.border = '1px solid';
  article.appendChild(mapDiv);

  // aside 생성
  const aside = document.createElement('aside');
  mainSection.appendChild(aside);

  // 광고 div 생성
  const advertisement = document.createElement('div');
  advertisement.className = 'advertisement';
  aside.appendChild(advertisement);

  // 광고 이미지 추가
  const adImage = document.createElement('img');
  adImage.src = 'advertisement.jpg';
  adImage.alt = '광고x';
  advertisement.appendChild(adImage);

  // 음료 리스트 가져오기
  const products = await getTotalCoffeeData();

  console.log(products);

  container.innerHTML = '';

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
    container.appendChild(card);
  });
}
