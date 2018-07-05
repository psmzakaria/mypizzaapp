const express = require("express");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser());

let pizzas = [
  {
    id: "1",
    name: "Hawaiian",
    price: "10.50"
  },

  {
    id: "2",
    name: "Chicken Supreme      ",
    price: "10.50"
  },
  {
    id: "3",
    name: "Pepperoni",
    price: "11.50"
  },
  {
    id: "4",
    name: "Veggie Lover's",
    price: "8.50"
  },
  {
    id: "5",
    name: "Meat Galore",
    price: "13.50"
  }
];
//GET Pizzas
app.get("/", (req, res) => {
  res.send({ message: "hello pizzas" });
});
//GET Pizzas
app.get("/pizzas", (req, res) => {
  res.send(pizzas);
});
//GET/Pizzas/:id
app.get("/pizzas/:id", (req, res) => {
  res.send(getPizzaById(req.params.id));
});
//POST/Pizzas
app.post("/pizzas", (req, res) => {
  pizzas.push(req.body);
  res.json(req.body);
});
//PUT/Pizzas/:id
app.put("/pizzas/:id", (req, res) => {
  let pizzaToUpdate
  pizzas = pizzas.map(pizza => {
    if (pizza.id === req.params.id) {
      pizzaToUpdate=Object.assign(pizza, req.body);
      return pizzaToUpdate
    };
    return pizza;
  });

  res.json(pizzaToUpdate);
});
//DELETE/Pizzas/:id
app.delete("/pizzas/:id", (req, res) => {
  console.log(req.params.id);
  let remainingPizzas = pizzas.filter((pizza, i) => {
    return pizza.id !== req.params.id;
  });
  pizzas = [...remainingPizzas];
  res.json(`Deleted Success ${req.params.id}`);
});
module.exports = app;
