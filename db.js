const mongoose = require("mongoose");
const mongoURI =
  "mongodb+srv://Mayank:mayank123@mayank.qddo3.mongodb.net/eCommerce?retryWrites=true&w=majority";
const connectToMongo = () => {
  mongoose.connect(mongoURI, () => {
    console.log("Connected to database successfully");
  });
};
module.exports = connectToMongo;
