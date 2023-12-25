const express = require("express");
const cors = require("cors");
const products = require("../redux-shopping-cart/backend-data/products");
const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to our shopping cart API....");
});
app.get("/products", (req, res) => {
  res.send(products);
});

app.listen(8080, console.log("Server running on port: 8080"));
