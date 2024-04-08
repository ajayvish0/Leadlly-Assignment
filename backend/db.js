const mongoose = require("mongoose");

mongoose.connect("Your MongoDB connection string here");

//elegant schema

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    minLength: 3,
    maxLength: 20,
  },
  password: {
    type: String,
    required: true,
    minLength: 6,
  },
  firstName: {
    type: String,
    required: true,
    trim: true,
    minLength: 3,
    maxLength: 20,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
    minLength: 3,
    maxLength: 20,
  },
});

const ProductSchema = new mongoose.Schema({ name: String, price: Number });
const Product = mongoose.model("Product", ProductSchema);
const User = mongoose.model("User", UserSchema);

module.exports = { User, Product };
