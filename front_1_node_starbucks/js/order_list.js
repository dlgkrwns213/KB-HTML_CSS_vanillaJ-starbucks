export function drawOrderList() {
  const orderData = [
    { orderNo: 97, orderDate: "2025-03-07", productNo: "C0001", productName: "아메리카노", price: 1000, quantity: 1 },
    { orderNo: 97, orderDate: "", productNo: "C0002", productName: "라테", price: 1000, quantity: 1 },
    { orderNo: 3, orderDate: "2025-03-08", productNo: "C0001", productName: "아메리카노", price: 1000, quantity: 1 },
    { orderNo: 43, orderDate: "2025-03-09", productNo: "C0001", productName: "아메리카노", price: 1000, quantity: 1 },
    { orderNo: "", orderDate: "2025-03-09", productNo: "C0045", productName: "말차 라테", price: 6000, quantity: 2 },
  ];

  const container = document.querySelector(".main_products");
  if (!container) return;

  // 기존 내용 초기화
  container.innerHTML = "";

  // 제목 추가
  const title = document.createElement("div");
  title.className = "title_style";
  title.textContent = "주문목록";
  container.appendChild(title);

  // 테이블 생성
  const table = document.createElement("table");
  container.appendChild(table);

  // 테이블 헤더 추가
  const thead = document.createElement("thead");
  table.appendChild(thead);

  const headerRow = document.createElement("tr");
  headerRow.className = "table_row table_text_align";
  thead.appendChild(headerRow);

  const headers = ["주문번호", "주문일자", "상품번호", "상품명", "가격", "주문수량"];
  headers.forEach((text) => {
    const th = document.createElement("th");
    th.className = "table_gap";
    th.textContent = text;
    headerRow.appendChild(th);
  });

  // 테이블 바디 추가
  const tbody = document.createElement("tbody");
  table.appendChild(tbody);

  orderData.forEach((order) => {
    const row = document.createElement("tr");
    row.className = order.orderNo ? "table_row table_text_align" : "table_row_no_underline table_text_align";
    tbody.appendChild(row);

    // 각 셀 추가
    const orderNoTd = document.createElement("td");
    orderNoTd.textContent = order.orderNo || "";
    row.appendChild(orderNoTd);

    const orderDateTd = document.createElement("td");
    orderDateTd.textContent = order.orderDate || "";
    row.appendChild(orderDateTd);

    const productNoTd = document.createElement("td");
    productNoTd.textContent = order.productNo;
    row.appendChild(productNoTd);

    const productNameTd = document.createElement("td");
    productNameTd.textContent = order.productName;
    row.appendChild(productNameTd);

    const priceTd = document.createElement("td");
    priceTd.textContent = order.price;
    row.appendChild(priceTd);

    const quantityTd = document.createElement("td");
    quantityTd.textContent = order.quantity;
    row.appendChild(quantityTd);
  });
}
