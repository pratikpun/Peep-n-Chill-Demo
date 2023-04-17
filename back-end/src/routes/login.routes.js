import express from "express";
import { userLoginController } from "../controllers/userLogin.controller.js";

export const router = express.Router();
router.route(`/`).post(userLoginController);
