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
const BankService_1 = require("./../services/BankService");
class BankController {
    createBank(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let response = yield BankService_1.BankService.createBank(req);
            res.json(response);
        });
    }
    updateBank(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let response = yield BankService_1.BankService.updateBank(req);
            res.json(response);
        });
    }
    deleteBank(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let response = yield BankService_1.BankService.deleteBank(req);
            res.json(response);
        });
    }
    getAllBankl(res) {
        return __awaiter(this, void 0, void 0, function* () {
            let response = yield BankService_1.BankService.getAllBankl();
            res.json(response);
        });
    }
    getAllBankbyId(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let response = yield BankService_1.BankService.getAllBankbyId(req);
            res.json(response);
        });
    }
}
exports.BankController = BankController;
//# sourceMappingURL=BankController.js.map