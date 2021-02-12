// const http = require("http");
const express = require("express");

const handleAllRequests = (requestObject, responseObject) => {
  const url = requestObject.url;
  responseObject.setHeader("content-type", "text/html");
  if (url === "/signup") {
    responseObject.send("<h2>Signup Here</h2>");
  } else if (url === "/login") {
    responseObject.send("<h2>Login Page</h2>");
  } else if (url === "/photos") {
    responseObject.send("<h2>Gallery</h2>");
  } else if (url === "/books") {
    responseObject.send("<h2>Library</h2>");
  } else if (url === "/") {
    responseObject.send("<h1>Home Page</h1>");
  } else {
    responseObject.send("404 page does not exist");
  }
};

const handleGetSignup = (req, res) => {
  res.send("<h1>This is Sign Up Get</h1>");
};

const handlePutSignup = (req, res) => {
  res.send("<h1>This is Sign Up Put</h1>");
};

const handleDeleteSignup = (req, res) => {
  res.send("<h1>This is Sign Up Delete</h1>");
};

const handlePostSignup = (req, res) => {
  res.send("<h1>This is Sign Up Post</h1>");
};

// const server = http.createServer(handleAllRequests);
const server = express();

// server.use(handleAllRequests);

server.get("/signup", handleGetSignup);
server.put("/signup", handlePutSignup);
server.delete("/signup", handleDeleteSignup);
server.post("/signup", handlePostSignup);

server.listen(3000, "127.0.0.1", () => {
  console.log("it's working");
});
