// Owen Schierbeck, 11/16/26
"use strict";

let username = prompt("Enter your name");

while (username !== null && username.trim() === "") {
  username = prompt("You left the box empty. Enter your name");
}

if (username !== null) {
  CalcGasAvg(username.trim());
} else {
  alert("You cancelled the name prompt.");
}

function CalcGasAvg(name) {
  let count = 0;
  let total = 0;
  let average = 0;
  let gasAmount = parseFloat(prompt("Enter your first week's gas total. Enter -1 when you are done."));

  while (gasAmount !== -1) {
    if (isNaN(gasAmount)) {
      gasAmount = parseFloat(prompt("That is not a number. Enter your gas total again. Enter -1 when you are done."));
    } else {
      count++;
      total += gasAmount;
      gasAmount = parseFloat(prompt("Enter your next week's gas total. Enter -1 when you are done."));
    }
  }

  if (count > 0) {
    average = total / count;
  } else {
    average = 0;
  }

  if (count === 0) {
    alert("You did not enter any gas totals.");
  } else if (count === 1) {
    alert(`${name}'s gas total is $${average.toFixed(2)}.`);
  } else {
    alert(`${name}'s average weekly gas bill is $${average.toFixed(2)}.`);
  }
  alert(`You entered ${count} gas totals.`);
}
