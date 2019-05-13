import { bankRoute } from "./../routes/BankRouter";
import { cardRoute } from './../routes/cardRoute';
import * as express from "express"
import {Request,Response} from 'express';

export class Routes{
    public static registerRoutes(app:express.Application)
    {
        app.get('/',(req:Request,res:Response)=>
        {
            res.send("Server started.....")
        })
        app.use('/api/bank',bankRoute);
        app.use('/api/card',cardRoute)
    }
}