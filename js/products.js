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
    const response = await fetch('http://localhost:3000/cart', {
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

window.addEventListener('load', async function () {
  let coffee_type = document.querySelector('div.coffee_type'); // 커피 유형 div 가져오기
  let product_name = document.querySelector('div.product_name'); // 커피 이름 가져오기
  let product_Ename = document.querySelector('div.product_Ename'); // 커피 영어 이름 가져오기
  let information = document.querySelectorAll('div.information'); // 커피 설명 가져오기
  let product_num = document.querySelector('img.product_num');

  // 🔥 getCoffeeData가 데이터를 가져올 때까지 기다리기

  let coffeeId = 'C0001'
  let coffeeData = await getCoffeeData(coffeeId);
  console.log(coffeeData);

  if (coffeeData) {
      coffee_type.innerHTML = '콜드 블루';
      product_name.innerHTML = coffeeData.pname;
      product_Ename.innerHTML = 'Nitro Vanilla Cream';

      for (let i = 0; i < information.length; i++) {
        information[i].innerHTML = '부드러운 목넘김의 나이트로 바닐라 크림의 매력을 한번에 느껴보세요!<hr>';
      }

      product_num.src = "src/images/" + coffeeData.type; // 이미지 변경
      console.log(product_num.src);
  }

  let button = document.querySelector('button.cart');
  button.addEventListener('click', function () {
      let number = document.querySelector('select#number');
      console.log(number.value);
  });
});