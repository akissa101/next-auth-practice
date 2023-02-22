import User from "../../models/user";
import dbConnect from "../../config/dbConnect";
import mongoose from "mongoose";
import bcrypt from "bcryptjs";

export default async function handler(req, res) {
  if (req.method === "POST") {
    dbConnect();

    const { username, name, email, password } = req.body;

    if (!email) return res.status(400).json({ message: "Email required." });
    if (!username)
      return res.status(400).json({ message: "Username required." });
    if (!name) return res.status(400).json({ message: "Name required." });
    if (!password)
      return res.status(400).json({ message: "Password  required." });

    // check for duplicate email in the db
    const emailDuplicate = await User.findOne({ email }).exec();
    if (emailDuplicate)
      return res.status(409).json({ message: "email is already exists" }); //Conflict

    // check for duplicate username in the db
    const usernameDuplicate = await User.findOne({ username }).exec();
    if (usernameDuplicate)
      return res.status(409).json({ message: "username is already taken" }); //Conflict

    const user = await User.create({ username, name, email, password });
    res.status(201).json({ user });
  }
}
