const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get("/", function(req, res) {
  res.send("Hello world");
})

app.get('/:category', ){

}

app.get('/category/:productId', ){

}

app.get('/:itemSearch', ){

}

app.listen(3000);
