import mongoose from "mongoose";

const peepSchema = new mongoose.Schema(
  {
    userHandle: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    // userHandle: { type: String },
    peepTitle: { type: String },
    peepContent: { type: String },
  },
  { timestamps: true }
);

const Peep = mongoose.model("Peep", peepSchema);
export default Peep;
