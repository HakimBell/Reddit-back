import Post from "../models/postModel";

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
export { createPost, getAllPost };
