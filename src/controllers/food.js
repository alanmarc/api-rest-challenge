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
exports.deleteOneFood = exports.postFood = exports.getFoods = void 0;
const error_handle_1 = require("../utils/error.handle");
const food_1 = require("../services/food");
const timestamp_handle_1 = require("../utils/timestamp.handle");
const getFoods = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield (0, food_1.getAllFoods)();
        const { user } = req;
        res.send({
            message: "Foods Found",
            folio: (0, timestamp_handle_1.timeStamp)(),
            data: { response, user }
        });
    }
    catch (e) {
        (0, error_handle_1.handleHttp)(res, 'ERROR_GET_FOODS');
    }
});
exports.getFoods = getFoods;
const postFood = ({ body, user }, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield (0, food_1.insertFood)(body);
        res.send({
            message: "Food inserted",
            folio: (0, timestamp_handle_1.timeStamp)(),
            data: { response, user }
        });
    }
    catch (e) {
        (0, error_handle_1.handleHttp)(res, 'ERROR_POST_FOOD');
    }
});
exports.postFood = postFood;
const deleteOneFood = ({ params, user }, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = params;
        const response = yield (0, food_1.deleteFood)(id);
        res.send({
            menssage: "Food Deleted",
            folio: (0, timestamp_handle_1.timeStamp)(),
            data: { response, user }
        });
    }
    catch (e) {
        (0, error_handle_1.handleHttp)(res, 'ERROR_DELETE_FOOD');
    }
});
exports.deleteOneFood = deleteOneFood;
