"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginCtrl = exports.registerCtrl = void 0;
const auth_1 = require("../services/auth");
const timestamp_handle_1 = require("../utils/timestamp.handle");
const registerCtrl = ({ body }, res) => __awaiter(void 0, void 0, void 0, function* () {
    const responseUser = yield (0, auth_1.registerNewUser)(body);
    res.send({
        mensaje: "User Registered",
        folio: (0, timestamp_handle_1.timeStamp)(),
        data: responseUser,
    });
});
exports.registerCtrl = registerCtrl;
const loginCtrl = ({ body }, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = body;
    const responseUser = yield (0, auth_1.loginUser)({ email, password });
    if (responseUser === "PASSWORD_INCORRECT") {
        res.send({
            menssage: "Logging error",
            folio: (0, timestamp_handle_1.timeStamp)(),
            data: responseUser,
        });
    }
    else {
        res.send({
            mensaje: "Session Satarted",
            folio: (0, timestamp_handle_1.timeStamp)(),
            data: responseUser,
        });
    }
});
exports.loginCtrl = loginCtrl;
