//This is the staring kelvin tempeture
let kelvinTemp = 301;

//This varrible takes the kelvinTemp and subtracts to find the celsiusTemp
let celsiusTemp = kelvinTemp - 273.15;

//This converts celsius to fahrenheit....all thought I an not 100% certian how the math works
let fahrenheitTemp = celsiusTemp * (9 / 5) + 32;
// console.log(Math.floor(fahrenheitTemp)); //<======= A method that rounds the number down
console.log(
  `The temperature is`,
  Math.floor(fahrenheitTemp),
  "degrees Fahrenehit"
);
