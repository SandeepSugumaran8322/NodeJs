"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const cardService_1 = require("./../services/cardService");
class cardController {
    static createCardController(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let cardresponse = yield cardService_1.cardService.createCard(req);
            res.json(cardresponse);
        });
    }
    static getAllCard(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("entered");
            let AllCardResponse = yield cardService_1.cardService.getAllCardService();
            res.json(AllCardResponse);
        });
    }
    static getCardById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let onecardResponse = yield cardService_1.cardService.getByIdService(req.params.cardId);
            res.json(onecardResponse);
        });
    }
    static updateCard(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("entered");
            let response = yield cardService_1.cardService.updateCardService(req);
            res.json(response);
        });
    }
}
exports.cardController = cardController;
//# sourceMappingURL=cardController.js.map