"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleHttp = void 0;
const timestamp_handle_1 = require("./timestamp.handle");
const handleHttp = (res, error, errorRaw) => {
    console.log(errorRaw);
    res.status(500);
    res.send({
        message: "Error",
        folio: (0, timestamp_handle_1.timeStamp)(),
        data: errorRaw,
    });
};
exports.handleHttp = handleHttp;
