//Connect to the mysql database

//import mysql and config from db.config.js
const mysql = require("mysql");
const dbConfig = require("../config/db.config.js");

//neccessary functions to command
const connection = mysql.createConnection({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DATABASE
});

connection.connect(function(err){
  if(err) throw err;
  console.log("Connected!");
});

//export
module.exports = connection;
