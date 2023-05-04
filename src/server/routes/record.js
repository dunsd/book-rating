const express = require("express");
 
// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const recordRoutes = express.Router();
 
// This will help us connect to the database
const dbo = require("../db/conn");
 
// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;
 
 
// This section will help you get a list of all the records.
recordRoutes.route("/record").get(async function (req, response) {
    let db_connect = dbo.getDb();
  
    db_connect
      .collection("records")
      .find({})
      .toArray()
      .then((data) => {
        console.log(data);
        response.json(data);
      });
  
  });
// This section will help you get a single record by id
recordRoutes.route("/record/:id").get(function (req, res) {
 let db_connect = dbo.getDb();
 let myquery = { _id: ObjectId(req.params.id) };
 db_connect
   .collection("records")
   .findOne(myquery, function (err, result) {
     if (err) throw err;
     res.json(result);
   });
});
 
// This section will help you create a new record.
recordRoutes.route("/record/add").post(function (req, response) {
 let db_connect = dbo.getDb();
 let myobj = {
   title: req.body.title,
   author: req.body.author,
   pages: req.body.pages,
   review: req.body.review,
 };
db_connect.collection("records").insertOne(myobj)
.then(result => {
  response.status(200).json({
    message: "added",
    result
  })
})
.catch(err => {
  console.log(err);
  response.status(500).json({
    message: "Error when adding",
    error: err
  })
})
});


// This section will help you update a record by id.
recordRoutes.route("/update/:id").post(function (req, response) {
 let db_connect = dbo.getDb();
 let myquery = { _id: new ObjectId(req.params.id) };
 let newvalues = {
   $set: {
     title: req.body.title,
     author: req.body.author,
     pages: req.body.pages,
     review: req.body.review,
   },
 };
 db_connect
   .collection("records")
   .updateOne(myquery, newvalues)
   .then(result => {
    response.status(200).json({
      message: "Edited",
      result
    });
   })
   .catch(err => {
    console.log(err);
    response.status(500).json({
      message: "Error occured",
      error: err
    })
   })
   
     });
 
// This section will help you delete a record
recordRoutes.route("/:id").delete((req, response) => {
  let db_connect = dbo.getDb();
  let myquery = { _id: new ObjectId(req.params.id) };
  db_connect.collection("records").deleteOne(myquery)
  .then(result => {
    response.status(200).json({
      message: "deleted",
      result
    });
  })  
  .catch(err => {
    console.log(err);
    response.status(500).json({
      message: 'Error Occured',
      error: err
  })
 });
})

 
module.exports = recordRoutes;