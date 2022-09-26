import { Like } from "../interfaces/like.interface";
import ItemModel from "../models/item";

const insertLike = async (item: Like) => {
    const responseItem = await ItemModel.create(item);
    return responseItem;
};

const getLikes = async () => {
    const responseItem = await ItemModel.find({});
    return responseItem;
};

const getLike = async (id:string) => {
    const responseItem = await ItemModel.findOne({_id:id});
    return responseItem;
};

const updateLike = async (id:string, data: Like) => {
    const responseItem = await ItemModel.findOneAndUpdate({ _id: id}, data ,{
        new: true,
    });
    return responseItem;
};

const deleteLike = async (id:string) => {
    const responseItem = await ItemModel.deleteOne({_id:id});
    return responseItem;
};

export { insertLike, getLikes, getLike, updateLike, deleteLike };