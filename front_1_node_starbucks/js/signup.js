export function drawSignupForm() {
  const container = document.querySelector(".main_products");
  console.log(container)
  if (!container) return;

  container.innerHTML = ""; // 기존 내용을 초기화

  // 필드셋 생성
  const fieldset = document.createElement("fieldset");

  // 테이블 생성
  const table = document.createElement("table");

  // 폼 항목 데이터
  const formItems = [
    { label: "아이디 입력", id: "user_id", type: "text" },
    { label: "비밀번호 입력", id: "password", type: "password" },
    { label: "비밀번호 확인", id: "password_verification", type: "password" },
    { label: "이메일 입력", id: "user_email", type: "email" },
  ];

  formItems.forEach(({ label, id, type }) => {
    const tr = document.createElement("tr");

    const tdLabel = document.createElement("td");
    tdLabel.classList.add("table_text");
    const labelElement = document.createElement("label");
    labelElement.setAttribute("for", id);
    labelElement.textContent = label;
    tdLabel.appendChild(labelElement);

    const tdInput = document.createElement("td");
    const inputElement = document.createElement("input");
    inputElement.setAttribute("id", id);
    inputElement.setAttribute("type", type);
    inputElement.classList.add("textarea");
    tdInput.appendChild(inputElement);

    tr.appendChild(tdLabel);
    tr.appendChild(tdInput);
    table.appendChild(tr);
  });

  // 성별 체크박스
  const genderRow = document.createElement("tr");

  const genderLabelTd = document.createElement("td");
  genderLabelTd.classList.add("table_text");
  genderLabelTd.textContent = "성별";

  const genderInputTd = document.createElement("td");
  genderInputTd.classList.add("table_text");

  ["man", "woman"].forEach((id, index) => {
    const input = document.createElement("input");
    input.setAttribute("id", id);
    input.setAttribute("type", "checkbox");
    input.setAttribute("name", "gender");
    input.setAttribute("value", index === 0 ? "m" : "w");

    const label = document.createElement("label");
    label.setAttribute("for", id);
    label.textContent = index === 0 ? "남" : "여";

    genderInputTd.appendChild(input);
    genderInputTd.appendChild(label);
  });

  genderRow.appendChild(genderLabelTd);
  genderRow.appendChild(genderInputTd);
  table.appendChild(genderRow);

  // 회원가입 버튼
  const buttonRow = document.createElement("tr");
  const buttonTd = document.createElement("td");
  buttonTd.setAttribute("colspan", "2");

  const signupButton = document.createElement("input");
  signupButton.setAttribute("type", "button");
  signupButton.setAttribute("value", "회원가입");
  signupButton.setAttribute("id", "signup_button");

  buttonTd.appendChild(signupButton);
  buttonRow.appendChild(buttonTd);
  table.appendChild(buttonRow);

  // 모든 요소를 추가
  fieldset.appendChild(table);
  container.appendChild(fieldset);
}
