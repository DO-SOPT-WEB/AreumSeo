const HISTORY_LIST = [
  {
    id: 1,
    category: "과외비",
    place: "10월 월급",
    history: 500000,
  },
  {
    id: 2,
    category: "식비",
    place: "닭도리탕 문정역점",
    history: -30000,
  },
  {
    id: 3,
    category: "용돈",
    place: "용돈 획득",
    history: 100000,
  },
  {
    id: 4,
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
const accountArticle = document.querySelector(".accountArticle");
const accountUl = document.createElement("ul");
const assetValue = document.querySelector(".assetValue");
const addBtn = document.querySelector("footer button");
const modalCloseBtn = document.querySelector(".modalBtn.close");
const listSaveBtn = document.querySelector(".modalBtn.save");
const modalInput = document.querySelectorAll(".modalInput");
const checkedInputContainer = document.querySelector(".bottomModal");
const additionalInputPrice = checkedInputContainer.querySelector(
  ".additionalInput.price"
);
const incomeBox = accountArticle.querySelector("#incomeBox");
const expensesBox = accountArticle.querySelector("#expensesBox");

// 수입, 지출 내역 만들기
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
    const modal = document.querySelector(".modal.delete");
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

// 수입 필터링
incomeBox.addEventListener("click", () => {
  const incomeList = accountArticle.querySelectorAll(".income.history");
  filterList(incomeBox, incomeList);
});

// 지출 필터링
expensesBox.addEventListener("click", () => {
  const expensesList = accountArticle.querySelectorAll(".expenses.history");
  filterList(expensesBox, expensesList);
});

// 리스트 추가 버튼 클릭 시 작동
addBtn.addEventListener("click", () => {
  const footer = document.querySelector("footer");
  const modal = document.querySelector(".modal.add");
  footer.style.display = "none";
  displayModal(modal);
  createOptions();
});

// 추가 리스트 가격 입력 기능
additionalInputPrice.addEventListener("keyup", (e) => addList(e));

// 수입과 지출 중 하나의 선택만 하도록 제한
modalInput.forEach((input) => {
  checkedOnlyOne(input);
});

// 추가 리스트 저장 버튼 클릭 시 동작
listSaveBtn.addEventListener("click", () => {
  const categorySelect = checkedInputContainer.querySelector("select");
  let checkedInput = checkedInputContainer.querySelector(
    "input[type=checkbox]:checked"
  ).value;
  let selectedOption =
    categorySelect.options[categorySelect.selectedIndex].value;
  let additionalPrice = checkedInputContainer
    .querySelector(".additionalInput.price")
    .value.replaceAll(",", "");
  let additionalContents = checkedInputContainer.querySelector(
    ".additionalInput.contents"
  ).value;

  // 수입 리스트 추가
  if (checkedInput === "income") {
    const newObj = {
      id: HISTORY_LIST.length + 1,
      category: selectedOption,
      place: additionalContents,
      history: Number(additionalPrice),
    };

    saveNewList(newObj);
  }

  // 지출 리스트 추가
  else {
    const newObj = {
      id: HISTORY_LIST.length + 1,
      category: selectedOption,
      place: additionalContents,
      history: -additionalPrice,
    };

    saveNewList(newObj);
  }

  // 모든 input 값을 초기화
  categorySelect.selectedIndex = 0;

  checkedInputContainer.querySelector(
    "input[type=checkbox][id='modalIncomeBox']"
  ).checked = true;
  checkedInputContainer.querySelector(
    "input[type=checkbox][id='modalExpensesBox']"
  ).checked = false;
  checkedInputContainer.querySelector(".additionalInput.price").value = "";
  checkedInputContainer.querySelector(".additionalInput.contents").value = "";

  accountArticle.appendChild(accountUl);
  assetValue.innerHTML = INIT_BALANCE.toLocaleString();
});

// 하단모달 "닫기" 버튼 클릭 시 작동
modalCloseBtn.addEventListener("click", () => {
  const footer = document.querySelector("footer");
  const modal = document.querySelector(".modal.add");
  footer.style.display = "block";
  deleteModal(modal);
  deleteOptions();
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

// 수입, 지출 필터링 함수
function filterList(checkbox, notFilteredList) {
  notFilteredList.forEach((element) => {
    element.parentNode.style.display =
      checkbox.checked === true ? "flex" : "none";
  });
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

// 모달을 보여주는 함수
function displayModal(modal) {
  modal.style.display = "flex";
}

// 모달을 화면에서 보이지 않게 하는 함수
function deleteModal(modal) {
  modal.style.display = "none";
}

// 드롭다운 리스트 옵션 생성 함수
function createOptions() {
  const categorySelect = document.querySelector(".categorySelect");
  let categoryArr = [];
  HISTORY_LIST.map((list) => {
    if (!categoryArr.includes(list.category)) {
      categoryArr.push(list.category);
    }
  });

  categoryArr.map((cate) => {
    const categoryOption = document.createElement("option");
    categoryOption.innerHTML = cate;
    categorySelect.appendChild(categoryOption);
  });
}

// 드롭다운 리스트 옵션 삭제 함수
function deleteOptions() {
  const categorySelect = document.querySelector(".categorySelect");
  // replaceChildren(): 아무런 파라미터도 넘겨주지 않으면 모든 자식 노드 삭제
  categorySelect.replaceChildren();
}

// 체크박스의 선택 가능 개수를 한 개로 제한하는 함수
function checkedOnlyOne(input) {
  const modalIncomeBox = document.getElementById("modalIncomeBox");
  const modalExpensesBox = document.getElementById("modalExpensesBox");

  input.addEventListener("click", () => {
    if (input.checked) {
      if (input === modalIncomeBox) {
        modalExpensesBox.checked = false;
      } else if (input === modalExpensesBox) {
        modalIncomeBox.checked = false;
      }
    }
  });
}

// 리스트 추가 함수
function addList(e) {
  let value = e.target.value;
  // value를 "," 제외한 문자로 처리 -> Number로 형변환
  value = Number(value.replaceAll(",", ""));
  if (isNaN(value)) {
    alert("숫자를 입력해주세요!");
    additionalInputPrice.value = 0;
  } else {
    const formatValue = value.toLocaleString();
    additionalInputPrice.value = formatValue;
  }
}

// 추가 리스트를 저장하는 함수
function saveNewList(newObj) {
  INIT_BALANCE += newObj.history;
  if (newObj.place.length === 0 || newObj.history === 0) {
    alert("모든 칸을 채워주세요.");
  } else {
    HISTORY_LIST.push({ ...newObj });
    createList({ ...newObj });
    alert("저장 성공!");
  }
}
