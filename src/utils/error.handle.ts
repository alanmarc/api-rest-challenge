import { Response } from "express";
import { timeStamp } from "./timestamp.handle";

const handleHttp = ( res: Response, error: string, errorRaw?: any) => {
    console.log(errorRaw);
    res.status(500);
    res.send({ 
        message: "Error",
        folio: timeStamp(),
        data: errorRaw,
     });
};

export { handleHttp };