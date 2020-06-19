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
app.get('/:category', Products.getByCategory);

app.get('/category/:productId', Products.getByProductId);

app.get('/:itemSearch', Products.getBySearch);
//------------post-requests-----------//
app.post('/', Products.create);




app.listen(3000);
