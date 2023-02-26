import https from "https";

const endpoint = "https://www.chemtradeasia.com.eg/en/stearyl-alcohol";

const request = https.request(
  endpoint,
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  },
  (response) => {
    response.addListener("data", (data) => {
      console.info(`Receive data : ${data.toString()}`);
    });
  }
);

const body = JSON.stringify({
  firstName: "Thomas",
  lastName: "Ardiansah",
});

request.write(body);
request.end();
