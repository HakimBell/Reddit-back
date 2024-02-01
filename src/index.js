import express from "express";
import "dotenv/config";
import cors from "cors";
import mongoose from "mongoose";
import userRouter from "./routes/userRoutes";
import subRedditRouter from "./routes/subRedditRoutes";

const app = express();
const port = process.env.PORT;

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGODB_URI);
  console.log(`[DATABASE] MongoDB is Connected`);
}

// Utilisation de middleware pour traiter les données JSON dans les requêtes
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => res.send("SALUT HAKIM DADDY MICHELIN"));
app.use("/auth", userRouter);
app.use("/subreddit", subRedditRouter);

app.listen(port, () =>
  console.log(`[SERVER] listening at http://localhost:${port}`)
);
