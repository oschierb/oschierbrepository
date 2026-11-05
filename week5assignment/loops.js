// Owen Schierbeck, 11/08/26
"use strict";

const totalCrates = 20;

for (let crate = 1; crate <= totalCrates; crate++) {
  if (crate % 5 === 0) {
    console.log("Crate " + crate + ": Handle with care");
  } else if (crate % 2 === 0) {
    console.log("Crate " + crate + ": Load crate");
  } else {
    console.log("Crate " + crate + ": Inspect crate");
  }
}

console.log("Total crates scanned: " + totalCrates);
