import {bankModel} from "../models/BankModel";
import  {ResponService} from './../helper/ResponseService'
import {Request,Response} from "express"
export class BankService
{
    public static async  createBank(req:any)
    {
        try
        {
            let newBank=new bankModel(req.body);
            await newBank.save();
            return ResponService.getValidResponse(newBank);

        }
        catch(error){
            return ResponService.getInvalidResponse(error);
        }

    }
    public static async updateBank(req:Request)
    {
        try{
            await bankModel.updateOne({name:req.params.bankId},{$set:req.body})
            return this.getAllBankbyId(req)
        }
        catch(error){
            return ResponService.getInvalidResponse(error);

        }
    }

    public static async deleteBank(req:Request)
    {
        try{
            await bankModel.deleteOne({name:req.params.bankId})
            return this.getAllBankl();
        }
        catch(error)
        {
            return ResponService.getInvalidResponse(error);
        }
        
    }
    public static async getAllBankl()
    {
        try{
            let getBank=await bankModel.find();
            return ResponService.getValidResponse(getBank)
        }
        catch(error)
        {
            return ResponService.getInvalidResponse(error);
        }

    }
    public static async getAllBankbyId(req:Request)
    {
     try{
         let getbyid=await bankModel.find({name:req.params.bankId})
         return ResponService.getValidResponse(getbyid);
     }   
     catch(error){
        return ResponService.getInvalidResponse(error);

     }
    }
}