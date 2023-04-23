export{}
import {Request, Response} from "express";
const Message = require("../models/Message.model");

const MessageController = {
    newMessage: async(req: Request, res: Response)=>{
        const newMessage = new Message(req.body);
        try{
            const savedMessage = await newMessage.save();
            res.status(200).json(savedMessage);
        }
        catch(err){
            res.status(500).json(err);
        }
    },
    getMessage: async(req: Request, res: Response) =>{
        try{
            const messages = await Message.find({
                conversationId: req.params.conversationId,
            });
            res.status(200).json(messages);
        }
        catch (err) {
            res.status(500).json(err);
          }
    }
}

export default MessageController;
