function main(stdin) {
  const [n, m, a] = stdin.split(" ").map(v => parseInt(v));
  console.log(Math.ceil(n / a) * Math.ceil(m / a));
}

main(
  require("fs")
    .readFileSync(0, "utf-8")
    .trim()
);
