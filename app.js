const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const customers = require("./controllers/customer.controller.js");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get("/", function(req, res) {
  res.send("Hello world");
})


// Create a new Customer
app.post("/customers", customers.create);

// Retrieve all Customers
app.get("/customers", customers.findAll);

// Retrieve a sinsgle Customer with customerId
app.get("/customers/:customerId", customers.findOne);

// Update a Customer with customerId
app.put("/customers/:customerId", customers.update);

// Delete a Customer with customerId
app.delete("/customers/:customerId", customers.delete);

// Create a new Customer
app.delete("/customers", customers.deleteAll);


app.listen(3000);
