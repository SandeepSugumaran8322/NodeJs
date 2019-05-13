"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoclient = require("mongoose");
const schema = mongoclient.Schema;
const cardSchema = new schema({
    name: { type: String, require: true },
    cardBank: { type: schema.Types.ObjectId, ref: 'bank', required: true },
    cardType: { type: String, enum: ['credit', 'debit'] },
    createDate: { type: Date, default: Date.now }
});
exports.cardModel = mongoclient.model("card", cardSchema);
//# sourceMappingURL=cardModel.js.map