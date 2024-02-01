import { createPost, getAllPost } from "../controllers/postController";

const postRouter = require("express").Router();

postRouter.post("/submitpost", createPost);
postRouter.post("/allPosts", getAllPost);

export default postRouter;
