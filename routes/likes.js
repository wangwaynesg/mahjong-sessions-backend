import express from "express";

import { getLikes, createLikes, updateLikes } from "../controllers/likes.js";

const router = express.Router();

router.get("/:id", getLikes);
router.post("/", createLikes);
router.put("/:id", updateLikes);

export default router;