import {
  addPostSubreddit,
  createPost,
  getAllPost,
} from "../controllers/postController";

const postRouter = require("express").Router();

postRouter.post("/submitpost", createPost);
postRouter.post("/allPosts", getAllPost);
postRouter.post("/:id_subreddit/addpostsubreddit/:id_post", addPostSubreddit);

export default postRouter;
