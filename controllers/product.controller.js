const Products = require('../models/product.model.js');

exports.getByCategory = function(req, res){

  Products.getByCategory()

}
