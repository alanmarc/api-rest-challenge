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
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteOneMusic = exports.postMusic = exports.getMusics = void 0;
const error_handle_1 = require("../utils/error.handle");
const music_1 = require("../services/music");
const timestamp_handle_1 = require("../utils/timestamp.handle");
const getMusics = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield (0, music_1.getAllMusics)();
        const { user } = req;
        res.send({
            message: "Musics Found",
            folio: (0, timestamp_handle_1.timeStamp)(),
            data: { response, user }
        });
    }
    catch (e) {
        (0, error_handle_1.handleHttp)(res, 'ERROR_GET_MUSICS');
    }
});
exports.getMusics = getMusics;
const postMusic = ({ body, user }, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield (0, music_1.insertMusic)(body);
        res.send({
            message: "Music inserted",
            folio: (0, timestamp_handle_1.timeStamp)(),
            data: { response, user }
        });
    }
    catch (e) {
        (0, error_handle_1.handleHttp)(res, 'ERROR_POST_MUSIC');
    }
});
exports.postMusic = postMusic;
const deleteOneMusic = ({ params, user }, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = params;
        const response = yield (0, music_1.deleteMusic)(id);
        res.send({
            menssage: "Music Deleted",
            folio: (0, timestamp_handle_1.timeStamp)(),
            data: { response, user }
        });
    }
    catch (e) {
        (0, error_handle_1.handleHttp)(res, 'ERROR_DELETE_MUSIC');
    }
});
exports.deleteOneMusic = deleteOneMusic;
