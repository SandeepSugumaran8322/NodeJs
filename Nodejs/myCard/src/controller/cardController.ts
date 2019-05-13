import { cardService } from "./../services/cardService";
import {Request,Response} from "express";

export class cardController{
    public  static async createCardController(req:Request,res:Response)
    {
        
        let cardresponse =await cardService.createCard(req)
        res.json(cardresponse)
    }
    public static async getAllCard(req:Request,res:Response)
    {
        console.log("entered");
        let AllCardResponse=await cardService.getAllCardService()
        res.json(AllCardResponse)
    }
    public static async getCardById(req:Request,res:Response)
    {
        let onecardResponse=await cardService.getByIdService(req.params.cardId);
        res.json(onecardResponse)
    }
    public static async updateCard(req:Request,res:Response)
    {
        console.log("entered");
        let response =await cardService.updateCardService(req)
        res.json(response);
    }
}