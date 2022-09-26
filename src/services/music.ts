import { Music } from "../interfaces/music.interface";
import MusicModel from "../models/music";

const insertMusic = async (item: Music) => {
    const responseMusic = await MusicModel.create(item);
    return responseMusic;
};

const getAllMusics = async () => {
    const responseMusic = await MusicModel.find({});
    return responseMusic;
};

const deleteMusic = async (id:string) => {
    const responseMusic = await MusicModel.deleteOne({_id:id});
    return responseMusic;
};

export { insertMusic, getAllMusics, deleteMusic };