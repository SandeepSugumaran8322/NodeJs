"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const db_1 = require("./startup/db");
const Routes_1 = require("./startup/Routes");
const parser = require("body-parser");
class App {
    constructor() {
        this.app = express();
        this.app.listen(3000, "localhost"), () => {
            console.log(`listeneing:3000`);
        };
        this.ConfigBodyParser();
        Routes_1.Routes.registerRoutes(this.app);
    }
    ConfigBodyParser() {
        this.app.use(parser.json());
        this.app.use(parser.urlencoded({ extended: false }));
    } //this should be also above the post request
}
db_1.Database.connectMongoDb();
const myCardApp = new App();
//# sourceMappingURL=server.js.map