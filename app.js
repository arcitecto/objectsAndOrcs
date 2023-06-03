// // Arrays within Objects
// const adventurer = {
//   name: "Timothy",
//   hitpoints: 10,
//   belongings: ["sword", "potion", "Tums"],
//   companion: {
//     name: "Velma",
//     type: "bat",
//     companion: {
//       name: "Tim",
//       type: "Parasite",
//       belongings: ["SCUBA tank", "Rogan josh", "health insurance"],
//     },
//   },
// };

// console.log(adventurer.belongings);
// console.log(adventurer.belongings[0]);

// // Iterate Over an Array within an Object
// for (i = 0; i < adventurer.belongings.length; i++) {
//   console.log(i);
// }

// // Object within an Object
// // Access the companion object:
// console.log(adventurer.companion);
// // Access the companion's name:
// console.log(adventurer.companion.name);
// // Access the companion's type:
// console.log(adventurer.companion.type);

// // Object within an Object within an Object...
// // What would you write to console.log Tim's type?
// console.log(adventurer.companion.companion.type);

// // Array within an Object within an Object within an Object.....
// // What would your write to console.log "health insurance"?
// console.log(adventurer.companion.companion.belongings[2]);

// // An Array of Objects
// // Example:
// const movies = [
//   { title: "Tokyo Story" },
//   { title: "Paul Blart: Mall Cop" },
//   { title: "L'Avventura" },
// ];
// // Reference object in array as an index
// console.log(movies[0]);
// // Reference property by asking for index first then property
// console.log(movies[0].title);
// // Loop over array and print all titles
// for (i = 0; i < movies.length; i++) {
//   console.log(movies[i].title);
// }

// // Combining Objects, Arrays, and Functions
// // Create a property for an object that is an array
// const foo = {
//   someArray: [1, 2, 3],
// };
// foo.someArray[0]; // 1
// // Create a property for an object that is an object
// const foo1 = {
//   someObject: {
//     someProperty: "oh hai!",
//   },
// };
// foo1.someObject.someProperty; // oh hai!
// // Create a property for an object that is a function (method):
// const foo2 = {
//   someMethod: () => {
//     console.log("oh hai");
//   },
// };

// foo2.someMethod(); // logs 'oh hai!'
// // Store an object in an array
// const foo3 = [{ someProperty: "weee" }, 2, 3];

// console.log(foo3[0].someProperty);
// // Store an array in an array
// const foo4 = [
//   ["0,0", "0,1", "0,2"],
//   ["1,0", "1,1", "1,2"],
//   ["2,0", "2,1", "2,2"],
// ];

// foo4[1][2]; //1,2
// // Store a function in an array
// const foo5 = [
//   1,
//   "hi",
//   () => {
//     console.log("fun");
//   },
// ];

// foo5[2]();

// // Adding Classes
// // Using a function to (create, upgrade, add, etc...) players for example (Using classes is better and more efficient)
// const createEnemy = (nameIs, healthIs, powerIs, staminaIs) => {
//   const newEnemy = {
//     name: nameIs,
//     health: healthIs,
//     power: powerIs,
//     stamina: staminaIs,
//   };
//   return newEnemy;
// };

// const createPlayer = (nameIs, healthIs, powerIs, staminaIs) => {
//   const newPlayer = {
//     name: nameIs,
//     health: healthIs,
//     power: powerIs,
//     stamina: staminaIs,
//   };
//   return newPlayer;
// };

// // Character Class
// // Capitalize first letter of variable so you know it's a class
// class Character {
//   // going on an adventure
// }
// // Instantiate (create) new characters using this class by adding the "new" keyword before calling the class name, like a function
// const me = new Character();
// const you = new Character();

// console.log(me);
// console.log(you);
// console.log(typeof me);
// console.log(typeof you);

// // Adding Methods to Character
// class Character {
//   greet() {
//     console.log("Hi!");
//   }
// }

// const me1 = new Character();
// const you1 = new Character();

// me1.greet();
// you1.greet();
// // These methods can take parameters
// class Character {
//   greet(otherCharacter) {
//     console.log("Hi " + otherCharacter + "!");
//   }
// }
// const me = new Character();
// const you = new Character();
// me.greet("you");
// you.greet("me");
// // If there's multiple methods DON'T put commas between them
// class Character {
//   greet(otherCharacter) {
//     console.log("Hi " + otherCharacter + "!");
//   }
//   smite() {
//     console.log("I smite thee you vile person!");
//   }
// }

// const me = new Character();
// const you = new Character();
// me.greet("bob");
// me.smite();
// you.greet("bob");
// you.smite();

// // Setting Properties
// // No properties
// class Character {
//   greet(otherCharacter) {
//     console.log("Hi " + otherCharacter + "!");
//   }
//   smite() {
//     console.log("I smite thee you vile person!");
//   }
// }

// const me = new Character();
// const you = new Character();
// console.log(me);
// console.log(you);
// // Add properties with constuctor function
// class Character {
//   constructor() {
//     this.legs = 2;
//     this.arms = 2;
//     this.eyes = "hazel";
//     this.hair = "gray";
//   }
//   greet(otherCharacter) {
//     console.log("Hi " + otherCharacter + "!");
//   }
//   smite() {
//     console.log("I smite thee you vile person!");
//   }
// }
// const me = new Character();
// console.log(me);

// // Custom Constructors
// class Character {
//   constructor(name, age, eyes, hair) {
//     this.legs = 2;
//     this.arms = 2;
//     this.name = name;
//     this.age = age;
//     this.eyes = eyes;
//     this.hair = hair;
//   }
//   greet(otherCharacter) {
//     console.log("Hi " + otherCharacter + "!");
//   }
//   smite() {
//     console.log("I smite thee you vile person!");
//   }
// }

// const me = new Character(
//   "Cathy the Miraculous",
//   29,
//   "brown",
//   "locs of dark brown"
// );
// console.log(me);

// // Creating Default Values
// class Character {
//   constructor(name, age, eyes, hair, lovesCats = false, lovesDogs) {
//     this.legs = 2;
//     this.arms = 2;
//     this.name = name;
//     this.age = age;
//     this.eyes = eyes;
//     this.hair = hair;
//     this.lovesCats = lovesCats;
//     this.lovesDogs = lovesDogs || false;
//   }
//   greet(otherCharacter) {
//     console.log("Hi " + otherCharacter + "!");
//   }
//   smite() {
//     console.log("I smite thee you vile person!");
//   }
// }
// const you = new Character(
//   "Cathy the Miraculous",
//   29,
//   "brown",
//   "locs of dark brown",
//   true,
//   true
// );
// const me = new Character("Wendel the Wavy", 32, "brown", "wavy blonde");
// console.log(me);
// console.log(you);

// // Class Methods
// class Character {
//   constructor(name, age, eyes, hair, lovesCats = true, lovesDogs) {
//     this.legs = 2;
//     this.arms = 2;
//     this.name = name;
//     this.age = age;
//     this.eyes = eyes;
//     this.hair = hair;
//     this.lovesCats = lovesCats;
//     this.lovesDogs = lovesDogs || true;
//   }
//   greet(otherCharacter) {
//     console.log("Hi " + otherCharacter + "!");
//   }
//   setHair(hairColor) {
//     this.hair = hairColor;         //<-------
//   }
//   smite() {
//     console.log("I smite thee you vile person!");
//   }
// }

// const me = new Character("Wendel the Wavy", 32, "brown", "wavy blonde");
// console.log(me);
// me.setHair("red");                //<-------
// console.log(me);

// Object interactions
// We can pass an object to another object and have them interact
class Character {
  constructor(name, age, eyes, hair, lovesCats = false, lovesDogs) {
    this.legs = 2;
    this.arms = 2;
    this.name = name;
    this.age = age;
    this.eyes = eyes;
    this.hair = hair;
    this.lovesCats = lovesCats;
    this.lovesDogs = lovesDogs || false;
  }
  greet(otherCharacter) {
    console.log("Hi " + otherCharacter + "!");
  }
  classyGreeting(otherClassyCharacter) {
    console.log("Greetings " + otherClassyCharacter.name + "!");
  }
  setHair(hairColor) {
    this.hair = hairColor;
  }
  smite() {
    console.log("I smite thee you vile person!");
  }
}
const you = new Character(
  "Cathy the Miraculous",
  29,
  "brown",
  "locs of dark brown",
  true,
  true
);
const me = new Character("Wendel the Wavy", 32, "brown", "wavy blonde");

me.classyGreeting(you);
you.classyGreeting(me);

// // Inheritance
// // Use 'extend' to create a new character based on parent above
// class Hobbit extends Character {
//   steal() {
//     console.log("Let's get away!");
//   }
// }

// const frodo = new Hobbit("Frodo", 30, "brown", "black");
// console.log(frodo);
// frodo.smite();
// frodo.steal();
// // Override previous functionality
// class Hobbit extends Character {
//   steal() {
//     console.log("Let's get away!");
//   }
//   greet(otherCharacter) {
//     console.log(`Hello ${otherCharacter}.`);
//   }
// }

// const frodo = new Hobbit("Frodo", 30, "brown", "black");
// frodo.greet("Bob");
// // Reference the parent class's methods and extend its functionality
// class Hobbit extends Character {
//   steal() {
//     console.log("Let's get away!");
//   }
//   greet(otherCharacter) {
//     console.log(`Hello ${otherCharacter}.`);
//   }
//   smite() {
//     super.smite();
//     this.steal();
//   }
// }

// const frodo = new Hobbit("Frodo", 30, "brown", "black");
// frodo.smite();
// // Most useful on a constuctor
// class Hobbit extends Character {
//   constructor(name, age, eyes, hair) {
//     super(name, age, eyes, hair);
//     this.skills = ["thievery", "speed", "willpower"];
//   }
//   steal() {
//     console.log("Let's get away!");
//   }
//   greet(otherCharacter) {
//     console.log(`Hello ${otherCharacter}.`);
//   }
//   smite() {
//     super.smite();
//     this.steal();
//   }
// }

// const frodo = new Hobbit("Frodo", 30, "brown", "black");
// console.log(frodo);

// // Create a factory
// // Magical Tome
// class Tome {
//   constructor(maker, serialNum, spellType) {
//     this.maker = maker;
//     this.spellType = spellType;
//     this.serialNum = serialNum;
//   }
//   cast() {
//     console.log("Casting a spell!");
//   }
// }

// const fireTome = new Tome("Merlin", "Fire", 1);
// console.log(fireTome);
// // Make a factory that makes tomes
// class Factory {
//   constructor(maker) {
//     this.maker = maker;
//     this.tomes = [];
//   }
//   generateTome(spellType) {
//     const newTome = new Tome(this.maker, spellType, this.tomes.length);
//     this.tomes.push(newTome);
//   }
//   findTome(index) {
//     return this.tomes[index];
//   }
// }

// const merlin = new Factory("Merlin");
// merlin.generateTome("Fire");
// merlin.generateTome("Water");
// merlin.generateTome("Earth");
// merlin.generateTome("Air");
// console.log(merlin);
// console.log(merlin.findTome(0));
// // Now we can easily create another new factory that produces its own tomes
// const gandalf = new Factory("Gandalf");
// gandalf.generateTome("Light");
// gandalf.generateTome("Dark");
// console.log(gandalf);
// console.log(gandalf.findTome(0));

// // Static Properties
// // Sometimes you want to define properties that pertain to the class as a whole, not the instance. This allows us to limit, somewhat, what the user of a class can do.
// class Character {
//   static eyeColors() {
//     return ["blue", "green", "brown"];
//   }
//   // rest of class definition here...
// }
// // more code...
// const superman = new Character(
//   "Clark Kent",
//   30,
//   Person.eyeColors()[0],
//   "black"
// );
