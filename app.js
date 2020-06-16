const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const customers = require("./controllers/customer.controller.js");
const products = require("./controllers/product.controller.js");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get("/", function(req, res) {
  res.send("Hello world");
})


app.get("/products/:productId", products.findOne);





app.post("/customers", customers.create);

app.get("/customers", customers.findAll);

app.get("/customers/:customerId", customers.findOne);

app.put("/customers/:customerId", customers.update);

app.delete("/customers/:customerId", customers.delete);

app.delete("/customers", customers.deleteAll);


app.listen(3000);
