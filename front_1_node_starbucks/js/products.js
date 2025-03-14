async function getCoffeeData(coffeeId) {
  try {
    const response = await fetch(`http://localhost:3000/product/${coffeeId}`);
    const data = await response.json();

    console.log(data)
      
    let type = data.img;
    let pname = data.prodName;

    return { type, pname }; // 객체 형태로 반환
  } catch (error) {
    console.error(error);
  }
}

async function sendCoffeeData(coffee) {
  try {
    const response = await fetch('http://localhost:3000/carts', {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',  
      },
      body: JSON.stringify(coffee),
    });

    const data = await response.json();
    console.log('Response:', data);
  } catch (error) {
    console.error('Error:', error);
  }
}

const coffee = {prodNo: 'C0001', prodCount: 2};
sendCoffeeData(coffee);

export async function drawCoffeeProduct() {
  const mainSection = document.querySelector('.main_products');

  if (!mainSection) return;

  mainSection.innerHTML = '';  // 초기화

  // 커피 제품 정보 배열
  const coffeeItems = [
    {
      prodNo: 'C0001',
      imageSrc: './src/images/C0001.jpg',
      name: '나이트로 바닐라 크림',
      enName: 'Nitro Vanilla Cream',
      description: '부드러운 목넘김의 나이트로 바닐라 크림의 매력을 한번에 느껴보세요!',
      nutrition: {
        kcal: 80,
        sodium: 40,
        fat: 2,
        sugar: 10,
        protein: 1,
        caffeine: 232
      },
      size: 'Tall(톨) / 355ml'
    },
    // 여기에 다른 커피 제품 정보를 추가할 수 있습니다.
  ];

  // 커피 제품을 반복문으로 생성
  coffeeItems.forEach(item => {
    const coffeeContainer = document.createElement('div');
    coffeeContainer.classList.add('coffee_container');

    coffeeContainer.innerHTML = `
      <div class="coffee">
        <img class="product_num" src="${item.imageSrc}" />
      </div>
      <div>
        <div>
          <div class="product_name">${item.name}</div>
          <div class="product_Ename">${item.enName}</div>
          <hr />
          <div class="information">${item.description}</div>
          <div>제품 영양 정보</div>
          <div class="size">${item.size}</div>
          <hr />
          <table>
            <tr>
              <td>1회 제공량 (kcal)</td>
              <td class="kcal">${item.nutrition.kcal}</td>
              <td>나트륨 (mg)</td>
              <td class="nat">${item.nutrition.sodium}</td>
            </tr>
            <tr>
              <td>포화지방 (g)</td>
              <td class="fat">${item.nutrition.fat}</td>
              <td>당류 (g)</td>
              <td class="sugar">${item.nutrition.sugar}</td>
            </tr>
            <tr>
              <td>단백질 (g)</td>
              <td class="protein">${item.nutrition.protein}</td>
              <td>카페인 (mg)</td>
              <td class="caffeine">${item.nutrition.caffeine}</td>
            </tr>
          </table>
        </div>
        <label for="number">수량</label>
        <select id="number">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
          <option>8</option>
          <option>9</option>
        </select>
        <button class="cart">장바구니 담기</button>
      </div>
    `;

    // 생성된 커피 제품을 mainSection에 추가
    mainSection.appendChild(coffeeContainer);
  });
}
