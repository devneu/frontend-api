import Post from "../models/post";
import {Request, Response} from "express";

const handleError =  (res: Response, error:Error) => {
    res.status(500).send(error.message);
};

export const getPost =  (req: Request, res: Response) => {
    Post
        .findById(req.params.id)
        .then((post)=> res.status(200).json(post))
        .catch((error) => handleError(res, error));
}

export const deletePost =  (req: Request, res: Response) => {
    Post
        .findByIdAndDelete(req.params.id)
        .then( () => res.status(200).json(req.params.id))
        .catch((error) => handleError(res, error));
}

export const editPost = (req: Request, res: Response) => {
    const { title, author, text } = req.body;
    const { id } = req.params;
    Post
        .findByIdAndUpdate(id, { title, author, text },{ new:true })
        .then((post)=> res.status(200).json(post))
        .catch((error) => handleError(res, error));
}

export const getPosts = (req: Request, res: Response) => {
    Post
        .find()
        .sort({ createdAt: -1 })
        .then((posts)=> res.status(200).json(posts))
        .catch((error) => handleError(res, error));
}


export const addPost = (req: Request, res: Response) => {
    const { title, author, text } = req.body;
    const post = new Post({ title, author, text });
    post
        .save()
        .then((post)=> res.status(200).json(post))
        .catch((error) => handleError(res, error));
}
