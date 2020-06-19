const sql = require('./db.js');

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

Product.getBySearch = function(productName, result){
  sql.query('SELECT * FROM products WHERE name LIKE '%productName%'',function(err, res){
    if(err){
      result({type: 'not_found'}, null);
      return;
    }else{
      result(null, res);
      return;
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

module.export = Products;
