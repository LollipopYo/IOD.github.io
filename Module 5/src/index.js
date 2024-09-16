const express = require("express");
const app = express();
const port = 3000;
const ports = [3000, 3001];

app.use("/", express.static("public"));


app.get("/", (req, res) => {
  res.send("Hello World!!!!!");
});

app.get("/sayHi", (req, res) => {
  res.send("SayHi!");
});

app.get("/test", (req, res) => {
  res.send("Hello World!");
});
app.get("/test2", (req, res) => {
  res.send("Second test");
});

ports.forEach((port) => {
    app.listen(port,() => {
        console.log(`Example app listening
at http://localhost:${port}`);
});
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});
