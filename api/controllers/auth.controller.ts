export{}
import {Request, Response} from "express";
const bcrypt = require("bcrypt");
const User = require("../models/User.model");


const userController = {
    register: async(req: Request, res: Response) => {
        try{
            console.log("1");
            console.log(req.body);
            console.log("1");
            const salt = await bcrypt.genSalt(10);
             const hasedPassword = await bcrypt.hash(req.body.password, salt);
             
             // create new user
             const newUser = new User({
                 email: req.body.email,
                 password: hasedPassword,
             });
         
                 // save user and respond
             const user = await newUser.save();
             res.status(200).json(user);
         }
         catch(err){
             res.status(500).json("124");
         }
    },
    login: async(req: Request, res: Response) =>{
        try{
            const user = await User.findOne({email: req.body.email});
            !user && res.status(404).json('user not found');
    
            const validPassword = await bcrypt.compare(req.body.password, user.password);
            !validPassword && res.status(404).json('wrong password');
                
            res.status(200).json(user)
        }
        catch(err){
           res.status(500).json(err);
        }
    }
}

export default userController;

// export const register= async (req:Request, res:Response) =>{
    
//     try{
        
//        const salt = await bcrypt.genSalt(10);
//         const hasedPassword = await bcrypt.hash(req.body.password, salt);
//         // create new user
//         const newUser = new User({
//             email: req.body.email,
//             password: hasedPassword,
//         });
    
//             // save user and respond
//         const user = await newUser.save();
//         res.status(200).json(user);
//     }
//     catch(err){
//         res.status(500).json("124");
//     }
// }

// export const login= async(req:Request, res:Response) => {
//     try{
//         const user = await User.findOne({email: req.body.email});
//         !user && res.status(404).json('user not found');

//         const validPassword = await bcrypt.compare(req.body.password, user.password);
//         !validPassword && res.status(404).json('wrong password');
            
//         res.status(200).json(user)
//     }
//     catch(err){
//        res.status(500).json(err);
//     }
// }
    


