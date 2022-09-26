import { Schema, model } from "mongoose";
import { Music } from "../interfaces/music.interface";

const MusicSchema = new Schema<Music>(
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

const MusicModel = model("Musics", MusicSchema);
export default MusicModel;