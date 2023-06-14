const express = require("express");

// Middleware router
const recordRoutes = express.Router();

// database connection
const dbo = require("../db/conn");

// Used to convert id from params to mongo id
const ObjectId = require("mongodb").ObjectId;

// Returns all records
recordRoutes.route("/record/:user").get(async function (req, response) {
  let db_connect = dbo.getDb();
  let user = req.params.user;
  //console.log(user);
  db_connect
    .collection(user)
    .find({})
    .toArray()
    .then((data) => {
      console.log(data);
      response.json(data);
    });
});
// Return a record via its id
recordRoutes.route("/record/:id").get(function (req, res) {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId(req.params.id) };
  db_connect.collection("records").findOne(myquery, function (err, result) {
    if (err) throw err;
    res.json(result);
  });
});

// Create a new record
recordRoutes.route("/record/add").post(function (req, response) {
  let db_connect = dbo.getDb();
  let user = req.body.user;
  let myobj = {
    title: req.body.title,
    author: req.body.author,
    pages: req.body.pages,
    review: req.body.review,
  };
  db_connect
    .collection(user)
    .insertOne(myobj)
    .then((result) => {
      response.status(200).json({
        message: "added",
        result,
      });
    })
    .catch((err) => {
      console.log(err);
      response.status(500).json({
        message: "Error when adding",
        error: err,
      });
    });
});

// Update a record via ID
recordRoutes.route("/update/:id/:user").post(function (req, response) {
  let db_connect = dbo.getDb();
  let myquery = { _id: new ObjectId(req.params.id) };
  let user = req.params.user;
  let newvalues = {
    $set: {
      title: req.body.title,
      author: req.body.author,
      pages: req.body.pages,
      review: req.body.review,
    },
  };
  db_connect
    .collection(user)
    .updateOne(myquery, newvalues)
    .then((result) => {
      response.status(200).json({
        message: "Edited",
        result,
      });
    })
    .catch((err) => {
      console.log(err);
      response.status(500).json({
        message: "Error occured",
        error: err,
      });
    });
});

// Delete a record via ID
recordRoutes.route("/:id/:user").delete((req, response) => {
  let db_connect = dbo.getDb();
  let myquery = { _id: new ObjectId(req.params.id) };
  let user = req.params.user;
  db_connect
    .collection(user)
    .deleteOne(myquery)
    .then((result) => {
      response.status(200).json({
        message: "deleted",
        result,
      });
    })
    .catch((err) => {
      console.log(err);
      response.status(500).json({
        message: "Error Occured",
        error: err,
      });
    });
});

module.exports = recordRoutes;
