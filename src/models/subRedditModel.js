import { mongoose, Schema } from "mongoose";

const subRedditSchema = new Schema({
  title: String,
  description: String,
  posts: [{ type: Schema.Types.ObjectId, ref: "Post" }],
});

const SubReddit = mongoose.model("SubReddit", subRedditSchema);

export default SubReddit;
