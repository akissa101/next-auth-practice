import User from "../../models/user";
import dbConnect from "../../config/dbConnect";
import mongoose from "mongoose";
import bcrypt from "bcryptjs";

export default async function handler(req, res) {
  if (req.method === "POST") {
    dbConnect();

    const { name, email, password } = req.body;

    if (!email) return res.status(400).json({ message: "Email required." });
    if (!name) return res.status(400).json({ message: "Name required." });
    if (!password)
      return res.status(400).json({ message: "Password  required." });

    // check for duplicate email in the db
    const duplicate = await User.findOne({ email }).exec();
    if (duplicate) return res.sendStatus(409); //Conflict

    const user = await User.create({ name, email, password });
    res.status(201).json({ user });
  }
}
