import Users from "../../app/models/User";
import dbConnect from "../../app/config/dbConnect";

export default async function Home(req, res) {
  const { method, query } = req;

  switch (method) {
    case "GET":
      // Connect to the database
      dbConnect();

      // GET all users
      const users = await Users.find();
      if (!users) return res.status(400).json("No users found");

      res.status(200).json(users);
      break;

    case "POST":
      // Post data
      res.status(200).json({ response: "POST successful" });
      break;

    default:
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
