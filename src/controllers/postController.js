import Post from "../models/postModel";
import SubReddit from "../models/subRedditModel";

const createPost = async (req, res) => {
  try {
    const { title, content } = req.body;
    const newPost = await new Post({ title, content });
    newPost.save();
    res.json(newPost);
    res.json("Post créé avec succés");
  } catch (error) {
    res.json(error.message);
  }
};

const getAllPost = async (req, res) => {
  try {
    const allPosts = await Post.find();
    res.json(allPosts);
    res.json("Voici tous les posts ");
  } catch (error) {
    res.json(error.message);
  }
};

const addPostSubreddit = async (req, res) => {
  try {
    const newPost = await Post.findById(req.params.id_post);

    const subReddit = await SubReddit.findById(req.params.id_subreddit);

    subReddit.posts.push(newPost);
    subReddit.save();
    res.json(subReddit);
  } catch (error) {
    res.json(error.message);
  }
};
export { createPost, getAllPost, addPostSubreddit };
