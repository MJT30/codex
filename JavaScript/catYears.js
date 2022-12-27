//This value is my current age
let myAge = 31;
//This value is the cats age
let earlyYears = 2;
//Multiplying early years  * 25 to get a new value
earlyYears *= 25;
//Taking the myAge varrible and adding 2 to it to get a new value
let laterYears = myAge - 2;
laterYears *= 4;
//Adding a varrible that combines 2 pervious ones, earlyYears & laterYears
let myAgeInCatYears = earlyYears + laterYears;
//This varrible is my name
const myName = "Myles";

console.log(
  `My name is ${myName}, I am ${myAge} years old in human years, which is ${myAgeInCatYears} years old in cat years.`
);
