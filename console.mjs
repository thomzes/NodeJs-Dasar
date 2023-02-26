import { Console } from "console";
import fs from "fs";

const file = fs.createWriteStream("application.log");

const log = new Console({
  stdout: file,
  stdirr: file,
});

log.info("Hello world!");
log.error("Hello world");

const person = {
  firstName: "Thomas",
  lastName: "Ardiansah",
};

log.table(person);
