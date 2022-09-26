import { Response } from "express";
import { handleHttp } from "../utils/error.handle";
import { getAllBlogs, insertBlog, deleteBlog } from "../services/blog";
import { timeStamp } from "../utils/timestamp.handle";
import { RequestExt } from "../interfaces/requestExt.interface";

const getBlogs = async (req: RequestExt, res: Response) => {
    try {
        const response = await getAllBlogs();
        const { user } = req;
        res.send({
            message: "Blogs Found",
            folio: timeStamp(),
            data: {response, user }
        });
    } catch (e) {
        handleHttp(res, 'ERROR_GET_BLOGS');
    }
};

const postBlog = async ({ body, user }: RequestExt, res: Response) => {
    try {
        const response = await insertBlog(body);
        res.send({
            message: "Blog inserted",
            folio: timeStamp(),
            data: {response, user }
        });
    } catch (e) {
        handleHttp(res, 'ERROR_POST_BLOG');
    }
};

const deleteOneBlog = async ({ params , user }: RequestExt, res: Response) => {
    try {
        const { id } = params;
        const response = await deleteBlog(id);
        res.send({
            menssage: "Blog Deleted",
            folio: timeStamp(),
            data: {response, user }
        });
    } catch (e) {
        handleHttp(res, 'ERROR_DELETE_BLOG');
    }
};

export { getBlogs, postBlog, deleteOneBlog };