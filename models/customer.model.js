//create a constructor for customer and crud functions

const sql = require("./db.js");

// const Customer = function(email, name, active){
//   this.email = email;
//   this.name = name;
//   this.active = active;
// }

const Customer = function(customer) {
  this.email = customer.email;
  this.name = customer.name;
  this.active = customer.active;
};

//Adding functions to an object
Customer.create = function(newCustomer, result){
  sql.query("INSERT INTO customers SET ?", newCustomer, function(err, res){
    if(err){
      console.log("error: ", err);
      result(err, null);
      return;
    }else{
      console.log("created customer: ", { id: res.insertId, ...newCustomer });
      result(null, { id: res.insertId, ...newCustomer });
    }
  });
};

Customer.findById = function(customerId, result){
  sql.query("SELECT * FROM customers WHERE id = ?", customerId, function(err, res){
    if(err){
      console.log(err);
      result(err, null);
      return;
    }

    if(res.length){
        result(null, res[0]);
        return;
    }

    result({type: "not_found"}, null);
    return;

  });
};

Customer.getAll = function(result){
  sql.query("SELECT * FROM customers", function(err, res){
    if(err){
      console.log(err);
      result(err, null);
      return;
    }else{
        console.log("customers: ", res);
        result(null, res);
    }
  });
};


Customer.updateById = function(id, customer, result){
  sql.query(
    "UPDATE customers SET email = ?, name = ?, active = ? WHERE id = ?",
    [customer.email, customer.name, customer.active, id],
    function(err, res) {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Customer with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated customer: ", { id: id, ...customer });
      result(null, { id: id, ...customer });
    }
  );
};

Customer.remove = function(id, result){
  sql.query("DELETE FROM customers WHERE id = ?", id, function(err, res){
    if(err){
      console.log(err);
      result(err, null);
      return;
    }
    if(res.affectedRows == 0){
      result({type: "not_found"}, null);
      return;
    }

    result(null, res);
    return;

  });
};

Customer.removeAll = function(result){
  sql.query("DELETE FROM customers", function(err, res){
    if(err){
      console.log(err);
      result(err, null);
      return;
    }else{
      console.log(`deleted ${res.affectedRows} customers`);
      result(null, res);
      return;
    }
  });
};

module.exports = Customer;
