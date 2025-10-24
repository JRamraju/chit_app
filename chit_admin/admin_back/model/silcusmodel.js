const db = require("../Config/db");

const Customer = {
  getchitp : (callback) => {
    const sql = `select * from confrim_table;`;
    db.query(sql, callback);
  },

};

module.exports = Customer;
