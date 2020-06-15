const Customer = require("../models/customer.model.js");

exports.create = function(req, res) {
  //If the body is empty
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  const newCustomer = new Customer({
    email: req.body.email,
    name: req.body.name,
    active: req.body.active
  })

  Customer.create(newCustomer, function(err, data) {
    if (err) {
      //500 is a internal server error
      res.status(500).send({
        message: err.message || "There was an error when creating the customer"
      });
    } else {
      res.send(data);
    }
  });

};

exports.findAll = function(req, res) {

  Customer.getAll(function(err, data) {
    if (err) {
      res.status(500).send({
        message: err.message || "There was an error when looking for all customers"
      });
    } else {
      res.send(data);
    }
  });

};

exports.findOne = function(req, res) {

  // if you have the route /user/:name, then the “name” property is available as
  // req.params.name.

  Customer.findById(req.params.customerId, function(err, data) {
    if (err) {
      if (err.type == "not_found") {
        res.status("404").send({
          message: "customer not found with the id " + req.params.customerId
        });
      }else{
        res.status("500").send({
          message: "Internal error when finding the customer with id ${req.params.customerId}"
        });
      }
    } else {
      res.send(data);
    }
  });

}

exports.update = function(req, res) {
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  Customer.updateById(req.params.customerId, new Customer(req.body), function(err, data){
    if(err){
      if(err.kind == "not_found"){
        res.status(404).send({
          message: "customer not found with id ${req.params.customerId}"
        });
      }else{
        res.status(500).send({
          message: "There was an internal error when updating the customer with id ${req.params.customerId}"
        });
      }
    }

    else{
      res.send(data);
    }
  });

}

exports.delete = function(req, res) {
  Customer.remove(req.params.customerId, function(err, data){
    if(err){
      if(err.type == "not_found"){
        res.status(404).send({message: "There is no customer with the id " + req.params.customerId});
      }else{
        res.status(500).send({message: "Internal server error when deleting customer with id ${req.params.customerId}"});
      }
    }
    else{
      res.send(data);
    }
  });
}

exports.deleteAll = function(req, res) {
  Customer.removeAll(function(err, data){
    if(err){
      res.status(500).send({
        message: err.message || "There was an internal error when deleting all the customers"
      });
    }

    res.send({message: "All the customers were deleted successfully!"});
  });
}
