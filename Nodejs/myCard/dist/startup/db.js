"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoclient = require("mongoose");
class Database {
    static connectMongoDb() {
        mongoclient.connect(this.mongoConnectionString, { useNewUrlParser: true }).then((data) => {
            console.log("connected successfully");
        }).catch((err) => {
            console.log(" refused to connect");
        });
    }
}
Database.mongoConnectionString = "mongodb://localhost:27017/myCard";
exports.Database = Database;
//# sourceMappingURL=db.js.map