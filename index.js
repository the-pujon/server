const express = require("express");
const app = express();
const port = 5000;
const cors = require("cors");

const chefData = require("./data/chef.json");
const recipesData = require("./data/recipes.json");

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/chefs", (req, res) => {
  res.send(chefData);
});

app.get("/chef/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const selectedRecipes = chefData.find((n) => n.id === id);

  res.send(selectedRecipes);
});

app.get("/recipes", (req, res) => {
  res.send(recipesData);
});

app.get("/recipes/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const selectedRecipes = recipesData.filter((n) => n.chef_id === id);

  res.send(selectedRecipes);
});

app.listen(port, () => {
  console.log("Your server is running in port: ", port);
});
