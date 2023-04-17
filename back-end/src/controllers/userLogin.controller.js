import express from "express";
import { userLogin } from "../services/allUsers.services.js";

const router = express.Router();

import User from "../models/user.model.js";

export const userLoginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (user && password === user.password) {
      res.send({ message: `Login success`, user });
    } else {
      res.status(404).send({ message: `Details not found` });
    }
  } catch (e) {
    throw e;
  }
};
// router.route(`/`).post(async (req, res) => {
//   const { email, password } = req.body;
//   try {
//     const user = await User.findOne({ email }, (err, user) => {
//       if (user && password === user.password) {
//         res.send({ message: `Login success`, user });
//       } else {
//         res.status(404).send({ message: `Details not found` });
//       }
//     });
//   } catch (e) {
//     throw e;
//   }
// });

//export { router as userLoginController };
