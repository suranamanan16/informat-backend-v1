const sql = require('./db.js');

//construtor method
//This has to be the same name as Product.create etc
const Product = function(product){
  this.name = product.name;
  this.quantity = product.quantity;
  this.price = product.price;
  this.category = product.category;
}

Product.create = function(product, result){
  sql.query('INSERT INTO products SET ?', product, function(err, res){
    if(err){
      result(err, null)
      return
    }
    else{
      result(null, res);
      return
    }
  });
}


//getByCategory
Product.getByCategory = function(category, result){
  sql.query('SELECT * FROM products WHERE category = ?', category, function(err, res){
    if(err){
      result(err, null)
      return
    }else{
      result(null, res);
      return
    }
  });
}

//getByProductId
Product.getByProductId = function(productId, result){
  sql.query('SELECT * FROM products WHERE id = ?', productId, function(err, res){
    if(err){
      result(err, null)
      return;
    }else{
      result(null, res)
      return;
    }
  });
}

//getBySearch
Product.getBySearch = function(productName, result){
  sql.query('SELECT * FROM products WHERE name = ?', productName, function(err, res){
  // sql.query('SELECT * FROM products WHERE name LIKE '%' + productName + '%' ', function(err, res){
    if(err){
      result({type: 'not_found'}, null);
      return;
    }else{
      result(null, res);
      return;
    }
  });
}


module.exports = Product;
