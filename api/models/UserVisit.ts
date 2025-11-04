import mongoose from "mongoose";

const UserVisitSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  count: { type: Number, default: 0 },
  lastVisit: { type: Date, default: Date.now },
});

export const UserVisit = mongoose.models.UserVisit || mongoose.model("UserVisit", UserVisitSchema);
