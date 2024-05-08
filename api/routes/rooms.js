import express from "express";
const router = express.Router();

import { createRoom, getRoom } from "../controllers/room.js";
import { getRooms } from "../controllers/room.js";

router.post("/createroom", createRoom);
router.get("/rooms", getRooms);
router.get("/:id", getRoom);

export default router;