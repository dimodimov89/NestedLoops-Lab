function solve(input) {
  let start = Number(input[0]);
  let end = Number(input[1]);
  let n = Number(input[2]);
  let combination = 0;
  let isComb = false;

  for (let a = start; a <= end; a++) {
    for (let b = start; b <= end; b++) {
      combination++;
      if (a + b === n) {
        console.log(`Combination N:${combination} (${a} + ${b} = ${n})`);
        isComb = true;
        break;
      }
    }
    if (isComb) {
      break;
    }
  }
  if (!isComb) {
    console.log(`${combination} combinations - neither equals ${n}`);
  }
}
solve(["23", "24", "20"]);
