document.addEventListener('DOMContentLoaded', function () {
  const loginForm = document.querySelector('form');
  const usernameInput = document.querySelector('input[type="text"]');
  const passwordInput = document.querySelector('input[type="password"]');
  const rememberCheckbox = document.querySelector('#remember');

  loginForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    if (username === '' || password === '') {
      alert('아이디와 비밀번호를 입력해 주세요.');
      return;
    }

    if (rememberCheckbox.checked) {
      localStorage.setItem('savedUsername', username);
    } else {
      localStorage.removeItem('savedUsername');
    }

    if (username === 'user' && password === 'password') {
      alert('로그인 성공!');
      // window.location.href =
    } else {
      alert('아이디 또는 비밀번호가 올바르지 않습니다.');
    }
  });

  const savedUsername = localStorage.getItem('savedUsername');
  if (savedUsername) {
    usernameInput.value = savedUsername;
    rememberCheckbox.checked = true;
  }
});
