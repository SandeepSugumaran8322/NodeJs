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
const BankModel_1 = require("../models/BankModel");
const ResponseService_1 = require("./../helper/ResponseService");
class BankService {
    static createBank(req) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let newBank = new BankModel_1.bankModel(req.body);
                yield newBank.save();
                return ResponseService_1.ResponService.getValidResponse(newBank);
            }
            catch (error) {
                return ResponseService_1.ResponService.getInvalidResponse(error);
            }
        });
    }
    static updateBank(req) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield BankModel_1.bankModel.updateOne({ name: req.params.bankId }, { $set: req.body });
                return this.getAllBankbyId(req);
            }
            catch (error) {
                return ResponseService_1.ResponService.getInvalidResponse(error);
            }
        });
    }
    static deleteBank(req) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield BankModel_1.bankModel.deleteOne({ name: req.params.bankId });
                return this.getAllBankl();
            }
            catch (error) {
                return ResponseService_1.ResponService.getInvalidResponse(error);
            }
        });
    }
    static getAllBankl() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let getBank = yield BankModel_1.bankModel.find();
                return ResponseService_1.ResponService.getValidResponse(getBank);
            }
            catch (error) {
                return ResponseService_1.ResponService.getInvalidResponse(error);
            }
        });
    }
    static getAllBankbyId(req) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let getbyid = yield BankModel_1.bankModel.find({ name: req.params.bankId });
                return ResponseService_1.ResponService.getValidResponse(getbyid);
            }
            catch (error) {
                return ResponseService_1.ResponService.getInvalidResponse(error);
            }
        });
    }
}
exports.BankService = BankService;
//# sourceMappingURL=BankService.js.map