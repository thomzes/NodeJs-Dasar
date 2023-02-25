import process from "process";
import ReadLine from "readline";

const input = ReadLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});

input.question("Siapa nama anda? ", (nama) => {
  console.info(`Hello ${nama}`);
  input.close();
});
