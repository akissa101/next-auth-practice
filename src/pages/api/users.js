import Users from "../../models/user";
import dbConnect from "../../config/dbConnect";

export default async function Home(req, res) {
  const { method, query } = req;

  console.log("method: ", method);

  switch (method) {
    case "GET":
      // Get data
      dbConnect();

      // GET all users

      const result = await Users.find();
      console.log(result);

      res.status(200).json(result);
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
