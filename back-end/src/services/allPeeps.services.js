export const getAllPeeps = async () => {
  try {
    return await Peep.find({});
  } catch (e) {
    throw e;
  }
};
