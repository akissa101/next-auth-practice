import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import { AtRule } from "postcss";
import Article from "app/models/Article";
import dbConnect from "app/config/dbConnect";

export default async function handler(req, res) {
  const { method, query } = req;
  switch (method) {
    case "GET":
      // Connect to the database
      dbConnect();

      // GET all Articles
      const result = await Article.find();
      if (!result) return res.status(400).json("No articles found");

      res.status(200).json(result);
      break;

    case "POST":
      // connect to the database
      dbConnect();

      const { userid, title, content } = req.body;

      if (!userid || !title || !content)
        return res.status(400).json({ message: "All fields are required." });

      // check for duplicate title in the db
      const titleDuplicate = await Article.findOne({ title }).exec();
      if (titleDuplicate)
        return res.status(409).json({ message: "title is already exists" }); //Conflict

      const articles = await Article.create({ userid, title, content });
      res.status(201).json({ articles });
      break;

    default:
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
