import { NextFunction, Request, Response } from "express";
import { JwtPayload } from "jsonwebtoken";
import { verifyToken } from "../utils/jwt.handle";
import { timeStamp } from "../utils/timestamp.handle";

interface RequestExt extends Request{
    user?: string | JwtPayload;
}

const checkJwt = (req: RequestExt, res: Response, next: NextFunction) => {
    try {
        const jwtByUser = req.headers.authorization || '';
        const jwt = jwtByUser.split(' ').pop();
        const isUser = verifyToken(`${jwt}`);
        if (!isUser) {
            res.status(401);
            res.send({
                    message: "JWT_INVALID",
                    folio: timeStamp(),
                    data: isUser,
            });
        } else {
            req.user = isUser;
            console.log({ jwtByUser });
            next();
        }
    } catch (e) {
        console.log({ e });
        res.status(400);
        res.send({
            message: "SESSION_INVALID",
            folio: timeStamp(),
            data: e,
        });
    }
};

export { checkJwt };