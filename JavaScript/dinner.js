function dinnerArray(food) {
  food = food.toUpperCase();
  if (
    food === "Ramen" ||
    "Pizza" ||
    "Tacos" ||
    "BBQ" ||
    "Soul Food" ||
    "Salmon"
  ) {
  }
  return "You Have food at home";
}

function getFood() {
  var usersFood = prompt("What would you like for dinner?");
  var dinner = dinnerArray(usersFood);
  console.log(dinner);
}
getFood();
