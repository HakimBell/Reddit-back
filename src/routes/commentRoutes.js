import { createComment } from "../controllers/commentController";

const commentRouter = require("express").Router();

commentRouter.post("/:id_post/newcomment", createComment);

export default commentRouter;
