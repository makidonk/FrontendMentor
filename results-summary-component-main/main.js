async function getJSON() {
  const response = await fetch("data.json");
  const categoryContent = await response.json();
  console.log(categoryContent[1].score);
}

categoryElement = document.querySelector("categoryElement");
getJSON();

let categories = [];
for (let i = 0; i <= 3; i++) {
  let category = categoryContent[i];
  categories.push(category);
}

function createCategory(category) {
  const categoryElement = document.createElement("article");
  categoryElement.classList.add("category");
  summaryCategories.appendChild(categoryElement);

  const categoryIcon = document.createElement("img");
  categoryIcon.src = category.icon;
  categoryElement.appendChild(categoryTitle);

  const categoryTitle = document.createElement("h6");
  categoryTitle.innerText = category.category;
  categoryElement.appendChild(categoryTitle);

  const categoryScore = document.createElement("h7");
  categoryScore.innerText = category.score + "/ 100";
}

createCategory();
