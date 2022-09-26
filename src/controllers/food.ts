import { Response } from "express";
import { handleHttp } from "../utils/error.handle";
import { getAllFoods, insertFood, deleteFood } from "../services/food";
import { timeStamp } from "../utils/timestamp.handle";
import { RequestExt } from "../interfaces/requestExt.interface";

const getFoods = async (req: RequestExt, res: Response) => {
    try {
        const response = await getAllFoods();
        const { user } = req;
        res.send({
            message: "Foods Found",
            folio: timeStamp(),
            data: {response, user }
        });
    } catch (e) {
        handleHttp(res, 'ERROR_GET_FOODS');
    }
};

const postFood = async ({ body, user}: RequestExt, res: Response) => {
    try {
        const response = await insertFood(body);
        res.send({
            message: "Food inserted",
            folio: timeStamp(),
            data: {response, user }
        });
    } catch (e) {
        handleHttp(res, 'ERROR_POST_FOOD');
    }
};

const deleteOneFood = async ({ params, user }: RequestExt, res: Response) => {
    try {
        const { id } = params;
        const response = await deleteFood(id);
        res.send({
            menssage: "Food Deleted",
            folio: timeStamp(),
            data: {response, user }
        });
    } catch (e) {
        handleHttp(res, 'ERROR_DELETE_FOOD');
    }
};

export { getFoods, postFood, deleteOneFood };