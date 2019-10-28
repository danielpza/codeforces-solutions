function main(stdin: string) {
  const lines = stdin.split("\n");
  const [n, k] = lines[0].split(" ").map(v => parseInt(v));
  let count = 0;
  lines[1].split(" ").forEach(v => {
    const amount = Array.from(v).reduce(
      (acc, cur) => (["4", "7"].includes(cur) ? acc + 1 : acc),
      0
    );
    if (amount <= k) count++;
  });
  console.log(count);
}

main(require("fs").readFileSync(0, "utf-8"));
