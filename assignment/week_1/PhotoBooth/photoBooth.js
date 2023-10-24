const prevLeftBtn = document.querySelector(".prevLeftBtn");
const prevRightBtn = document.querySelector(".prevRightBtn");

const goTopBtn = document.querySelector(".goTopBtn");
const homeHeight = goTopBtn.getBoundingClientRect().height;

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

// 투명도 조절 기능
document.addEventListener("scroll", () => {
  // 수식을 활용하여 스크롤 시 투명도 값을 조절해줌
  goTopBtn.style.opacity = window.scrollY / homeHeight / 50;

  console.log(window.scrollY / homeHeight / 50);
});
