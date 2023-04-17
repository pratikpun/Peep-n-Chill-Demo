import User from "../models/user.model.js";

// export const addUserService = async (newUser) => {
//   try {
//     const { email } = newUser;
//     // console.log(newUser);
//     const findingUser = await User.findOne({ email }, (err, user) => {
//       if (user) {
//         res.send({ message: "Email already in use" });
//       } else {
//         const user = new User(newUser);
//         user.save();
//       }
//     });
//     console.log(findingUser);
//   } catch (e) {
//     throw e;
//   }
// };
export const addUserService = async (newUser) => {
  try {
    {
      const user = new User(newUser);
      console.log(user);
      return await user.save();
    }
  } catch (e) {
    throw e;
  }
};

export const userLogin = async (user) => {
  try {
    const user = User.findOne({ email }, (err, user) => {
      if (user && password === user.password) {
        res.send({ message: `Login success`, user });
      } else {
        res.status(404).send({ message: `Details not found` });
      }
    });
  } catch (e) {
    throw e;
  }
};
