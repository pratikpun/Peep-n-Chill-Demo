import { request } from "express";
import { validationResult } from "express-validator";
import { addUserService } from "../services/allUsers.services.js";
// import bcrypt from "bcrypt";

// export const addUserController = async (req, res) => {
//   const errors = validationResult(req);
//   if (!errors.isEmpty()) {
//     res.status(422).send(`Adding user failed, error occures`);
//   }
//   try {
//     //hash password when adding new user
//     const newUser = {
//       email: "",
//       password: `${bcrypt.hash(req.body.password, 10)}`,
//     };
//     const addingNewUser = await addUserService(newUser);
//     res
//       .status(201)
//       .json({ message: "Successfully registered", user: addingNewUser });
//   } catch {
//     res.status(400).send("Adding user failed");
//   }
// };
export const addUserController = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(422).send(`Adding user failed, error occures`);
  }
  try {
    const user = await addUserService(req.body);
    res.status(201).json({ message: "Successfully registered", user });
  } catch {
    res.status(400).send("Adding user failed");
  }
};
