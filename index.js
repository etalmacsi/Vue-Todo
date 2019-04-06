const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const MongoClient = require("mongodb").MongoClient;
const mongoose = require("mongoose");

const Todo = require("./model/todo");

var db = require("./config/keys").mongoURI;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("mongoDB connected"))
  .catch(err => console.log(err));

app.use(cors());
app.use(bodyParser.json());

app.post("/todo", (req, res) => {
  const newTodo = new Todo({
    message: req.body.message
  });

  newTodo.save().then(post => res.json(post));
});

app.get("/todo", (req, res) => {
  Todo.find()
    .then(posts => res.json(posts))
    .catch(err => res.status(404).json({ nopostsfound: "No posts found" }));
  console.log(res);
});

app.listen(8082);
