import util from "util";

const firstName = "Thomas";
const lastName = "Ardiansah";

console.info(util.format("nama : %s %s", firstName, lastName));

const person = {
  firstName: "Thomas",
  lastName: "Ardiansah",
};

console.info(util.format("Nama anda adalah : %j", person));
