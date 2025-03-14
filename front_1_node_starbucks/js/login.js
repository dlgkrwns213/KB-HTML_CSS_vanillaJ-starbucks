export function drawLogin() {
  const mainSection = document.querySelector('.main_products');

  if (!mainSection) return;

  mainSection.innerHTML = '';  // 초기화

  const loginContainer = document.createElement('div');
  loginContainer.classList.add('login_container');

  loginContainer.innerHTML = `
    <h2>로그인</h2>
    <form>
      <div class="form_group">
        <input
          type="text"
          placeholder="아이디를 입력해 주세요."
          required
        />
      </div>
      <div class="form_group">
        <input
          type="password"
          placeholder="비밀번호를 입력해 주세요."
          required
        />
      </div>
      <div class="checkbox_group">
        <input type="checkbox" id="remember" />
        <label for="remember">아이디 저장</label>
      </div>
      <button type="submit" class="login_button">로그인</button>
    </form>
  `;

  mainSection.appendChild(loginContainer);
}
