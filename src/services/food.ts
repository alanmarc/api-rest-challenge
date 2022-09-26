import { Food } from "../interfaces/food.interface";
import FoodModel from "../models/food";


const insertFood = async (item: Food) => {
    const responseFood = await FoodModel.create(item);
    return responseFood;
};

const getAllFoods = async () => {
    const responseFood = await FoodModel.find({});
    return responseFood;
};

const deleteFood = async (id:string) => {
    const responseFood = await FoodModel.deleteOne({_id:id});
    return responseFood;
};

export { insertFood, getAllFoods, deleteFood };