"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const UserSchema = new mongoose_1.Schema({
    user: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    roll: {
        type: String,
        enum: ["cliente", "admin"],
    },
    phone: {
        type: Number,
    },
    name: {
        type: String,
    },
    lastName: {
        type: String,
    },
    secondSurname: {
        type: String,
    },
    gender: {
        type: String,
        enum: ["femenino", "masculino"],
    },
    birthDate: {
        type: String,
    },
}, {
    timestamps: true,
    versionKey: false,
});
const UserModel = (0, mongoose_1.model)("users", UserSchema);
exports.default = UserModel;
