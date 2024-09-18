const express = require("express");
const router = require("./router");
const app = express();
const port = 3000;
const ports = [3000, 3001];

app.use("/", express.static("public"));
app.use(router);

ports.forEach((port) => {
    app.listen(port,() => {
        console.log(`Example app listening
at http://localhost:${port}`);
});
});
