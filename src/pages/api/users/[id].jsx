import dbConnect from "@/config/dbConnect";
import User from "@/models/User";

export default async function Home(req, res, id) {
  const { method, query } = req;

  if (method === "GET") {
    // Connect to the database
    dbConnect();

    // GET single user
    const user = await User.findOne({ id });
    if (!user) return res.status(400).json("No user found");
    res.status(200).json(user);
  }
}
