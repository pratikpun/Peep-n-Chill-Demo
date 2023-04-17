import express from "express";
import Peep from "../models/peep.model.js";
import { addPeepAsync } from "../controllers/addPeep.controller.js";

export const router = express.Router();

router.post(`/`, async (req, res) => {
  // res.send(`Adding Peep . . .`);
  const peep = new Peep(req.body);
  // console.log(req.body);
  await peep
    .save()
    .then((peep) => {
      res.status(200).json({ msg: `Peep posted successfully` });
    })
    .catch((err) => res.status(400).send(`Peep failed to post ... `));
});
// router.route("/", addPeepAsync);
