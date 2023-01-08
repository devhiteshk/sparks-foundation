const { isEmail } = require("validator");
const mongoose = require("mongoose");

//schema for accounts table
const bankSchema = new mongoose.Schema({
  bank_name: { type: String, required: true },
  holder_name: { type: String, required: true },
  balance: { type: Number, required: true },
  ph_no: { type: String, required: true },
  email: { type: String, validate: [isEmail, "invalid email"], required: true },
});

const Bank = mongoose.model("Bank", bankSchema);

//schema for transaction table
const transactionTable = new mongoose.Schema({
  from: { type: String },
  to: { type: String },
  date: { type: Date },
  money: { type: Number },
  new_bal_payer: { type: Number },
});

const tranTable = mongoose.model("Transaction_Table", transactionTable);
module.exports = { Bank, tranTable };
