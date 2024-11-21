import connectDB from "@/lib/mongodb";

export default async function handler(req, res) {
  try {
    const dbConnection = await connectDB();
    res.status(200).json({ message: "Connected to MongoDB", dbConnection });
  } catch (err) {
    console.error("MongoDB 연결 오류:", err);
    res.status(500).json({ error: "Failed to connect to MongoDB" });
  }
}
