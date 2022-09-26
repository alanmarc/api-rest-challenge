import { Schema, model,} from "mongoose";
import { Like } from "../interfaces/like.interface";

const IitemSchema = new Schema<Like>(
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

const ItemModel = model("items", IitemSchema);
export default ItemModel;