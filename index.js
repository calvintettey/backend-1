const http = require("http");

const handleAllRequests = (requestObject, responseObject) => {
  const url = requestObject.url;
  responseObject.setHeader("content-type", "text/html");
  if (url === "/signup") {
    responseObject.write("<h2>Signup Here</h2>");
    responseObject.end();
  } else if (url === "/login") {
    responseObject.write("<h2>Login Page</h2>");
    responseObject.end();
  } else if (url === "/photos") {
    responseObject.write("<h2>Gallery</h2>");
    responseObject.end();
  } else if (url === "/books") {
    responseObject.write("<h2>Library</h2>");
    responseObject.end();
  } else if (url === "/") {
    responseObject.write("<h1>Home Page</h1>");
    responseObject.end();
  } else {
    responseObject.write("404 page does not exist");
    responseObject.end();
  }
};

const server = http.createServer(handleAllRequests);

server.listen(3000, "127.0.0.1", () => {
  console.log("it's working");
});
