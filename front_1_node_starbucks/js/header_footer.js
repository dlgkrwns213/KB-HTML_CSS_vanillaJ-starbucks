export function drawHeader() {
  const header = document.createElement('header');
  const headerDiv = document.createElement('div');
  headerDiv.className = 'header';

  // logo 생성
  const logoDiv = document.createElement('div');
  logoDiv.className = 'logo';
  const logoImg = document.createElement('img');
  logoImg.src = 'src/images/logo.png';
  logoDiv.appendChild(logoImg);
  headerDiv.appendChild(logoDiv);

  // nav 생성
  const nav = document.createElement('nav');
  const ul = document.createElement('ul');
  ul.className = 'menu';

  const menuItems = [
    { className: 'products', text: '음료', href: 'layout.html' },
    { className: 'cart', text: '장바구니', href: 'cart.html' },
    { className: 'orders', text: '주문목록', href: 'order_list.html' },
    { className: '', text: '로그인', href: 'login.html' },
    { className: '', text: '로그아웃', href: '#' },
    { className: '', text: '회원가입', href: 'signup.html' }
  ];

  menuItems.forEach(item => {
    const li = document.createElement('li');
    li.className = item.className;
    const a = document.createElement('a');
    a.href = item.href;
    a.textContent = item.text;
    li.appendChild(a);
    ul.appendChild(li);
  });

  nav.appendChild(ul);
  headerDiv.appendChild(nav);
  header.appendChild(headerDiv);

  // HTML에 추가
  document.body.appendChild(header);
}

export function drawFooter() {
  const footer = document.createElement('footer');
  const footerDiv = document.createElement('div');
  footerDiv.className = 'footer';
  const footerImg = document.createElement('img');
  footerImg.src = 'src/images/footer.png';
  footerDiv.appendChild(footerImg);
  footer.appendChild(footerDiv);

  // HTML에 추가
  document.body.appendChild(footer);
}
