//Functions are like the verbs of the object world

function morningGreeting(name, task) {
  return `Good morning, ${name}!, thank you for ${task}!`;
}
morningGreeting("Link", "taking care of those monesters in the forest"); //<==== Calling the function

console.log(
  morningGreeting("Link", "taking care of those monesters in the forest")
);

function hyruleHero(name, task, title) {
  return `Hail ${name}!, ${task}! & the ${title}!`;
}

hyruleHero(
  "Link",
  "Vanquisher of The Dark Beast Ganon",
  `Wilder of the Master Sword, The Blade of Evil's bane`
);

console.log(
  hyruleHero(
    "Link",
    "Vanquisher of The Dark Beast Ganon",
    `Wilder of the Master Sword, The Blade of Evil's bane`
  )
);
