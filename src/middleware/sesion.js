"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkJwt = void 0;
const jwt_handle_1 = require("../utils/jwt.handle");
const timestamp_handle_1 = require("../utils/timestamp.handle");
const checkJwt = (req, res, next) => {
    try {
        const jwtByUser = req.headers.authorization || '';
        const jwt = jwtByUser.split(' ').pop();
        const isUser = (0, jwt_handle_1.verifyToken)(`${jwt}`);
        if (!isUser) {
            res.status(401);
            res.send({
                message: "JWT_INVALID",
                folio: (0, timestamp_handle_1.timeStamp)(),
                data: isUser,
            });
        }
        else {
            req.user = isUser;
            console.log({ jwtByUser });
            next();
        }
    }
    catch (e) {
        console.log({ e });
        res.status(400);
        res.send({
            message: "SESSION_INVALID",
            folio: (0, timestamp_handle_1.timeStamp)(),
            data: e,
        });
    }
};
exports.checkJwt = checkJwt;
