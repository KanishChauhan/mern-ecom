const express = require("express");
const app = express();
require("dotenv").config();
const product = require("./routes/productRoute");
const connectDatabase = require("./database/db");

const port = process.env.PORT;

app.use(express.json());

app.use("/api/v1", product);

connectDatabase();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
