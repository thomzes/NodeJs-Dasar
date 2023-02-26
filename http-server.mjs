import http from "http";

const server = http.createServer((request, response) => {
  console.info(request.method);
  console.info(request.url);

  if (request.method === "POST") {
    request.addListener("data", (data) => {
      response.setHeader("Content-Type", "application/json");
      response.write(data);
      response.end();
    });
  } else {
    if (request.url === "/tom") {
      response.write("Hello Tom!");
    } else {
      response.write("Hello Human!");
    }
  }

  response.write("Hello HTTP Server");
  response.end();
});

server.listen(3000);
