const express = require("express");
const app = express();
const port = 3000;
const greeting = process.env.GREETING;

app.get("/", (req, res) => {
  res.send(greeting);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
