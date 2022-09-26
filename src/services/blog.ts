import { Blog } from "../interfaces/blog.interface";
import BlogModel from "../models/blog";

const insertBlog = async (item: Blog) => {
    const responseBlog = await BlogModel.create(item);
    return responseBlog;
};

const getAllBlogs = async () => {
    const responseBlog = await BlogModel.find({});
    return responseBlog;
};

const deleteBlog = async (id:string) => {
    const responseBlog = await BlogModel.deleteOne({_id:id});
    return responseBlog;
};

export { insertBlog, getAllBlogs, deleteBlog };