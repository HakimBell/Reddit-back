import {
  addPostSubreddit,
  createPost,
  deletePost,
  getAllPost,
} from "../controllers/postController";

const postRouter = require("express").Router();

postRouter.post("/submitpost", createPost);
postRouter.post("/allPosts", getAllPost);
postRouter.post("/:id_subreddit/addpostsubreddit/:id_post", addPostSubreddit);
postRouter.delete("/deletePost/:id", deletePost);

export default postRouter;
