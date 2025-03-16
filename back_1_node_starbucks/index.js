const express = require('express');
const app = express();
const port = 3000;

//CORS문제 해결
const cors = require('cors');
app.use(cors());
/*요청ContentType이 x-www-form-urlencoded인 경우
요청의 body사용하고 싶다면 아래 함수를 사용하세요*/
app.use(express.urlencoded({ extended: true }));
/*요청ContentType이 application/json인 경우
요청의 body사용하고 싶다면 아래 함수를 사용하세요*/
app.use(express.json());
//get요청이 되었을때 할 일
app.get('/', (req, res) => {
  res.send('WELCOME');
});


const products = [
  {
    prodNo: 'C0001',
    prodName: '아메리카노',
    prodPrice: 1500,
    img: 'C0001.jpg',
  },
  {
    prodNo: 'C0002',
    prodName: '아이스아메리카노',
    prodPrice: 1500,
    img: 'C0002.jpg',
  },
  { prodNo: 'C0003', prodName: '라테', prodPrice: 2000, img: 'C0003.jpg' },
  {
    prodNo: 'C0004',
    prodName: '아이스라테',
    prodPrice: 2000,
    img: 'C0004.jpg',
  },
  {
    prodNo: 'C0005',
    prodName: '콜드브루몰트',
    prodPrice: 2500,
    img: 'C0005.jpg',
  },
  {
    prodNo: 'C0006',
    prodName: '카페브레베',
    prodPrice: 3500,
    img: 'C0006.jpg',
  },
  {
    prodNo: 'C0007',
    prodName: '바닐라라떼',
    prodPrice: 3500,
    img: 'C0007.jpg',
  },
];

// 장바구니 [{prodId: Count}] 형태
const carts = {C0001: 1, C0002: 2, C0007: 1};

app.get('/product', (req, res) => {
  //   res.send('아메리카노, 아이스아메리카노, 라테');
  res.json(products);
  
});


app.get('/product/:prodNo', (req, res) => {
  // res.send(`${req.params.prodNo}상품의 상세내용입니다`);
  let product;
  if (req.params.prodNo == 'C0001') {
    product = { prodName: '아메리카노', img: 'C0001.jpg' };
  } else if (req.params.prodNo == 'C0002') {
    product = { prodName: '아이스아메리카노', img: 'C0002.jpg' };
  } else if (req.params.prodNo == 'C0003') {
    product = { prodName: '라테', img: 'C0003.jpg' };
  } else if (req.params.prodNo == 'C0004') {
    product = { prodName: '아이스라테', img: 'C0004.jpg' };
  } else if (req.params.prodNo == 'C0005') {
    product = { prodName: '콜드브루몰트', img: 'C0005.jpg' };
  } else if (req.params.prodNo == 'C0006') {
    product = { prodName: '카페브레베', img: 'C0006.jpg' };
  } else if (req.params.prodNo == 'C0007') {
    product = { prodName: '바닐라라떼', img: 'C0007.jpg' };
  } else {
    product = {};
  }
  res.json(product);
});

// /cart
app.get('/carts', (req, res) => {
  return res.json(carts);
});

app.post('/carts', (req, res) => {
  const {prodNo: addProdNo, prodCount: addProdCount} = req.body;

  // 없는 물건인 경우
  if (!products.find(product => product.prodNo === addProdNo))
    return res.status(404).send({message: '없는 물건'});

  let prodCount = 0;
  for (let prodNo in carts) {
    if (addProdNo == prodNo) {
      prodCount = carts[prodNo];
    }
  }
  
  carts[addProdNo] = prodCount+addProdCount;

  res.send({message: '완료'});
});

//Listen for connections.
app.listen(port, () => {
  console.log('3000번 포트에서 backend server 실행중...');
});