"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BankRouter_1 = require("./../routes/BankRouter");
const cardRoute_1 = require("./../routes/cardRoute");
class Routes {
    static registerRoutes(app) {
        app.get('/', (req, res) => {
            res.send("Server started.....");
        });
        app.use('/api/bank', BankRouter_1.bankRoute);
        app.use('/api/card', cardRoute_1.cardRoute);
    }
}
exports.Routes = Routes;
//# sourceMappingURL=Routes.js.map