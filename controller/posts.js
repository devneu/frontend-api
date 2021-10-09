const Post = require('../models/post');
const NotFound = require("../customEror/NotFoundError");
const ServerError = require("../customEror/ServerError");

async function getPost(req, res, next) {
  const { id } = req.params;
  try {
    const post = await Post.findById(id);
    res.json(post);
  }catch (e){
    next(new NotFound(`Post with id: ${id} not found.`));
  }
}

async function deletePost(req, res, next) {
  const {id} = req.params;
  try {
    const deletedPost = await Post.findByIdAndDelete(id);
    res.json(deletedPost);
  } catch (error) {
    next(new NotFound(`Post with id: ${id} not found.`));
  }
}

async function updatePost(req, res, next) {
  const { title, author, text } = req.body;
  const { id } = req.params;
  try {
    const updatedPost = await Post.findByIdAndUpdate(id, { title, author, text }, { new: true });
    res.json(updatedPost);
  } catch (error) {
    next(new NotFound(`Post with id: ${id} not found.`));
  }
}

async function getPosts(req, res, next) {
  try {
    const posts = await Post.find().sort({ createdAt: -1 });
    res.json(posts);
  } catch (error) {
    next(new ServerError(`Server Error`));
  }
}


async function addPost(req, res, next) {
  const { title, author, text } = req.body;
  const post = new Post({ title, author, text });
  try {
    const createdPost = await post.save();
    res.json(createdPost);
  } catch (error) {
    next(new ServerError(`Server Error`));
  }
}

module.exports = {
  getPost,
  deletePost,
  updatePost,
  getPosts,
  addPost,
};
