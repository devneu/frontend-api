import express from "express";

import { addPost, deletePost, editPost, getPost, getPosts } from "../controller/post-controller";


export  const postRouter = express.Router();

///get all post
postRouter.get('/posts', getPosts);
///add new post
postRouter.post('/post', addPost);
//get post by id
postRouter.get('/post/:id', getPost);
//delete post by id
postRouter.delete('/post/:id', deletePost);
//Update post by id
postRouter.put('/post/:id', editPost);


