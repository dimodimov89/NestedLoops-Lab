function solve(input) {
  let i = 0;
  let line = input[i++];

  while (line !== "End") {
    let destination = line;

    let price = Number(input[i++]);
    let saved = 0;

    while (saved < price) {
      saved += Number(input[i++]);
    }
    console.log(`Going to ${destination}!`);

    line = input[i++];
  }
}
solve([
  "Greece",
  "1000",
  "200",
  "200",
  "300",
  "100",
  "150",
  "240",
  "Spain",
  "1200",
  "300",
  "500",
  "193",
  "423",
  "End",
]);
