//Functions are like the verbs of the object world

function morningGreeting(name, task) {
  return `Good morning, ${name}!, thank you for ${task}!`;
}
morningGreeting("Link", "taking care of those monesters in the forest"); //<==== Calling the function
// console.log(
//   morningGreeting("Link", "taking care of those monesters in the forest")
// );
//===========================================================================================================//
function hyruleHero(name, task, title) {
  return `Hail ${name}!, ${task}! & the ${title}!`;
}
hyruleHero(
  "Link",
  "Vanquisher of The Dark Beast Ganon",
  `Wilder of the Master Sword, The Blade of Evil's bane`
);
// console.log(
//   hyruleHero(
//     "Link",
//     "Vanquisher of The Dark Beast Ganon",
//     `Wilder of the Master Sword, The Blade of Evil's bane`
//   )
// );
//===========================================================================================================//

//IFFE: Immdiately Invoked Function Expression
//I will not be using this method.....it's tedious//
var greetFullName = (function (firstName, lastName) {
  return `Hello` + firstName + `` + lastName + "!";
})();

//===========================================================================================================//
//Arrow Function (my prefered method)

// console.log(masterSword());

//Scope is where a variable is defined.
//JavaScript has two scpopes: global and local.
//Variables declared outside of a function are global variables.
//Variables declared inside a function definition are loacal variables.

//////////////////////////////////////////////Nested Functions//////////////////////////////////////////////////////////
roadTrip = () => {
  let gallons = 12;
  let mpg = 34;

  sadBoi = () => {
    return gallons * mpg;
  };
  return sadBoi();
};
roadTrip();
console.log(roadTrip());
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
iAmSad = () => {
  let mood = "sad";
  let isSad = true;

  checkEmotions = () => {
    return `Is Myles ${mood}?, ${isSad}`;
  };
  return checkEmotions();
};
console.log(iAmSad());
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
feelBetterLisha = () => {
  const isLishaSick = true;
  const willHerManTakeCareOfHer = true;

  mylesWillHelp = () => {
    return `Good Morning is Lisha sick?, ${isLishaSick}. Okay and will Myles take care of her?, ${willHerManTakeCareOfHer}`;
  };
  return mylesWillHelp();
};
console.log(feelBetterLisha());
