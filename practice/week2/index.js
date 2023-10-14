const mango = document.createElement("li");
// const mangoText = document.createTextNode("mango");
mango.innerText = "mango";

// mango.appendChild(mangoText);

const fruitList = document.querySelector("ul");
fruitList.appendChild(mango);

// querySelectorAll(): 리스트 반환
const redFruit = document.querySelectorAll(".red");

redFruit.forEach((fruit) => {
  fruit.remove();
});

const thirdFruit = document.querySelector("li:nth-child(3)");
// thirdFruit.classList.add("blue");
thirdFruit.className = "blue";

const lengthBtn = document.querySelector("button.count");
function showLength() {
  const allList = document.querySelectorAll("li");
  alert(`과일 개수는 ${allList.length}개 입니다.`);
}

lengthBtn.addEventListener("click", showLength);
