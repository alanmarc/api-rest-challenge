"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const IitemSchema = new mongoose_1.Schema({
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
const ItemModel = (0, mongoose_1.model)("items", IitemSchema);
exports.default = ItemModel;
