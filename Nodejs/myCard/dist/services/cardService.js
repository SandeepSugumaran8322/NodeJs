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
const cardModel_1 = require("./../models/cardModel");
const ResponseService_1 = require("./../helper/ResponseService");
class cardService {
    static createCard(req) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let cardData = new cardModel_1.cardModel(req.body);
                yield cardData.save();
                return ResponseService_1.ResponService.getValidResponse(cardData);
            }
            catch (error) {
                return ResponseService_1.ResponService.getInvalidResponse(error);
            }
        });
    }
    static getAllCardService() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log("entered Service");
                let allData = yield cardModel_1.cardModel.find().populate({ path: 'cardBank', select: 'name' }).exec(); //cardBank is  the name used in schema
                return ResponseService_1.ResponService.getValidResponse(allData);
            }
            catch (error) {
                return ResponseService_1.ResponService.getInvalidResponse(error);
            }
        });
    }
    static getByIdService(cardId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log("entered Service");
                let allData = yield cardModel_1.cardModel.findById(cardId).populate({ path: 'cardBank', select: 'name' }).exec(); //cardBank is  the name used in schema
                return ResponseService_1.ResponService.getValidResponse(allData);
            }
            catch (error) {
                return ResponseService_1.ResponService.getInvalidResponse(error);
            }
        });
    }
    static updateCardService(req) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log("Enetered update");
                yield cardModel_1.cardModel.findOneAndUpdate({ _id: req.params.cardId }, req.body, { new: true });
                return this.getAllCardService();
            }
            catch (error) {
                return ResponseService_1.ResponService.getInvalidResponse(error);
            }
        });
    }
}
exports.cardService = cardService;
//# sourceMappingURL=cardService.js.map