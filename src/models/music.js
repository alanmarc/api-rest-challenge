"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const MusicSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    autor: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
    versionKey: false,
});
const MusicModel = (0, mongoose_1.model)("Musics", MusicSchema);
exports.default = MusicModel;
