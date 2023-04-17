import { getAllPeeps } from "../services/allPeeps.services.js";
import Peep from "../models/peep.model.js";

export const allPeeps = async (req, res) => {
  //   try {
  //     const peeps = await getAllPeeps();
  //     res.json(peeps);
  //   } catch (e) {
  //     res.status(404).send(`Peeps not found`);
  //   }
  try {
    const allPeeps = await Peep.find({})
      .populate("userHandle")
      .sort({ createdAt: -1 });
    res.status(200).json(allPeeps);
  } catch (e) {
    throw e;
  }
};
