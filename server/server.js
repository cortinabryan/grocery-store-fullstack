const Data = require("./Data");

const express = require("express");
const app = express();
const PORT = 5000;

app.get("/api", (req, res) => {
  res.json({ users: ["userOne", "userTwo", "userThree"] });
});
app.get("/products", (req, res) => {
  console.log(Data);
  res.json({ data: Data.products });
});

app.listen(PORT, () =>
  console.log(`Server runing on port: http://localhost:${PORT}`)
);
