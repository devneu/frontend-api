const express = require('express');

const {
  getPost,
  deletePost,
  updatePost,
  getPosts,
  addPost
} = require('../controller/posts');
const { postValidationError } = require('../validation/post.validation');


const router = express.Router();

router.get('/', getPosts);

router.post('/',postValidationError, addPost);

router.get('/:id', getPost);

router.delete('/:id', deletePost);

router.put('/:id', postValidationError,updatePost);

module.exports = router;
