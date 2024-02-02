import Comment from "../models/commentModel";
import Post from "../models/postModel";

const createComment = async (req, res) => {
  try {
    const { content } = req.body;
    const postId = req.params.id_post;
    // Vérifiez si postId est fourni dans la requête
    if (!postId) {
      return res
        .status(400)
        .json({ error: "L'ID du post est requis pour créer un commentaire." });
    }

    // Vérifiez si le post existe
    const post = await Post.findById(postId);
    if (!post) {
      return res
        .status(404)
        .json({ error: "Le post associé n'a pas été trouvé." });
    }

    const newComment = new Comment({ content, post: post._id });
    await newComment.save();

    // Ajoutez le commentaire au tableau de commentaires du post
    post.comments.push(newComment._id);
    await post.save();

    res.json(newComment);

    // const { content } = req.body;
    // const newComment = new Comment({ content });
    // await newComment.save();
    // res.json(newComment);
  } catch (error) {
    console.error(error);
    res.json({ error: message.error });
  }
};

export { createComment };
