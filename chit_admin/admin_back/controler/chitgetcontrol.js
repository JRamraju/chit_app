const Customer = require("../model/silcusmodel");

const getchitentry = (req, res) => {
  Customer.getchitp((err0, res0) => {
    if (err0) {
      console.error("❌ Error finding data:", err0);
      return res.status(500).send("Database error");
    }
    console.log('All Data : ',res0)
    return res.status(200).json({'message':'All Data',res0});
  });
};

module.exports = { getchitentry };
