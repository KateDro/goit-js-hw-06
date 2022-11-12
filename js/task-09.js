function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColorBtn = document.querySelector(".change-color");
const hexColorSpan = document.querySelector(".change-color");

changeColorBtn.addEventListener("click", onClickColorChange);

function onClickColorChange() {
  document.body.style.backgroundColor = getRandomHexColor();
  hexColorSpan.textContent = document.body.style.backgroundColor;
}
