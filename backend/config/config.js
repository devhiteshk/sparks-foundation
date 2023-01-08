const dotenv = require("dotenv").config();

const PORT = process.env.PORT || 4000;

const MONGODB_URI =
  "mongodb+srv://admin:" +
  process.env.MONGOP +
  "@memories.3ypawsz.mongodb.net/?retryWrites=true&w=majority";

module.exports = {
  MONGODB_URI,
  PORT,
};
