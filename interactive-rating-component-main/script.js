const ratingState = document.querySelector(".ratingState");
const thankYouState = document.querySelector(".thankYouState");
const rating1 = document.getElementById("rating1");
const rating2 = document.getElementById("rating2");
const rating3 = document.getElementById("rating3");
const rating4 = document.getElementById("rating4");
const rating5 = document.getElementById("rating5");
const ratings = document.querySelector(".ratings");
const button = document.querySelector("button");

thankYouState.style.display = "block";
ratingState.style.display = "none";

const allRatings = [rating1, rating2, rating3, rating4, rating5];

function resetColors() {
  allRatings.forEach((rating) => {
    rating.classList.remove("selected");
    rating.style.backgroundColor = "hsla(216, 12%, 54%, 0.1)";
    rating.style.color = "hsl(216, 12%, 54%)";
  });
}

allRatings.forEach((rating) => {
  rating.addEventListener("mouseenter", () => {
    if (!rating.classList.contains("selected")) {
      rating.style.backgroundColor = "hsl(25, 97%, 53%)";
      rating.style.color = "hsla(0, 0%, 100%, 0.8)";
    }
  });

  rating.addEventListener("mouseleave", () => {
    if (!rating.classList.contains("selected")) {
      rating.style.backgroundColor = "hsla(216, 12%, 54%, 0.1)";
      rating.style.color = "hsl(216, 12%, 54%)";
    }
  });

  rating.addEventListener("click", () => {
    resetColors();

    rating.classList.add("selected");
    rating.style.backgroundColor = "hsl(217, 12%, 63%)";
    rating.style.color = "hsl(0, 0%, 100%)";
  });
});

button.addEventListener("click", () => {
  thankYouState.style.display = "block";
  ratingState.style.display = "none";
});
