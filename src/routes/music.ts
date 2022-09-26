import { Router } from "express";
import { checkJwt } from "../middleware/sesion";
import { getMusics, postMusic, deleteOneMusic } from "../controllers/music";

const router = Router();

router.get("/", checkJwt, getMusics);
router.post("/", checkJwt, postMusic);
router.delete("/:id", checkJwt, deleteOneMusic);

export { router };