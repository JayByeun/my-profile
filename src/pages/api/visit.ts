import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
app.use(cors());

let conn: typeof mongoose | null = null;

const connectDB = async () => {
  if (conn) return conn;
  conn = await mongoose.connect(process.env.MONGODB!);
  return conn;
};

const visitSchema = new mongoose.Schema({
    date: {type: Date, default: Date.now},
});

const Visit = mongoose.model("Visit", visitSchema);

app.get("api/visit", async(req, res) => {
     await connectDB();

    await Visit.create({});
    const totalVisits = await Visit.countDocuments();

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const todayVisits = await Visit.countDocuments({
        date: {$gte: today},
    });

    res.json({total: todayVisits, today: todayVisits});
});

app.listen(5000, () => console.log("Server running on port 5000"));