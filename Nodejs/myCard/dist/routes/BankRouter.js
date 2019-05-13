"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const BankController_1 = require("./../controller/BankController");
const bankController = new BankController_1.BankController();
exports.bankRoute = express_1.Router();
exports.bankRoute.post('/create', bankController.createBank);
exports.bankRoute.get('/:bankId', bankController.getAllBankbyId);
exports.bankRoute.get('/', bankController.getAllBankl);
exports.bankRoute.put('/update/:bankId', bankController.updateBank);
exports.bankRoute.delete('/delete/:bankId', bankController.deleteBank);
//# sourceMappingURL=BankRouter.js.map