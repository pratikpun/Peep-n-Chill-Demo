import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  userHandle: String,
  name: String,
  email: String,
  password: String,
});

const User = new mongoose.model("User", userSchema);
export default User;
