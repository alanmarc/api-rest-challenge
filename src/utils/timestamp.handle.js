"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.timeStamp = void 0;
const timeStamp = () => {
    const msSinceEpoch = (new Date()).getTime();
    const timeStamp = new Date(msSinceEpoch - 5 * 60 * 60 * 1000);
    return timeStamp;
};
exports.timeStamp = timeStamp;
