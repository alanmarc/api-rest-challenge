import { Schema, model } from "mongoose";
import { Blog } from "../interfaces/blog.interface";

const BlogSchema = new Schema<Blog>(
    {
        name: {
            type: String,
            required: true,
        },
        autor: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const BlogModel = model("Blogs", BlogSchema);
export default BlogModel;