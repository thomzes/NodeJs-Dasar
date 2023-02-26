import { Url } from "url";

const pzn = new URL("https://www.programmerzamannow.com/belajar?kelas=nodejs");

console.info(pzn.toString());
console.info(pzn.protocol);
console.info(pzn.host);
console.info(pzn.pathname);
console.info(pzn.searchParams);

// change data url
pzn.host = "www.thomasardiansah.com";
const searchParam = pzn.searchParams;
searchParam.append("status", "premium");

console.info(pzn.toString());
