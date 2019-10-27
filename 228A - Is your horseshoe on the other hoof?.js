function main(stdin) {
  const horseshoes = stdin.split(" ").map(v => parseInt(v));
  console.log(
    horseshoes
      .sort()
      .reduce((ac, val, i, arr) => (arr[i - 1] === val ? ac + 1 : ac), 0)
  );
}

main(
  require("fs")
    .readFileSync(0, "utf-8")
    .trim()
);
