import express from 'express';
import mongoose from 'mongoose';

var express = require('express');
var app = express();
app.get('/', function (request, response) {
  response.send("Hello World!");
});
app.listen(5000, function(){
  console.log("app.js listening on port 5000")
})
console.log("Hello World!");
