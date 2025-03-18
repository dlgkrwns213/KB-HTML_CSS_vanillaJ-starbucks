export async function drawCoffeeProduct() {
  const mainSection = document.querySelector('.main_products');
  if (!mainSection) return;
  
  mainSection.innerHTML = ''; // 초기화

  const coffeeItems = [
    {
      prodNo: 'C0001',
      type: '콜드 브루',
      imageSrc: './src/images/C0001.jpg',
      name: '나이트로 바닐라 크림',
      enName: 'Nitro Vanilla Cream',
      description: '부드러운 목넘김의 나이트로 바닐라 크림의 매력을 한번에 느껴보세요!',
      nutrition: { kcal: 80, sodium: 40, fat: 2, sugar: 10, protein: 1, caffeine: 232 },
      size: 'Tall(톨) / 355ml'
    },
  ];

  coffeeItems.forEach(item => {
    // 새롭게 감싸는 div (전체 컨테이너)
    const coffeeWrapper = document.createElement('div');
    coffeeWrapper.classList.add('coffee_wrapper');

    // 커피 타입 (맨 위)
    const coffeeType = document.createElement('div');
    coffeeType.classList.add('coffee_type');
    coffeeType.textContent = item.type;

    // 커피 컨테이너 (이미지 + 설명 가로 배치)
    const coffeeContainer = document.createElement('section');
    coffeeContainer.classList.add('coffee_container');

    const coffeeImageContainer = document.createElement('div');
    coffeeImageContainer.classList.add('coffee');
    const coffeeImage = document.createElement('img');
    coffeeImage.classList.add('product_num');
    coffeeImage.src = item.imageSrc;
    coffeeImageContainer.appendChild(coffeeImage);

    const infoContainer = document.createElement('div');
    infoContainer.classList.add('info');

    const productName = document.createElement('div');
    productName.classList.add('product_name');
    productName.textContent = item.name;

    const productEName = document.createElement('div');
    productEName.classList.add('product_Ename');
    productEName.textContent = item.enName;

    // 설명 추가 (영어 이름과 커피 사이즈 사이에 위치)
    const midDescription = document.createElement('div');
    midDescription.classList.add('information');
    midDescription.textContent = item.description;

    const sizeInfo = document.createElement('div');
    sizeInfo.classList.add('size');
    sizeInfo.textContent = item.size;

    const table = document.createElement('table');
    table.innerHTML = `
      <tr><td>1회 제공량 (kcal)</td><td>${item.nutrition.kcal}</td><td>나트륨 (mg)</td><td>${item.nutrition.sodium}</td></tr>
      <tr><td>포화지방 (g)</td><td>${item.nutrition.fat}</td><td>당류 (g)</td><td>${item.nutrition.sugar}</td></tr>
      <tr><td>단백질 (g)</td><td>${item.nutrition.protein}</td><td>카페인 (mg)</td><td>${item.nutrition.caffeine}</td></tr>
    `;

    const controlsContainer = document.createElement('div');
    controlsContainer.classList.add('controls');

    const quantityLabel = document.createElement('label');
    quantityLabel.setAttribute('for', 'number');
    quantityLabel.textContent = '수량';

    const selectQuantity = document.createElement('select');
    selectQuantity.id = 'number';
    for (let i = 1; i <= 9; i++) {
      const option = document.createElement('option');
      option.textContent = i;
      selectQuantity.appendChild(option);
    }

    const cartButton = document.createElement('button');
    cartButton.classList.add('cart');
    cartButton.textContent = '장바구니 담기';

    controlsContainer.append(quantityLabel, selectQuantity, cartButton);
    infoContainer.append(productName, productEName, midDescription, sizeInfo, table, controlsContainer);

    coffeeContainer.append(coffeeImageContainer, infoContainer);

    // 마지막 설명 부분
    const finalDescription = document.createElement('div');
    finalDescription.classList.add('information');
    finalDescription.textContent = item.description;

    // coffeeWrapper에 요소 추가
    coffeeWrapper.append(coffeeType, coffeeContainer, finalDescription);

    // mainSection에 coffeeWrapper 추가
    mainSection.appendChild(coffeeWrapper);
  });
}
