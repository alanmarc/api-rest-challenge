import { Request, Response } from "express";
import { registerNewUser, loginUser } from "../services/auth";
import { timeStamp } from "../utils/timestamp.handle";

const registerCtrl = async ({ body }: Request, res: Response) => {
        const responseUser = await registerNewUser(body);
        res.send({
                mensaje: "User Registered",
                folio: timeStamp(),
                data: responseUser,
        });  
};

const loginCtrl = async ({ body }: Request, res: Response) => {
        const { email, password } = body;
        const responseUser = await loginUser({ email, password});
        if (responseUser === "PASSWORD_INCORRECT"){
                
                res.send({
                        menssage: "Logging error",
                        folio: timeStamp(),
                        data: responseUser,
                });
        } else{
                res.send({
                        mensaje: "Session Satarted",
                        folio: timeStamp(),
                        data: responseUser,
                });
        }
};

export { registerCtrl, loginCtrl };