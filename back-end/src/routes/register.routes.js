import express from "express";
import { addUserController } from "../controllers/addUser.controller.js";

export const router = express.Router();
router.route(`/`).post(addUserController);
