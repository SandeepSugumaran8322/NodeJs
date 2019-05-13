import { cardModel } from "./../models/cardModel";
import { ResponService } from "./../helper/ResponseService";
import {Request,Response} from "express"
export class cardService {
    public static async createCard(req: any) {
        try {

            let cardData = new cardModel(req.body);
            await cardData.save()
            return ResponService.getValidResponse(cardData)

        }
        catch (error) {
            return ResponService.getInvalidResponse(error)
        }
    }
    public static async getAllCardService() {
        try {
            console.log("entered Service");
            let allData = await cardModel.find().populate({ path: 'cardBank', select: 'name' }).exec();   //cardBank is  the name used in schema
            return ResponService.getValidResponse(allData)
        }
        catch (error) {
            return ResponService.getInvalidResponse(error)
        }
    }
    public static async getByIdService(cardId:String) {
        try {
            console.log("entered Service");
            let allData = await cardModel.findById(cardId).populate({ path: 'cardBank', select: 'name' }).exec();   //cardBank is  the name used in schema
            return ResponService.getValidResponse(allData)
        }
        catch (error) {
            return ResponService.getInvalidResponse(error)
        }
    }
    public static async updateCardService(req:Request)
    {
        try{
            console.log("Enetered update")
            await cardModel.findOneAndUpdate({_id:req.params.cardId},req.body,{new:true})
            return this.getAllCardService()
        }
        catch(error){
            return ResponService.getInvalidResponse(error);

        }
    }

}