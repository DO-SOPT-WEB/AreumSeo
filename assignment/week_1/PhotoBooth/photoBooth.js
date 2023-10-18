const prevLeftBtn = document.querySelector(".prevLeftBtn");
const prevRightBtn = document.querySelector(".prevRightBtn");

// 좌측 끝으로 이동하는 기능
prevLeftBtn.addEventListener("click", () => {
  const prevSection = document.querySelector("section#prevSection");
  prevSection.scrollLeft = 0;
});

// 우측 끝으로 이동하는 기능
prevRightBtn.addEventListener("click", () => {
  const prevSection = document.querySelector("section#prevSection");
  // 최대 너비 값 구하기
  prevSection.scrollLeft = prevSection.scrollWidth - prevSection.clientWidth;
});
