import { Schema, model } from "mongoose";
import { Food } from "../interfaces/food.interface";

const FoodSchema = new Schema<Food>(
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

const FoodModel = model("Foods", FoodSchema);
export default FoodModel;