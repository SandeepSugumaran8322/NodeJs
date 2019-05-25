"use strict";
exports.__esModule = true;
var fs = require("fs");
function write() {
    return new Promise(function (resolve, reject) {
        fs.writeFile("test.txt", "Thank you for writing us1", function (err) {
            if (err) {
                reject(err);
            }
            else {
                resolve("Write successull");
            }
        });
    });
}
// write().then((data)=>{
//     console.log(data)
// }).catch((err)=>
// {
//     console.log("error occured ");
//     console.log(err)
// })
function read() {
    return new Promise(function (resolve, reject) {
        fs.readFile("test1.txt", 'utf-8', function (err, data) {
            if (err) {
                console.log("file read failed");
                reject(err);
            }
            else {
                resolve(data);
            }
        });
    });
}
read()
    .then(function (data) {
    console.log("read successful--->data: ", data);
    return write();
}).then(function (data) {
    console.log("Call back from write");
    console.log(data);
})["catch"](function (err) {
    console.log("error occured");
    console.log(err);
});
