import * as mongoclient from "mongoose"

const schema =mongoclient.Schema;
const cardSchema =new schema({
    name:{type:String,require:true  },
    cardBank:{type:schema.Types.ObjectId,ref:'bank',required:true},
    cardType:{type:String,enum:['credit','debit']},
    createDate:{type:Date,default:Date.now} 
    })
export const cardModel=mongoclient.model("card",cardSchema);