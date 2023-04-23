export{}
import {Request, Response} from "express";
const Conversation = require("../models/Conversation.model");

const ConversationController = {
    newConversation : async(req: Request, res: Response) => {
        const newConversation = new Conversation({
            members: [req.body.senderId, req.body.receiverId],
        });

        try {
            const savedConversation = await newConversation.save();
            res.status(200).json(savedConversation);
          } catch (err) {
            res.status(500).json(err);
          }
    },
    getUserConversations: async(req: Request, res: Response) => {
        try {
            const conversation = await Conversation.find({
              members: { $in: [req.params.userId] },
            });
            res.status(200).json(conversation);
          } catch (err) {
            res.status(500).json(err);
          }
    },
    getConversation: async(req: Request, res: Response) =>{
        try {
            const conversation = await Conversation.findOne({
              members: { $all: [req.params.userId, req.params.secondUserId] },
            });
            res.status(200).json(conversation)
          } catch (err) {
            res.status(500).json(err);
          }
    }
}

export default ConversationController;