const mongoose = require("mongoose");
const db = process.env.DBURI;

exports.connectDb = () => {
  mongoose.connect(db, () => {
    console.log(`connection successfull`);
  });
};
