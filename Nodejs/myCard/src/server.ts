import * as express from "express";
import {Request,Response} from "express";
import { Database } from "./startup/db";
import {Routes} from "./startup/Routes"
import * as parser from "body-parser";
import * as mongoclient from "mongoose";

class App{
    app:express.Application
    
    constructor()
    {
        this.app=express();
        this.app.listen(3000,"localhost"),()=>
        {
            console.log(`listeneing:3000`);
        }
        this.ConfigBodyParser()
       
        Routes.registerRoutes(this.app);
    }
    private ConfigBodyParser()
    {
        this.app.use(parser.json());
        this.app.use(parser.urlencoded({extended:false}));
    }//this should be also above the post request
    
}
Database.connectMongoDb();
const myCardApp=new App();