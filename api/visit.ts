import mongoose from "mongoose";

let conn: typeof mongoose | null = null;

const connectDB = async () => {
  if (conn) return conn;
  if (!process.env.MONGODB) throw new Error("MONGODB not set");
  conn = await mongoose.connect(process.env.MONGODB);
  return conn;
};

export default async function handler(req, res) {
  await connectDB();

  const Visit = mongoose.models.Visit || mongoose.model(
    "Visit",
    new mongoose.Schema({ date: { type: Date, default: Date.now } })
  );

  await Visit.create({});

  const total = await Visit.countDocuments();
  const today = await Visit.countDocuments({
    date: { $gte: new Date(new Date().setHours(0, 0, 0, 0)) },
  });

  res.status(200).json({ total, today });
}
