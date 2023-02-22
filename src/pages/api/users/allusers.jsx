import User from "../../../models/user";
import dbConnect from "../../../config/dbConnect";

export default async function handler(req, res) {
  if (req.method === "GET") {
    dbConnect();

    // GET all users
    const result = await User.find();
    console.log(result);
  }
}
