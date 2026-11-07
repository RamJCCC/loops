// Ramith Weerasinghe Kulatunga, November 06, 2026

"use strict";

const crateCount = Number(prompt("How many crates need to be scanned?"));

let fragileCount = 0;
let loadCount = 0;
let inspectCount = 0;

for (let crate = 1; crate <= crateCount; crate++) {
	const input = prompt(`Enter crate number ${crate} of ${crateCount}:`);

	if (input === null) {
		console.log("Scan cancelled.");
		break;
	}

	const code = Number(input);

	if (code % 5 === 0) {
		console.log(`Crate ${code}: Handle with care`);
		fragileCount++;
	} else if (code % 2 === 0) {
		console.log(`Crate ${code}: Load crate`);
		loadCount++;
	} else {
		console.log(`Crate ${code}: Inspect crate`);
		inspectCount++;
	}
}

console.log(`Total crates scanned: ${fragileCount + loadCount + inspectCount}`);
console.log(`Number of fragile crates: ${fragileCount}`);
console.log(`Number of loaded crates: ${loadCount}`);
console.log(`Number of inspected crates: ${inspectCount}`);
