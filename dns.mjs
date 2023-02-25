import dns from "dns";

const address = await dns.lookup("www.chemtradeasia.com");

console.info(address.address);
console.info(address.family);
