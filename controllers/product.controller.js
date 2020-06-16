const Product = require("../models/product.model.js");

exports.findOne = function(req, res){

  Product.findById(res.params.productId, function(err, data){
    if(err){
      if(err.type == "not_found"){
        res.status(404).send({message: "The product you are looking for does not exist"})
      }
      else{
        res.status(500).send({message: "Internal server error when searching for product with id "
          + req.params.productId});
      }
    }else{
      res.send(data);
    }
  });

};
