import Peep from "../models/peep.model.js";

const addPeepAsync = async (req, res) => {
  const { userID, userHandle, peepDateCreated, peepTitle, peepContent } =
    req.body;
  try {
    const peep = await Peep.create({
      userID,
      peepDateCreated,
      userHandle,
      peepTitle,
      peepContent,
    });
    res.status(200).json(peep);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export { addPeepAsync };
