import {BankService} from "./../services/BankService";
import {bankModel} from "../models/BankModel";
import {Request,Response} from "express";
export class BankController{
public async createBank(req:Request,res:Response)
    {
       let response=await BankService.createBank(req);
       res.json(response);
    }
    public async updateBank(req:Request,res:Response)
    {
        let response =await BankService.updateBank(req)
        res.json(response);
    }
    public async deleteBank(req:Request,res:Response)
    {
        
        let response=await BankService.deleteBank(req);
        res.json(response)
    }
    public async getAllBankl(res:Response)
    {
        let response=await BankService.getAllBankl();
        res.json(response);

    }
    public async getAllBankbyId(req:Request,res:Response)
    {
        let response=await BankService.getAllBankbyId(req);
        res.json(response);
    }
}