const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const bodyParser = require("body-parser");
app.use(bodyParser());

const pizzas = [
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
  res.send(pizzas);
});
//PUT/Pizzas/:id
app.put("/pizzas/:id", (req, res) => {
  pizzas = pizzas.map(pizza => {
    if (pizza.id === req.params.id);
    return Object.assign(pizza, req.body);
    return pizza;
  });

  res.send(pizzas);
});
//DELETE/Pizzas/:id
app.delete("/pizzas/:id", (req, res) => {
  console.log(req.params.id);
  let remainingPizzas = pizzas.filter((pizza, i) => {
    pizza.id !== req.params.id;
  });
  pizzas = [...remainingPizzas];
  res.send(remainingPizzas);
});

app.listen(PORT, () => {
  console.log(`Your app has started on port${PORT}...`);
});
