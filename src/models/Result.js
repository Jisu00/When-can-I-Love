import mongoose from "mongoose";

const resultSchema = new mongoose.Schema({
  user: { type: Number, default: 1 },
  resultScore: { type: Number },
  resultAbility: { type: Object },
});

const model = mongoose.model("Result", resultSchema);
export default model;
