import SubReddit from "../models/subRedditModel";
import Post from "../models/postModel";

const createSubReddit = async (req, res) => {
  const { title, description } = req.body;
  try {
    const newSubReddit = await new SubReddit({ title, description });
    newSubReddit.save();
    res.json(newSubReddit);
  } catch (error) {
    res.json({ error: error.message });
  }
};

const getAllSubReddits = async (req, res) => {
  try {
    const allSubReddits = await SubReddit.find();
    res.json(allSubReddits);
  } catch (error) {
    res.json({ error: error.message });
  }
};

const getsubRedditById = async (req, res) => {
  try {
    const oneSubreddit = await SubReddit.findById(req.params.id);
    if (!oneSubreddit) {
      res.json({ message: " subreddit not found !" });
    }
    res.json(oneSubreddit);
  } catch (error) {
    res.json({ error: error.message });
  }
};

const deleteSubreddit = async (req, res) => {
  const { id } = req.params;
  try {
    const deleteSubreddit = await SubReddit.findOneAndDelete(id);
    if (!deleteSubreddit) {
      return res.json({ error: "Subreddit pas trouvé" });
    }
    // res.json(deleteSubreddit);
    res.json({ message: "Subreddit deleted successfully" });
  } catch (error) {
    res.json({ error: error.message });
  }
};

const deletePostSubreddit = async (req, res) => {
  try {
    const postId = req.params.id_post;
    const subRedditId = req.params.id_subreddit;

    const subReddit = await SubReddit.findByIdAndUpdate(
      subRedditId,
      { $pull: { posts: postId } },
      { new: true }
    );

    res.json(subReddit);
  } catch (error) {
    res.json(error.message);
  }
};
export {
  createSubReddit,
  getAllSubReddits,
  getsubRedditById,
  deleteSubreddit,
  deletePostSubreddit,
};
