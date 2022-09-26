"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteMusic = exports.getAllMusics = exports.insertMusic = void 0;
const music_1 = __importDefault(require("../models/music"));
const insertMusic = (item) => __awaiter(void 0, void 0, void 0, function* () {
    const responseMusic = yield music_1.default.create(item);
    return responseMusic;
});
exports.insertMusic = insertMusic;
const getAllMusics = () => __awaiter(void 0, void 0, void 0, function* () {
    const responseMusic = yield music_1.default.find({});
    return responseMusic;
});
exports.getAllMusics = getAllMusics;
const deleteMusic = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const responseMusic = yield music_1.default.deleteOne({ _id: id });
    return responseMusic;
});
exports.deleteMusic = deleteMusic;
