"use strict";
exports.__esModule = true;
var fs = require("fs");
fs.readFile('test.txt', 'utf-8', function (err, data) {
    if (err) {
        console.log(err);
    }
    else if (data == null || data == '') {
        fs.writeFile('test.txt', "Written Successfully", function (err) {
            if (err) {
                console.log(err);
            }
            else {
                console.log("write successfull");
            }
        });
    }
});
console.log("ABCD");
