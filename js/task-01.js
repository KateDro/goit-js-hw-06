const categoriesItemsEl = document.querySelectorAll("#categories li.item");
console.log(`Number of categories: ${categoriesItemsEl.length}`);

for (let i = 0; i < categoriesItemsEl.length; i += 1) {
  console.log(
    `Category: ${categoriesItemsEl[i].querySelector("h2").textContent}`
  );
  console.log(
    `Elements: ${categoriesItemsEl[i].querySelectorAll("li").length}`
  );
}
