var categories = [...document.querySelectorAll(".category")];


function lessons() {
  alert("lessons");
}

function exercises() {
  alert("exercises");
}


menu = {
  "lessons": lessons,
  "exercises": exercises
}

categories.forEach(category => {
  category.addEventListener("click", () => {
    menu[category.classList.item(1)]();
  });
});
