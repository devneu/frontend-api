const express = require('express');

const {
  getPost,
  deletePost,
  editPost,
  getPosts,
  addPost
} = require('../controller/posts');


const router = express.Router();

router.get('/', getPosts);

router.post('/', addPost);

router.get('/:id', getPost);

router.delete('/:id', deletePost);

router.put('/:id', editPost);

module.exports = router;
