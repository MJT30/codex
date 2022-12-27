//<===== Objects =====>
// person["height"] = "6ft"; //Bracket notation. I do not prefer this method.
// person.height = "6ft"; //Dot notation. My prefered method

const myHouse = {};
myHouse.style = "Modern";
myHouse.floors = "Hardwood";
myHouse.price = 900000;
myHouse.isAmazing = true;
(myHouse["numberOfRooms"] = 4),
  (myHouse["numberOfBathRooms"] = 3.5),
  (myHouse["lishaWillLoveIt"] = true);

// <====== Object Constructor Function ======>
//Keeps the code clean and readable
class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
}
var car1 = new Car("Honda", "Civic", 2017);
var car2 = new Car("Toyota", "Rav-4", 2023);
var car3 = new Car("Porshe", "911", 2022);
var car4 = new Car("Rolls Royce", "Phantom", 2024);
car4.price = "$2,000,000 USD";
console.log(car1, car2, car3, car4);

//<====== This is the new way to make constructors ======>//
class Home {
  constructor(rooms, apartment, color, swimmingPool, state, city) {
    this.rooms = rooms;
    this.apartment = apartment;
    this.color = color;
    this.swimmingPool = swimmingPool;
    this.state = state;
    this.city = city;
  }
}

home1 = new Home(1, true, "White", true, "California", "Los Angeles");
home2 = new Home(2, true, "beige", true, true, "Austin", "Texas");
home3 = new Home(3, true, "Redish-Brown", false, "United Kingdom", "London");
home4 = new Home(4, false, "Greenish-Brown", false, "Australia", "Sydney");

console.log(home1, home2, home3, home4);

class Books {
  constructor(title, genre, author) {
    this.title = title;
    this.genre = genre;
    this.author = author;
  }
}

book1 = new Books(
  "Percy Jackson and The Last Olympian",
  "Fantasy",
  "Rick Riodan"
);
book2 = new Books(
  "Kindred",
  "Science Fiction & Slave Narrative",
  "Octavia Buttler"
);
book3 = new Books(
  "The Creative Gene",
  "Autobiography",
  "Hideo Kojima(小島 秀夫)"
);
book4 = new Books(
  "Do Androids Dream of Electric Sheep?",
  "Science Fiction",
  "Phillip K Dick"
);
book5 = new Books(
  "Marvel's Spider-Man: Hostile Takeover",
  "Superhero",
  "David Liss"
);
console.log(book1, book2, book3, book4, book5);
