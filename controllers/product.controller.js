const Product = require('../models/product.model.js');

exports.create = function(req, res){

  const product = new Product({
    name: req.body.name,
    quantity: req.body.quantity,
    price: req.body.price,
    category: req.body.category
  })

  Product.create(product, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Customer."
      });
    else res.send(data);
  });
}


exports.getByCategory = function(req, res){

  Product.getByCategory(req.params.category, function(error, data){
    if(error){
      res.status(500).send({message: "Internal Server Error when searching by Category "
        + req.params.category})
    }else{
      //Name, id, category, price, quantity JSON
      res.send(data);
    }
  });

}

exports.getByProductId = function(req, res){

  Product.getByProductId(req.params.productId, function(error, data){
    if(error){
      res.status(500).send({message: "Internal Server Error when searching by Id "
        + req.params.productId})
    }else{
      //Name, id, category, price, quantity JSON
      res.send(data);
    }
  });

}

exports.getBySearch = function(req, res){
  Product.getBySearch(req.params.itemSearch, function(error,data){
    if(error){
      if(error.type == 'not_found'){
        req.status(404).send({message: "Could not find " + req.params.itemSearch})
      }else{
        req.status(500).send({message: "Internal Server Error when searching for "
          + req.params.itemSearch})
      }
    }else{
      res.send(data);
    }
  });
}
