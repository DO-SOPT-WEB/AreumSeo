const prevLeftBtn = document.querySelector(".prevLeftBtn");
const prevRightBtn = document.querySelector(".prevRightBtn");

const goTopBtn = document.querySelector(".goTopBtn");
const homeHeight = goTopBtn.getBoundingClientRect().height;

const imgContainer = document.querySelectorAll(".imgContainer");
let descript = document.querySelector(".description");

// 말 줄임표와 함께 나올 버튼
const moreInfoBtn = document.createElement("button");
moreInfoBtn.innerHTML = "더보기";
moreInfoBtn.classList.add("moreInfoBtn");

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
});

// 호버된 이미지의 글자 수에 따라 "더보기" 버튼 생성
imgContainer.forEach((img) => {
  // "mouseover" 이벤트를 적용할 경우, 이미지 내에서 마우스가 움직일 때마다 이벤트가 감지됨
  // 이미지에 마우스가 들어오는 순간만 감지하기 위해, "mouseenter" 이벤트 적용
  img.addEventListener("mouseenter", () => {
    let detailText = img.querySelector("p.detail").innerHTML;
    let detail = descript.querySelector("p.detail");
    if (detailText.length >= 94) {
      img.classList.add("moreInfo");
      descript = img.querySelector(".description");

      // "더보기" 버튼을 호버된 이미지의 설명박스(.description) 하위로 넣어줌
      descript.appendChild(moreInfoBtn);
    }
  });
});
