const Products = require('../models/product.model.js');

exports.getByCategory = function(req, res){

  Products.getByCategory(req.params.category, function(error, data){
    if(error){
      res.status(500).send({message: "Internal Server Error when searching by Category"
        + req.params.category})
    }else{
      //Name, id, category, price, quantity JSON
      res.send(data);
    }
  });

}
