const buffer = Buffer.from("Thomas", "utf-8");

console.info(buffer.toString("base64"));
console.info(buffer.toString("hex"));

const buffer2 = Buffer.from("54686f6d6173", "base64url");

console.info(buffer2.toString("utf-8"));
