#!/usr/bin/env nodejs

function main(stdin) {
  const n = parseInt(stdin);
  console.log(n % 2 === 0 && n >= 4 ? "YES" : "NO");
}


main(require("fs").readFileSync(0, "utf-8"));
