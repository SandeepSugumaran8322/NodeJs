import {Router} from "express";
import {BankController} from "./../controller/BankController";
const bankController = new BankController();
export const bankRoute:Router=Router();
bankRoute.post('/create',bankController.createBank)
bankRoute.get('/:bankId',bankController.getAllBankbyId)
bankRoute.get('/',bankController.getAllBankl)
bankRoute.put('/update/:bankId',bankController.updateBank)
bankRoute.delete('/delete/:bankId',bankController.deleteBank);