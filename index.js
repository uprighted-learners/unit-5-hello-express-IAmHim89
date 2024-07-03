//variable for importing express
const express = require("express");
// variable that holds the invocation of express
const app = express();
//port #4000
const port = 4000;

//listen method being called on app
app.listen(port, () => {
  console.log(`Server is listening to ${port}`);
});

app.get("/home", (request, response) => {
  //response.send("Hello, Home!");
  response.send("<h1>Hello, <b>example</b>!</h1>");
});
app.get("/landing", (request, response) => {
  //response.send("Hello, Home!");
  response.send("<h1>Hello, <b>example</b>!</h1>");
});
app.get("/roundone", (request, response) => {
  //response.send("Hello, Home!");
  response.send("<h1>Hello, <b>example</b>!</h1>");
});
app.get("/roundtwo", (request, response) => {
  //response.send("Hello, Home!");
  response.send("<h1>Hello, <b>example</b>!</h1>");
});
//no route associated
app.get("/key ", (request, response) => {
  console.log(request.params);
});
//route with request params
app.get("/:page", (request, response) => {
  console.log(request.params);
});
