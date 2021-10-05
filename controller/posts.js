const Post = require('../models/post');
const deleteSchema = require('../validation/deleteShema');


const handleError =  (res, error) => {
    res.status(500).send(error.message);
};

const getPost = async (req, res) => {
    await Post
        .findById(req.params.id)
        .then((post)=> res.status(200).json(post))
        .catch((error) => handleError(res, error));
}

const deletePost = async (req, res) => {
    const result = await deleteSchema.validateAsync(req.body);
    if (result.user === process.env.User &&  result.password === process.env.PASSWORD) {
        await Post
          .findByIdAndDelete(req.params.id)
          .then(() => res.status(200).json(req.params.id))
          .catch((error) => handleError(res, error));
    }else{
        res.status(500).json({
            error:'invalid user or password ',
            })
    }
}

const editPost = async(req, res) => {
    const { title, author, text } = req.body;
    const { id } = req.params;
    await Post
        .findByIdAndUpdate(id, { title, author, text },{ new:true })
        .then((post)=> res.status(200).json(post))
        .catch((error) => handleError(res, error));
}

const getPosts = async (req, res) => {
    await Post
        .find()
        .sort({ createdAt: -1 })
        .then((posts)=> res.status(200).json(posts))
        .catch((error) => handleError(res, error));
}


const addPost = async (req, res) => {
    const { title, author, text } = req.body;
    const post = new Post({ title, author, text });
    await post
        .save()
      // eslint-disable-next-line no-shadow
        .then((post)=> res.status(200).json(post))
        .catch((error) => handleError(res, error));
}

module.exports = {
    getPost,
    deletePost,
    editPost,
    getPosts,
    addPost,
};
