function main(stdin) {
  const lines = stdin.split("\n");
  lines.slice(1).forEach(v => {
    console.log(360 % (180 - parseInt(v)) === 0 ? "YES" : "NO");
  });
}

main(
  require("fs")
    .readFileSync(0, "utf-8")
    .trim()
);
