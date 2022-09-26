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
exports.deleteOneBlog = exports.postBlog = exports.getBlogs = void 0;
const error_handle_1 = require("../utils/error.handle");
const blog_1 = require("../services/blog");
const timestamp_handle_1 = require("../utils/timestamp.handle");
const getBlogs = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield (0, blog_1.getAllBlogs)();
        const { user } = req;
        res.send({
            message: "Blogs Found",
            folio: (0, timestamp_handle_1.timeStamp)(),
            data: { response, user }
        });
    }
    catch (e) {
        (0, error_handle_1.handleHttp)(res, 'ERROR_GET_BLOGS');
    }
});
exports.getBlogs = getBlogs;
const postBlog = ({ body, user }, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield (0, blog_1.insertBlog)(body);
        res.send({
            message: "Blog inserted",
            folio: (0, timestamp_handle_1.timeStamp)(),
            data: { response, user }
        });
    }
    catch (e) {
        (0, error_handle_1.handleHttp)(res, 'ERROR_POST_BLOG');
    }
});
exports.postBlog = postBlog;
const deleteOneBlog = ({ params, user }, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = params;
        const response = yield (0, blog_1.deleteBlog)(id);
        res.send({
            menssage: "Blog Deleted",
            folio: (0, timestamp_handle_1.timeStamp)(),
            data: { response, user }
        });
    }
    catch (e) {
        (0, error_handle_1.handleHttp)(res, 'ERROR_DELETE_BLOG');
    }
});
exports.deleteOneBlog = deleteOneBlog;
