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
exports.deleteFood = exports.getAllFoods = exports.insertFood = void 0;
const food_1 = __importDefault(require("../models/food"));
const insertFood = (item) => __awaiter(void 0, void 0, void 0, function* () {
    const responseFood = yield food_1.default.create(item);
    return responseFood;
});
exports.insertFood = insertFood;
const getAllFoods = () => __awaiter(void 0, void 0, void 0, function* () {
    const responseFood = yield food_1.default.find({});
    return responseFood;
});
exports.getAllFoods = getAllFoods;
const deleteFood = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const responseFood = yield food_1.default.deleteOne({ _id: id });
    return responseFood;
});
exports.deleteFood = deleteFood;
