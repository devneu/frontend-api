const express = require('express');

const {
  getPost,
  deletePost,
  updatePost,
  getPosts,
  addPost,
  postValidation,
} = require('../controller/posts');


const router = express.Router();

router.get('/', getPosts);

router.post('/', postValidation, addPost);

router.get('/:id', getPost);

router.delete('/:id', deletePost);

router.put('/:id', postValidation,updatePost);

module.exports = router;
