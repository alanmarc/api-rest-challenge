import { Response } from "express";
import { handleHttp } from "../utils/error.handle";
import { getAllMusics, insertMusic, deleteMusic } from "../services/music";
import { timeStamp } from "../utils/timestamp.handle";
import { RequestExt } from "../interfaces/requestExt.interface";

const getMusics = async (req: RequestExt, res: Response) => {
    try {
        const response = await getAllMusics();
        const { user } = req;
        res.send({
            message: "Musics Found",
            folio: timeStamp(),
            data: {response, user }
        });
    } catch (e) {
        handleHttp(res, 'ERROR_GET_MUSICS');
    }
};

const postMusic = async ({ body, user}: RequestExt, res: Response) => {
    try {
        const response = await insertMusic(body);
        res.send({
            message: "Music inserted",
            folio: timeStamp(),
            data: {response, user }
        });
    } catch (e) {
        handleHttp(res, 'ERROR_POST_MUSIC');
    }
};

const deleteOneMusic = async ({ params, user }: RequestExt, res: Response) => {
    try {
        const { id } = params;
        const response = await deleteMusic(id);
        res.send({
            menssage: "Music Deleted",
            folio: timeStamp(),
            data: {response, user }
        });
    } catch (e) {
        handleHttp(res, 'ERROR_DELETE_MUSIC');
    }
};

export { getMusics, postMusic, deleteOneMusic };