const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsListEl = document.querySelector("ul#ingredients");
const ingredientsItemsEl = ingredients.map((ingredientName) => {
  const liEl = document.createElement("li");

  liEl.textContent = ingredientName;
  liEl.classList.add("item");

  return liEl;
});

ingredientsListEl.append(...ingredientsItemsEl);
