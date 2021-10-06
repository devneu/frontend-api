const Post = require('../models/post');

async function getPost(req, res) {
  const { id } = req.params;
  try {
    const post = await Post.findById(id);
    res.json(post);
  } catch (error) {
    res.status(404).json({message:'Not found Id'})
  }
}

async function deletePost(req, res) {
  const { id } = req.params;
  try {
    let deletedPost = await Post.findByIdAndDelete(id);
    res.json(deletedPost);
  } catch (error) {
    res.status(404).json({message:'Not found Id'})
  }
}

async function updatePost(req, res) {
  const { title, author, text } = req.body;
  const { id } = req.params;
  try {
    let updatePost = await Post.findByIdAndUpdate(id, { title, author, text }, { new: true });
    res.json(updatePost);
  } catch (error) {
    res.status(404).json({message:'Not found Id'})
  }
}

async function getPosts(req, res) {
  try {
    const posts = await Post.find().sort({ createdAt: -1 });
    res.json(posts);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

async function addPost(req, res) {
  const { title, author, text } = req.body;
  const post = new Post({ title, author, text });
  try {
    const createdPost = await post.save();
    res.json(createdPost);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

module.exports = {
  getPost,
  deletePost,
  updatePost,
  getPosts,
  addPost,
};
