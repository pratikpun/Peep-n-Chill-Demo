import axios from "axios";

export const getAllPeeps = async () => {
  try {
    const res = await axios.get(process.env.REACT_APP_PEEP_URL);
    if (Array.isArray(res.data) && res.data.length > 0)
      return { peeps: res.data, status: res.status };
    throw new Error(`Peeps not found`);
  } catch (e) {
    return {
      peeps: [],
      status: e.response?.status ?? 204,
    };
  }
};

export const submitPeepForm = async (peep) => {
  try {
    const res = await axios.post(`${process.env.REACT_APP_PEEP_URL}/add`, peep);
    return { peep: res.data, status: res.status };
  } catch (e) {
    return {
      status: e.response?.status,
      error: {
        type: `post`,
        message: e.response?.message,
      },
    };
  }
};
