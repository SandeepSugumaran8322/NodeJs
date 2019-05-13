import * as mongoclient from "mongoose";
const schema =mongoclient.Schema;
const bankSchema=new mongoclient.Schema(
{
    name:{
        type :String,
        require:true,
    },
    address:String,
    createDate:
    {
        type:Date,
        default:Date.now

    }

})
export const bankModel=mongoclient.model("bank",bankSchema);
