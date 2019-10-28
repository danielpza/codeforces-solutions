const readline = (() => {
  const lines: string[] = require("fs")
    .readFileSync(0, "utf-8")
    .split("\n");
  let i = 0;
  return () => lines[i++];
})();

const [n, maxSellouts] = readline()
  .split(" ")
  .map(v => parseInt(v));

const arr: { gain: number; doubleGain: number }[] = [];

for (let i = 0; i < n; i++) {
  const line = readline().split(" ");
  const products = parseInt(line[0]);
  const clients = parseInt(line[1]);
  arr.push({
    gain: Math.min(products, clients),
    doubleGain: Math.min(products * 2, clients)
  });
}

const sorted = arr.sort(
  (a, b) => b.doubleGain - b.gain - (a.doubleGain - a.gain)
);

const value = sorted.reduce(
  (acc, { gain, doubleGain }, i) => acc + (i < maxSellouts ? doubleGain : gain),
  0
);

console.log(value);
