"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoclient = require("mongoose");
const schema = mongoclient.Schema;
const bankSchema = new mongoclient.Schema({
    name: {
        type: String,
        require: true,
    },
    address: String,
    createDate: {
        type: Date,
        default: Date.now
    }
});
exports.bankModel = mongoclient.model("bank", bankSchema);
//# sourceMappingURL=BankModel.js.map