export{}
import express from "express";
const router = express.Router();
import ConversationController from "../controllers/convertation.controller";

router.post("/", ConversationController.newConversation);
router.get("/:userId", ConversationController.getUserConversations);
router.get("/:userId/:secondUserId", ConversationController.getConversation);

export default router;
