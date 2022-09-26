import { Router } from "express";
import { checkJwt } from "../middleware/sesion";
import { getFoods, postFood, deleteOneFood } from "../controllers/food";

const router = Router();

router.get("/", checkJwt, getFoods);
router.post("/", checkJwt, postFood);
router.delete("/:id", checkJwt, deleteOneFood);

export { router };