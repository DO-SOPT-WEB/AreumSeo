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

// 수입, 지출 내역 만들기
const accountArticle = document.querySelector(".accountArticle");
const accountUl = document.createElement("ul");
const assetValue = document.querySelector(".assetValue");

HISTORY_LIST.map((list) => {
  INIT_BALANCE += list.history;

  const createdLi = document.createElement("li");
  createdLi.classList.add("accountLi");

  const createdDelBtn = document.createElement("button");
  createdDelBtn.innerHTML = "x";
  createdDelBtn.classList.add("delBtn");

  const listCategory = document.createElement("p");
  listCategory.innerHTML = list.category;
  listCategory.classList.add("category");

  const listPlace = document.createElement("p");
  listPlace.innerHTML = list.place;
  listPlace.classList.add("place");

  const listHistory = document.createElement("p");
  // toLocaleString(): 숫자 자릿수에 따라 콤마(,) 추가
  listHistory.innerHTML = list.history;

  // 수입인 경우, "className = income"
  // 지출인 경우, "className = expenses"
  list.history < 0
    ? listHistory.classList.add("expenses")
    : listHistory.classList.add("income");

  // 수입, 지출 모두 공통적으로 "history"라는 클래스 명 부여
  listHistory.classList.add("history");

  createdLi.appendChild(listCategory);
  createdLi.appendChild(listPlace);
  createdLi.appendChild(listHistory);
  createdLi.appendChild(createdDelBtn);

  accountUl.appendChild(createdLi);
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

    // 모달이 화면에 나타남
    modal.style.display = "flex";

    // "삭제" 클릭 시, 모달이 화면에서 사라지고 "x" 버튼 클릭했던 리스트 삭제
    listDelBtn.addEventListener("click", () => {
      modal.style.display = "none";
      li.remove();
    });

    // "취소" 클릭 시, 모달만 화면에서 사라짐
    cancelBtn.addEventListener("click", () => {
      modal.style.display = "none";
    });
  });
});
