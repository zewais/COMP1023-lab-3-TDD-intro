//Intializations
const express = require("express");
const server = express();
const port = 3000;

//Middleware
server.set("view engine", "ejs");
server.use(express.static("public"));

//Connections
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

//Routes
server.get("/", (request, response) => {
  response.render("index");
});

server.get("/time", (request, response) => {
  response.render("time", { time: new Date() });
});
