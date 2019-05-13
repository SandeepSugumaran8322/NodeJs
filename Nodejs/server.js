"use strict";
exports.__esModule = true;
var express = require("express");
var parser = require("body-parser");
var mongoclient = require("mongoose");
var port = 3000;
var hostname = "localhost";
var app = express();
var userModel = null;
app.listen(port, hostname, function () {
    console.log("server started");
});
function connectDb() {
    mongoclient.connect("mongodb://localhost:27017/myDb", { useNewUrlParser: true })
        .then(function (resp) { console.log("connected successfully"); })["catch"](function (err) { console.log(err); });
}
connectDb();
function createUserFunction() {
    var schema = mongoclient.Schema;
    var userSchema = new mongoclient.Schema({
        name: {
            type: String,
            required: true,
            unique: true
        },
        email: String,
        mobile: String
    }); //userSchema can have paramter or field name can have following values eg:--> name:{type:string,required:true,default:"somevalue",unique:true}
    userModel = mongoclient.model("user", userSchema); //To register my userSchema with db . This part will return refernce to db
}
createUserFunction();
app.use(parser.json()); //config to use bodyparser
app.use(parser.urlencoded({ extended: false }));
app.get('/', function (req, res) {
    console.log("sever is running");
    console.log(req.url);
    res.send("Hello world");
});
app.get('/profile', function (req, res) {
    console.log(req.url);
    res.send("Profile service");
});
app.get('/details', function (req, res) {
    console.log(req.url);
    console.log(req.query);
    console.log(req.params);
    res.send("Details service");
});
app.get('/details/:Id', function (req, res) {
    console.log(req.url);
    console.log(req.query);
    console.log(req.params);
    res.send("Details service");
});
app.post('/register', function (req, res) {
    console.log(req.body);
    res.send(req.body);
});
app.post('/registerInDb', function (req, res) {
    var user = new userModel(req.body);
    user.save();
    res.send("Successfully registered");
});
app.get('/getRegisteredUser', function (req, res) {
    userModel.find().then(function (data) {
        res.send(data);
    });
});
app.get('/getRegUserByEmail', function (req, res) {
    userModel.find({ email: req.query.email }).then(function (data) {
        res.send(data);
    });
});
app.get('/getRegUserByEmail/:email', function (req, res) {
    console.log(req.params);
    userModel.find({ email: req.params.email }).then(function (data) {
        res.send(data);
    });
});
app.get('/getRegUserById/:id', function (req, res) {
    console.log(req.params);
    userModel.findOne().then(function (data) {
        res.send(data);
    });
});
