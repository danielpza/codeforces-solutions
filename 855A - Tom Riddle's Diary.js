function main(stdin) {
  const lines = stdin.split("\n");
  const before = new Set();
  lines.slice(1, 1 + parseInt(lines[0])).forEach(v => {
    console.log(before.has(v) ? "YES" : "NO");
    before.add(v);
  });
}

main(require("fs").readFileSync(0, "utf-8"));
