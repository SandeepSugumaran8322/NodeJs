import * as mongoclient from "mongoose";
export class Database{
    private static readonly mongoConnectionString:string ="mongodb://localhost:27017/myCard";
    public static  connectMongoDb()
    
    {
        mongoclient.connect(this.mongoConnectionString,{useNewUrlParser:true}).then((data:any)=>
        {
            console.log("connected successfully");
        }).catch((err:any)=>
        {
            console.log(" refused to connect");

        })
    }
}