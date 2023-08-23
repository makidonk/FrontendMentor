document.addEventListener("DOMContentLoaded", () => {
  const summaryCategories = document.querySelector(".summaryCategories");

  fetch("data.json") // accesing the json
    .then((response) => response.json()) // when done fetching, give the content
    .then((categories) => {
      // when we have the content we do stuff with it
      categories.forEach((category) => {
        createCategory(category);
      });
    })
    .catch((error) => {
      console.error("Error fetching JSON:", error);
    });

  function createCategory(category) {
    const categoryElement = document.createElement("article");
    categoryElement.classList.add("category");
    summaryCategories.appendChild(categoryElement);

    const categoryIcon = document.createElement("img");
    categoryIcon.setAttribute("id", "flex1");
    categoryIcon.src = category.icon;
    categoryIcon.alt = category.category;
    categoryElement.appendChild(categoryIcon);

    const categoryTitle = document.createElement("h7");
    categoryTitle.setAttribute("id", "flex1");
    categoryTitle.innerText = category.category;
    categoryTitle.style.color = category.color;
    categoryElement.appendChild(categoryTitle);

    const categoryScore = document.createElement("h8");
    categoryScore.setAttribute("id", "flex2");
    categoryScore.innerHTML =
      category.score + '<span id="scoreTransparent"> / 100</span>';
    categoryElement.appendChild(categoryScore);
    categoryElement.style.backgroundColor = category.backgroundColor;
  }
});
