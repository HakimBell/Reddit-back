import {
  createSubReddit,
  deleteSubreddit,
  getAllSubReddits,
  getsubRedditById,
} from "../controllers/subRedditController";

const subRedditRouter = require("express").Router();

subRedditRouter.post("/newSubReddit", createSubReddit);
subRedditRouter.get("/allSubReddits", getAllSubReddits);
subRedditRouter.get("/:id", getsubRedditById);
subRedditRouter.delete("/:id/clean", deleteSubreddit);

export default subRedditRouter;
