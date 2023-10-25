let HISTORY_LIST = [
  {
    category: "과외비",
    place: "10월 월급",
    history: 500000,
  },
  {
    category: "식비",
    place: "닭도리탕 문정역점",
    history: -30000,
  },
  {
    category: "용돈",
    place: "용돈 획득",
    history: 100000,
  },
  {
    category: "식비",
    place: "버거킹 햄버거 단품",
    history: -10000,
  },
];

// 최초 나의 자산
let INIT_BALANCE = 0;
let income = 0;
let expenses = 0;
const incomeValue = document.querySelector(".income.detailValue");
const expensesValue = document.querySelector(".expenses.detailValue");

// 수입, 지출 내역 만들기
const accountArticle = document.querySelector(".accountArticle");
const accountUl = document.createElement("ul");
const assetValue = document.querySelector(".assetValue");

HISTORY_LIST.map((list) => {
  INIT_BALANCE += list.history;
  createList(list);
});

accountArticle.appendChild(accountUl);
assetValue.innerHTML = INIT_BALANCE.toLocaleString();

// "x" 버튼 클릭 시, 리스트 삭제 기능
const accountLi = accountUl.querySelectorAll(".accountLi");
accountLi.forEach((li) => {
  const delBtn = li.querySelector(".delBtn");

  delBtn.addEventListener("click", () => {
    const modal = document.querySelector("#modal");
    const listDelBtn = modal.querySelector(".listDelBtn");
    const cancelBtn = modal.querySelector(".cancelBtn");
    const clickedHistory = li.querySelector(".history");
    let clickedArr = [];

    displayModal(modal);

    // "삭제" 클릭 시, 모달이 화면에서 사라지고 "x" 버튼 클릭했던 리스트 삭제
    listDelBtn.addEventListener("click", () => {
      deleteModal(modal);
      reflectAccount(clickedArr, clickedHistory);
      li.remove();
    });

    // "취소" 클릭 시, 모달만 화면에서 사라짐
    cancelBtn.addEventListener("click", () => {
      deleteModal(modal);
      clickedArr.push(clickedHistory.innerHTML);
    });
  });
});

/* -------------- 함수 모음 -------------- */
// js로 리스트 생성
function createList(list) {
  const createdLi = document.createElement("li");
  createdLi.classList.add("accountLi");

  const createdDelBtn = document.createElement("button");
  createdDelBtn.innerHTML = "x";
  createdDelBtn.classList.add("delBtn");

  const createdCategory = document.createElement("p");
  createdCategory.innerHTML = list.category;
  createdCategory.classList.add("category");

  const createdPlace = document.createElement("p");
  createdPlace.innerHTML = list.place;
  createdPlace.classList.add("place");

  const createdHistory = document.createElement("p");
  // toLocaleString(): 숫자 자릿수에 따라 콤마(,) 추가
  createdHistory.innerHTML = list.history;

  displayAccount(list, createdHistory);

  // 수입, 지출 모두 공통적으로 "history"라는 클래스 명 부여
  createdHistory.classList.add("history");

  createdLi.appendChild(createdCategory);
  createdLi.appendChild(createdPlace);
  createdLi.appendChild(createdHistory);
  createdLi.appendChild(createdDelBtn);

  accountUl.appendChild(createdLi);
}

// 모달을 보여주는 함수
function displayModal(modal) {
  modal.style.display = "flex";
}

// 모달을 화면에서 보이지 않게 하는 함수
function deleteModal(modal) {
  modal.style.display = "none";
}

// 수입과 지출을 화면에 띄워주는 함수
function displayAccount(list, createdHistory) {
  // 수입인 경우, "className = income"
  // 지출인 경우, "className = expenses"
  if (list.history < 0) {
    createdHistory.classList.add("expenses");
    expenses += list.history;
  } else {
    createdHistory.classList.add("income");
    income += list.history;
  }

  incomeValue.innerHTML = income.toLocaleString();
  expensesValue.innerHTML = Math.abs(expenses).toLocaleString();
}

// 자산을 화면에 반영하는 함수
function reflectAccount(clickedArr, clickedHistory) {
  clickedArr.push(clickedHistory.innerHTML);
  if (clickedArr.length === 1) {
    INIT_BALANCE -= clickedArr[0];

    clickedArr[0] < 0 ? (expenses -= clickedArr[0]) : (income -= clickedArr[0]);
  }

  incomeValue.innerHTML = income.toLocaleString();
  expensesValue.innerHTML = Math.abs(expenses).toLocaleString();
  assetValue.innerHTML = INIT_BALANCE.toLocaleString();
}
