"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ResponService {
    constructor(isvalid, data, error) {
        this.isvalid = isvalid;
        this.data = data;
        this.error = error;
    }
    static getValidResponse(data) {
        return new ResponService(true, data, null);
    }
    static getInvalidResponse(err) {
        return new ResponService(false, null, err);
    }
}
exports.ResponService = ResponService;
//# sourceMappingURL=ResponseService.js.map