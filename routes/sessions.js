import express from 'express';

import { getSessions, createSession, getSession, deleteSession, updateSession } from "../controllers/sessions.js";

const router = express.Router();

router.get("/", getSessions);
router.get("/:id", getSession);
router.post("/", createSession);
router.delete("/:id", deleteSession);
router.put("/:id", updateSession);

export default router;