const sql = require("./db.js");

var findById = function(productId, result) {
    sql.query("SELECT * FROM products WHERE id = ?", productId, function(err, res) {
      if (err) {
        console.log(err);
        result(err, null);
        return;
      }

      if (res.length) {
        result(null, res[0]);
        return;
      }

      result({
        type: "not_found"
      }, null);
    });
  }

module.exports = findById;
