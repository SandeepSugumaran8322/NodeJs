"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cardController_1 = require("./../controller/cardController");
exports.cardRoute = express_1.Router();
exports.cardRoute.post('/createCard', cardController_1.cardController.createCardController);
exports.cardRoute.get('/getAll', cardController_1.cardController.getAllCard);
exports.cardRoute.get('/:cardId', cardController_1.cardController.getCardById);
exports.cardRoute.put('/:cardId', cardController_1.cardController.updateCard);
//# sourceMappingURL=cardRoute.js.map