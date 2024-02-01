import { mongoose, Schema } from "mongoose";

const postSchema = new Schema({
  title: { type: String, required: true },
  content: String,
  // user: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],
});

const Post = mongoose.model("Post", postSchema);

export default Post;
