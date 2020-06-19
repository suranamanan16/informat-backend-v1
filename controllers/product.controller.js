const Products = require('../models/product.model.js');

exports.getByCategory = function(req, res){

  Products.getByCategory(req.params.category, function(error, data){
    if(error){
      res.status(500).send({message: "Internal Server Error when searching by Category "
        + req.params.category})
    }else{
      //Name, id, category, price, quantity JSON
      res.send(data);
    }
  });

}

export.getByProductId = function(req, res){

  Products.getByProductId(req.params.productId, function(error, data){
    if(error){
      res.status(500).send({message: "Internal Server Error when searching by Id "
        + req.params.productId"});
    }else{
      //Name, id, category, price, quantity JSON
      res.send(data);
    }
  });

}

export.getBySearch = function(req, res){
  Products.getBySearch(req.params.itemSearch, function(error,data){
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
