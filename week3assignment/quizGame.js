"use strict";

// Owen Schierbeck, 10/26/26

/* PLANNING / PSEUDOCODE

1. Initialize score = 0

2. Question 1: What is 5 + 3?
   - Variable: sumAnswer
   - Correct answer: 8
   - Validate: convert with Number(), then check with ===

3. Question 2: What is 10 - 4?
   - Variable: differenceAnswer
   - Correct answer: 6

4. Question 3: What is 4 x 3?
   - Variable: productAnswer
   - Correct answer: 12

5. Question 4: What is 20 / 5?
   - Variable: quotientAnswer
   - Correct answer: 4

6. Question 5: What is my favorite color?
   - Variable: favoriteColor
   - Correct answer: orange
   - Validate: check for Cancel (null), then trim() and toLowerCase(),
     then check for an empty box, then compare with ===

7. Math: percentage = (score / 5) * 100

8. Final feedback logic (if / else if / else):
   - 5 out of 5 = perfect message
   - 3 or 4 = good job message
   - anything lower = keep practicing message
   - If score is exactly 3, also console.log a special message
*/

let score = 0;

// Question 1
const sumAnswer = Number(prompt("Question 1: What is 5 + 3?"));
if (sumAnswer === 8) {
  alert("Correct!");
  score++;
} else {
  alert("Incorrect. The answer was 8.");
}

// Question 2
const differenceAnswer = Number(prompt("Question 2: What is 10 - 4?"));
if (differenceAnswer === 6) {
  alert("Correct!");
  score++;
} else {
  alert("Incorrect. The answer was 6.");
}

// Question 3
const productAnswer = Number(prompt("Question 3: What is 4 x 3?"));
if (productAnswer === 12) {
  alert("Correct!");
  score++;
} else {
  alert("Incorrect. The answer was 12.");
}

// Question 4
const quotientAnswer = Number(prompt("Question 4: What is 20 / 5?"));
if (quotientAnswer === 4) {
  alert("Correct!");
  score++;
} else {
  alert("Incorrect. The answer was 4.");
}

// Question 5
const favoriteColor = prompt("Question 5: What is my favorite color?");
if (favoriteColor === null) {
  alert("You clicked Cancel, so that question counts as incorrect.");
} else {
  const cleanColor = favoriteColor.trim().toLowerCase();
  if (cleanColor === "") {
    alert("You left the box empty, so that question counts as incorrect.");
  } else if (cleanColor === "orange") {
    alert("Correct!");
    score++;
  } else {
    alert("Incorrect. The answer was orange.");
  }
}

// Calculate percentage
const percentage = (score / 5) * 100;

// Special message for exactly 3 out of 5
if (score === 3) {
  console.log("You got exactly 3 out of 5. Right in the middle!");
}

// Final feedback
if (score === 5) {
  alert("Perfect score! Amazing job!");
} else if (score >= 3) {
  alert("Good job! You got most of them right.");
} else {
  alert("Keep practicing, you'll get it next time!");
}

// Final summary
alert(`Final score: ${score} out of 5 (${percentage}%)`);
