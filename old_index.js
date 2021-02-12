const http = require("http");

const handleAllRequests = (requestObject, responseObject) => {
  const url = requestObject.url;
  responseObject.setHeader("content-type", "text/html");
  if (url === "/signup") {
    responseObject.send("<h2>Signup Here</h2>");
    responseObject.end();
  } else if (url === "/login") {
    responseObject.send("<h2>Login Page</h2>");
    responseObject.end();
  } else if (url === "/photos") {
    responseObject.send("<h2>Gallery</h2>");
    responseObject.end();
  } else if (url === "/books") {
    responseObject.send("<h2>Library</h2>");
    responseObject.end();
  } else if (url === "/") {
    responseObject.send("<h1>Home Page</h1>");
    responseObject.end();
  } else {
    responseObject.send("404 page does not exist");
    responseObject.end();
  }
};

const server = http.createServer(handleAllRequests);

server.listen(3000, "127.0.0.1", () => {
  console.log("it's working");
});
