const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

const Products = require('./controllers/product.controller.js')

//------------Products---------------//

//-----------get requests------------//
app.get('/', function(req, res){
  res.send("GET REQ works");
})
app.get('/search/:itemSearch', Products.getBySearch);
app.get('/:category', Products.getByCategory);
app.get('/:category/:productId', Products.getByProductId);
//------------post-requests-----------//
app.post('/', Products.create);

//------------Products---------------//


app.listen(3000);
