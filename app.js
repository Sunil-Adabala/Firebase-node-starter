
//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
// const ejs = require("ejs");
// const mongoose = require('mongoose');
var firebase = require('firebase-admin');
var serviceAccount = require("./serviceAccountKey.json");

firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount),
  // databaseURL: "https://test-23cfc.firebaseio.com"
});


const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));

//TODO

app.listen(3000, function() {
  console.log("Server started on port 3000");
});






// console.log("hey!")
