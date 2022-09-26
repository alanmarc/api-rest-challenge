import { Request, Response } from "express";
import { insertLike, getLikes, getLike, updateLike, deleteLike } from "../services/item";
import { handleHttp } from "../utils/error.handle";
import { timeStamp } from "../utils/timestamp.handle";

const getItem = async ({ params }: Request, res: Response) => {
    try {
        const { id } = params;
        const response = await getLike(id);
        const data = response ? response : "NOT_FOUND";
        res.send({
            message: "Item found",
            folio: timeStamp(),
            data: data,
        });
    } catch (e) {
        handleHttp(res, 'ERROR_GET_ITEM');
    }
};

const getItems = async (req: Request, res: Response) => {
    try {
        const response = await getLikes();
        res.send({
            message: "Items found",
            folio: timeStamp(),
            data: response,
        });
    } catch (e) {
        handleHttp(res, 'ERROR_GET_ITEMS');
    }
};

const updateItem = async ({ params, body }: Request, res: Response) => {
    try {
        const { id } = params;
        const response = await updateLike(id, body);
        res.send({
            message: "Item Updated",
            folio: timeStamp(),
            data: response,
        });
    } catch (e) {
        handleHttp(res, 'ERROR_UPDATE_ITEM');
    }
};

const postItem = async ({ body }: Request, res: Response) => {
    try {
        const response = await insertLike(body);
        res.send({
            message: "Item Inserted",
            folio: timeStamp(),
            data: response,
        });
    } catch (e) {
        handleHttp(res, 'ERROR_POST_ITEM', e);
    }
};

const deleteItem = async ({ params }: Request, res: Response) => {
    try {
        const { id } = params;
        const response = await deleteLike(id);
        res.send({
            message: "Item Deleted",
            folio: timeStamp(),
            data: response,
        });
    } catch (e) {
        handleHttp(res, 'ERROR_DELETE_ITEM');
    }
};

export { getItem, getItems, updateItem, postItem, deleteItem };