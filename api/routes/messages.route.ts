export{}
import express from "express";
const router = express.Router();
import MessageController from "../controllers/message.cotroller";

router.post("/", MessageController.newMessage);
router.get("/:conversationId", MessageController.getMessage);

export default router;