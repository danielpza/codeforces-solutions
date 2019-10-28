const readline = (() => {
  const lines: string[] = require("fs")
    .readFileSync(0, "utf-8")
    .split("\n");
  let i = 0;
  return () => lines[i++];
})();

const initialErrors = parseInt(readline());

const first = readline()
  .split(" ")
  .map(v => parseInt(v))
  .sort();
const second = readline()
  .split(" ")
  .map(v => parseInt(v))
  .sort();
const third = readline()
  .split(" ")
  .map(v => parseInt(v))
  .sort();

let hasFirst = false;
let hasSecond = false;
let firstError = 0;
let secondError = 0;

for (let i = 0; i < initialErrors && !(hasFirst && hasSecond); i++) {
  if (!hasFirst) {
    if (first[i] !== second[i]) {
      hasFirst = true;
      firstError = first[i];
    }
  }
  if (!hasSecond) {
    if (second[i] !== third[i]) {
      hasSecond = true;
      secondError = second[i];
    }
  }
}

console.log(firstError);
console.log(secondError);
