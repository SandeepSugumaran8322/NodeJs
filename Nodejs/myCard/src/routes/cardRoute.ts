import { Router } from "express";
import {cardController} from "./../controller/cardController";

export const cardRoute:Router=Router();
cardRoute.post('/createCard',cardController.createCardController)
cardRoute.get('/getAll',cardController.getAllCard)
cardRoute.get('/:cardId',cardController.getCardById)
cardRoute.put('/:cardId',cardController.updateCard)