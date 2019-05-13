import * as express from "express";
import {Response,Request} from "express";
import * as mongoclient from "mongoose";
import * as parser from "body-parser";
const port=3002;
const host='localhost';
const app=express();
let userModel:any=null;
app.listen(port,host,function()
{
    console.log("****************************************\nToDoApp server listening....... \nPort number:"+port+"\nHostName :"+host+"\n****************************************");
});
function connecToDb()
{
    mongoclient.connect("mongodb://localhost:27017/myDb",{useNewUrlParser:true}).then(function(resp:any)
    {
        console.log("Connected Successfully.....");
    }).catch(function(err:any)
    {
        console.log("Connection Refused due to"+err);
    })
}
connecToDb();
function createSchema()
{
    let userSchema=new mongoclient.Schema({
        taskdate :{
            type:String,
            required:true
        } ,
        task :  {
            type:String,
            required:true
        }
    })
    userModel=mongoclient.model("ToDoCollection",userSchema);
}
createSchema();
app.use(parser.json());
app.use(parser.urlencoded({extended:false}));
app.post('/CreateNewTask',function(req:Request,res:Response)
{
    console.log("Entered Post")
    let task=new userModel(req.body);
    task.save();
    console.log("*********************************************\n\""+req.body.task+"\" Record Inserted Successfully\n*********************************************");
    res.send("Task created Successfully");

});
app.get('/ViewAllTasks',function(req:Request,res:Response)
{
    
    userModel.find().then((data:any)=>
    {
        res.send(data);
    })
})
app.get('/ViewAllTasks/:date',function(req:Request,res:Response)
{
    console.log(req.params);
    userModel.find({taskdate:req.params.date}).then((data:any)=>
    {
        console.log(data);
        res.send(data);
    })
})

