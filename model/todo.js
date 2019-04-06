const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create schema

const TodoSchema = new Schema({
  message: {
    type: String
  }
});

module.exports = Todo = mongoose.model("todo", TodoSchema);
