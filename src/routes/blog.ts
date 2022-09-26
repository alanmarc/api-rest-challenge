import { Router } from "express";
import { checkJwt } from "../middleware/sesion";
import { getBlogs, postBlog, deleteOneBlog } from "../controllers/blog";

const router = Router();

router.get("/", checkJwt, getBlogs);
router.post("/", checkJwt, postBlog);
router.delete("/:id", checkJwt, deleteOneBlog);

export { router };