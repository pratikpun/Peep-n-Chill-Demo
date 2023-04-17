import express from "express";
import mongoose from "mongoose";
import Peep from "../models/peep.model.js";
export const router = express.Router();

router
  .route("/:id")
  .get(async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res
        .status(404)
        .json({ error: "No peeps found from this user :(" });
    }
    const userPeeps = await Peep.findById(id);
    if (!userPeeps) {
      return res.status(404).json({ error: "User not found" });
    }

    res.status(200).json(userPeeps);

    // try {
    //   const userPeeps = await Peep.findById(id, (error, peep) => {
    //     if (!peep) {
    //       request.status(404).send(`User not found`);
    //     } else {
    //       res.json(userPeeps);
    //       res.send(userPeeps);
    //     }
    //   });
    // } catch (e) {
    //   res.send(`Couldn't find user peeps`);
    // }
    // Peep.findById(id, (error, peep) => {
    //   if (!peep) {
    //     request.status(404).send(`User not found`);
    //   } else {
    //     request.json(peep);
    //   }
    // });
    //res.send(`Getting all peep from this user ${id} ... `);
  })
  .post((req, res) => {
    const id = req.params.userID;
    res.send(`Updating peep from user ${id} ...`);
  });
