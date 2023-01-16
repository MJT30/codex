let randomBodyParts = ["Head", "feet", "nose", "hands", "neck"];
let randomAdjectives = ["big", "ashy", "stinky", "long", "ugly"];
let randomWords = ["lit", "force", "boy", "dog", "cat"];

let randomBodyPart = randomBodyParts[Math.floor(Math.random() * 3)];

let randomAdjective = randomAdjectives[Math.floor(Math.random() * 3)];

let randomWord = randomWords[Math.floor(Math.random() * 3)];

console.log(
  `Your ${randomBodyPart} is like a ${randomAdjective} ${randomWord}`
);
