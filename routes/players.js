import express from 'express';

import { getPlayers, createPlayer, getPlayer, deletePlayer, updatePlayer } from "../controllers/Players.js";

const router = express.Router();

router.get("/", getPlayers);
router.get("/:id", getPlayer);
router.post("/", createPlayer);
router.delete("/:id", deletePlayer);
router.put("/", updatePlayer);

export default router;