export{}
// import {register, login} from "../controllers/auth.controller";
import userController from "../controllers/auth.controller";
import express from "express";
const router = express.Router();

router.post('/register', userController.register);
router.post('/login', userController.login);

export default router;