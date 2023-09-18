import { createServer } from "node:http";

export const server = createServer((request, response) => {
  if (request.url === "/") {
    response.statusCode = 200;
    response.end("Hello Nadja!!!");
  } else if (request.url === "/stranger") {
    response.statusCode = 200;
    response.end("Hello stranger!!!");
  } else {
    response.statusCode = 404;
    response.end("You are on the wrong path :(");
    //     response.statusCode = 200;
    //   response.end("Hello, Nadja!");
  }
});
