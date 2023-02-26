import fs from "fs";

const writer = fs.createWriteStream("target.log");
writer.write("Thomas");
writer.write("Ardiansah");
writer.write("Khan");
writer.end();

const reader = fs.createReadStream("target.log");
reader.addListener("data", (data) => {
  console.info(data.toString());
  //   reader.close();
});
