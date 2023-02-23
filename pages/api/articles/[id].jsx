import dbConnect from "app/config/dbConnect";
import Article from "app/models/Article";

export default async function Home(req, res, id) {
  const { method, query } = req;

  if (method === "GET") {
    // Connect to the database
    dbConnect();

    // GET single article
    const article = await Article.findOne({ id });
    if (!article) return res.status(400).json("No article found");
    res.status(200).json(article);
  }
}
