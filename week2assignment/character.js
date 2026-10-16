"use strict";

alert(`Welcome to the Adventure Character Creator!
My name is Owen Schierbeck, and your story takes place on a space station.`);

const charName = prompt(`What is your character's name?`, "Wanderer");

const petType = prompt(`What type of pet or companion does ${charName} have?`);

const superpower = prompt(`What superpower does ${charName} have?`);

const trainingYearsText = prompt(`How many years has ${charName} been training?`);
const trainingYears = Number(trainingYearsText);
console.log(trainingYearsText, typeof trainingYearsText);
console.log(trainingYears, typeof trainingYears);

const powerLevel = trainingYears * 10;

const likesFighting = confirm(`Does ${charName} like fighting monsters?
Click OK for YES
Click Cancel for NO`);
console.log(likesFighting, typeof likesFighting);

alert(`Gathering magic for ${charName}... almost ready!`);

alert(`====================================
        ADVENTURE CHARACTER
====================================

Name: ${charName}
Pet: ${petType}
Superpower: ${superpower}
Power Level: ${powerLevel}
Monster fighter? ${likesFighting ? "Yes" : "No"}

On the space station called "Starhaven", ${charName} travels with a loyal ${petType}, using the incredible power of ${superpower} to protect everyone on board.

====================================`);
