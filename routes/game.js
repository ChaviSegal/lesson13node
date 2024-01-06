import express from "express";
import {addGame,getAllGames,getGameById,deleteGame} from "../controllers/game.js";

const router=express.Router();

router.get("/",getAllGames);
router.get("/:id",getGameById);
router.delete("/:id",deleteGame);
router.post("/",addGame);

export default router;