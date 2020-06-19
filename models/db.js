//Node.js module that we installed
//Similar to const express = require('express')
const mysql = require("mysql");
//config from db.config.js
const dbConfig = require("../config/db.config.js");

//have to write to make a connection to the sql database
const connection = mysql.createConnection({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DATABASE
});

//have to write to connect
connection.connect(function(err){
  if(err) throw err;
  console.log("Connected!");
});

//export to use in model class to make queries based on the get request calls from
//the app.js file 
module.exports = connection;
