import connectDb from "@/middleware/mongodb";
import User from "@/models/User";

export default async (req, res) => {
  connectDb();
  if (req.method === "POST") {
    try {
      const { name, email, phonenumber, city, subject, score } = req.body;
      console.log(req.body);
      const newUser = new User({
        name,
        email,
        phonenumber,
        city,
        subject,
        score,
      });
      const savedUser = await newUser.save();
      res.status(201).json(savedUser);
    } catch (error) {
      res.status(500).json({ error: "Error adding the User." });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
};
