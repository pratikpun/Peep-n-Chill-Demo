import express from "express";
import { allPeeps } from "../controllers/allPeeps.controller.js";
import Peep from "../models/peep.model.js";

export const router = express.Router();
// router.route("/").get(async (req, res) => {
//   //   res.send(`Getting all Peeps ...  ${allPeeps}`);
//   // from activity 13
//   //   Peep.find((error, allPeeps) => {
//   //     error ? res.status(404).send(`Not Found`) : res.json(allPeeps);
//   //     Peep.find({});
//   //   });
//   try {
//     const peeps = await Peep.find({});
//     res.json(peeps);
//     console.log(peeps);
//   } catch (e) {
//     console.log(e);
//   }
// });

// from todo full stack app in demos
router.get("/", allPeeps);
export { router as allPeeps };
