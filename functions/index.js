//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
// const ejs = require("ejs");
// const mongoose = require('mongoose');
var firebase = require('firebase-admin');
const functions = require('firebase-functions');
const db = require("../models/connection.js")
var serviceAccount = require("../serviceAccountKey.json");

firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount),
  databaseURL: "https://test-project-d30e0.firebaseio.com"
});





const app = express();

app.set('view engine', 'ejs');

// console.log("hey")



app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));

//TODO
let docRef = db.collection('users').doc('Sunil');

let setAda = docRef.set({
  first: 'Adabala',
  last: 'Sunil',
  born: 1999
});
app.get("/",(req,res) => {
  console.log("yooo");
  res.send("hey!")
})

app.listen(5000, () => {
  console.log("Server started on port 3000");
});








// console.log("hey!")

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
