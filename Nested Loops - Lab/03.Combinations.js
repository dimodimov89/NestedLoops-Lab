function solve(input) {
  let counter = 0;
  let n = Number(input[0]);

  for (a = 0; a <= n; a++) {
    for (b = 0; b <= n; b++) {
      for (c = 0; c <= n; c++) {
        if (a + b + c === n) {
          counter++;
        }
      }
    }
  }
  console.log(counter);
}
solve(["5"]);
