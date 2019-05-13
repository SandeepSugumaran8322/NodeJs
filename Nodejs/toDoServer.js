"use strict";
exports.__esModule = true;
var express = require("express");
var mongoclient = require("mongoose");
var parser = require("body-parser");
var port = 3002;
var host = 'localhost';
var app = express();
var userModel = null;
app.listen(port, host, function () {
    console.log("****************************************\nToDoApp server listening....... \nPort number:" + port + "\nHostName :" + host + "\n****************************************");
});
function connecToDb() {
    mongoclient.connect("mongodb://localhost:27017/myDb", { useNewUrlParser: true }).then(function (resp) {
        console.log("Connected Successfully.....");
    })["catch"](function (err) {
        console.log("Connection Refused due to" + err);
    });
}
connecToDb();
function createSchema() {
    var userSchema = new mongoclient.Schema({
        taskdate: {
            type: String,
            required: true
        },
        task: {
            type: String,
            required: true
        }
    });
    userModel = mongoclient.model("ToDoCollection", userSchema);
}
createSchema();
app.use(parser.json());
app.use(parser.urlencoded({ extended: false }));
app.post('/CreateNewTask', function (req, res) {
    console.log("Entered Post");
    var task = new userModel(req.body);
    task.save();
    console.log("*********************************************\n\"" + req.body.task + "\" Record Inserted Successfully\n*********************************************");
    res.send("Task created Successfully");
});
app.get('/ViewAllTasks', function (req, res) {
    userModel.find().then(function (data) {
        res.send(data);
    });
});
app.get('/ViewAllTasks/:date', function (req, res) {
    console.log(req.params);
    userModel.find({ taskdate: req.params.date }).then(function (data) {
        console.log(data);
        res.send(data);
    });
});
