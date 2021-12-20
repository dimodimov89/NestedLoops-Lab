function solve(input) {
  let i = 0;
  let movie = input[i++];
  let student = 0;
  let standard = 0;
  let kid = 0;

  while (movie !== "Finish") {
    let freeSeats = Number(input[i++]);
    let current = input[i++];
    let tickets = 0;
    while (current !== "End") {
      tickets++;
      if (current === "student") {
        student++;
      } else if (current === "standard") {
        standard++;
      } else if (current === "kid") {
        kid++;
      }
      if (tickets == freeSeats) {
        break;
      }
      current = input[i++];
    }
    console.log(
      `${movie} - ${((100 / freeSeats) * tickets).toFixed(2)}% full.`
    );
    if (current == "Finish") {
      break;
    }
    movie = input[i++];
  }
  let total = student + standard + kid;
  console.log(`Total tickets: ${total}`);
  console.log(`${((100 / total) * student).toFixed(2)}% student tickets.`);
  console.log(`${((100 / total) * standard).toFixed(2)}% standard tickets.`);
  console.log(`${((100 / total) * kid).toFixed(2)}% kids tickets.`);
}
solve([
  "Taxi",
  "10",
  "standard",
  "kid",
  "student",
  "student",
  "standard",
  "standard",
  "End",
  "Scary Movie",
  "6",
  "student",
  "student",
  "student",
  "student",
  "student",
  "student",
  "Finish",
]);
solve([
  "The Matrix",
  "20",
  "student",
  "standard",
  "kid",
  "kid",
  "student",
  "student",
  "standard",
  "student",
  "End",
  "The Green Mile",
  "17",
  "student",
  "standard",
  "standard",
  "student",
  "standard",
  "student",
  "End",
  "Amadeus",
  "3",
  "standard",
  "standard",
  "standard",
  "Finish",
]);
