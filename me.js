// Name: Owen Schierbeck
// Date: 10/11/26

// ===== Data Planning =====

// Variable: myName
// Data type: string
// Explanation: A name is text, so it should be a string.

// Variable: favoriteColor
// Data type: string
// Explanation: Colors are described with words, so a string works best.

// Variable: favoriteFood
// Data type: string
// Explanation: Food names are text, so this is a string.

// Variable: favoriteAnimal
// Data type: string
// Explanation: An animal name is just text, so it's a string.

// Variable: favoriteSeason
// Data type: string
// Explanation: Seasons are words like "autumn", so a string makes sense.

// Variable: myAge
// Data type: number
// Explanation: Age is a numeric value that could be used in math (like next year's age), so it should be a number.

// Variable: isStudent
// Data type: boolean
// Explanation: I'm a student or I'm not, so true/false is the right fit.

// ===== Variables =====

let myName = "Owen Schierbeck";
let favoriteColor = "orange";
let favoriteFood = "cheeseburger";
let favoriteAnimal = "dog";
let favoriteSeason = "autumn";
let myAge = 19;
let isStudent = true;

// ===== Data Type Check =====
// Which variable could easily have the wrong data type?
// myAge could easily get the wrong type, since someone might write it as "18" (a string) instead of 18 (a number).
//
// What mistake might someone make with it?
// If age is a string, math can act weird. For example, "18" + 1 gives "181" instead of 19.

// ===== Display =====

// Method 1: concatenation
console.log("Hi, my name is " + myName + " and I am " + myAge + " years old.");

// Method 2: template literal
console.log(`My favorite season is ${favoriteSeason}, which is perfect for eating a ${favoriteFood} while hanging out with my ${favoriteAnimal} in my favorite color, ${favoriteColor}. Student status: ${isStudent}.`);

// ===== Reflection Questions =====

// 1. Which data type was easiest to choose? Why?
// Boolean was the easiest because isStudent can only be true or false, so there was no other option that made sense.

// 2. Which variable was hardest to decide a data type for?
// Age was the hardest, since it's a number but it could also be typed as text. I went with number so I can do math with it.

// 3. What happens if a number is stored as a string in JavaScript?
// It gets treated like text. Using + will stick the values together instead of adding them, so "5" + 1 becomes "51" instead of 6.

// 4. Why is it helpful to plan data types before coding?
// Planning ahead helps avoid bugs and keeps the code consistent.
