const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Haremos un modelo que contenga email, password y dos timestamps: createdAt y updatedAt


const User = mongoose.model("User", userSchema);

module.exports = User;
