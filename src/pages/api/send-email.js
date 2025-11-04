import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
const app = express();
app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());
app.post("/send-email", async (req, res) => {
    const { name, email, subject, message } = req.body;
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });
    try {
        await transporter.sendMail({
            from: `"${name}" <${email}>`,
            to: process.env.EMAIL_USER,
            subject,
            text: message,
        });
        res.json({ success: true });
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ success: false });
    }
});
app.listen(5173, () => console.log("Server running on port 5173"));
