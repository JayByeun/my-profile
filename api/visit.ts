import type { VercelRequest, VercelResponse } from "@vercel/node";
import mongoose from "mongoose";

let conn: typeof mongoose | null = null;

const connectDB = async () => {
  if (conn) return conn;
  const mongoURI = process.env.MONGODB;
  if (!mongoURI) throw new Error("MONGODB not set");
  conn = await mongoose.connect(mongoURI);
  return conn;
};

const UserVisitSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  count: { type: Number, default: 0 },
  lastVisit: { type: Date, default: Date.now },
});

const UserVisit = mongoose.models.UserVisit || mongoose.model("UserVisit", UserVisitSchema);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    await connectDB();

    const { username } = req.query;
    if (!username || typeof username !== "string") {
      return res.status(400).json({ error: "Username is required" });
    }

    const user = await UserVisit.findOneAndUpdate(
      { username },
      { $inc: { count: 1 }, $set: { lastVisit: new Date() } },
      { upsert: true, new: true }
    );

    const totalVisits = await UserVisit.aggregate([
      { $group: { _id: null, total: { $sum: "$count" } } }
    ]);

    const total = totalVisits[0]?.total || 0;

    res.status(200).json({
      user: { username: user.username, count: user.count },
      total,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
}
