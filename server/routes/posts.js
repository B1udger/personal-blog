const express = require('express');
const Post = require('../models/Post');
const router = express.Router();






// -------CRUD-------
// Creating a new post 
router.post('/', async (req, res) => {
    const newPost = new Post(req, body);
    try{
        const savedPost = await newPost.save();
        res.status(201).json(savedPost);
    } catch (err) {
        res.status(400).json({ message: err.message});
    }
});

// GET METHOD FOR ALL POSTS
router.get('/', async (req, res) => {
    try{
        const posts = await Post.find();
        res.json(posts);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
});

// GET METHOD FOR A SINGE POST
router.get('/:id', async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
      if (!post) return res.status(404).json({ message: 'Post not found' });
      res.json(post);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });

  //UPDATE METHOD A POST
  router.put('/:id', async (req, res) =>{
    try{
        const updatePost = await Post.findByIdAndUpdate(req.params.id, req.body, {new: true});
        if (!updatedPost) return res.status(404).json({message: 'Post not found'});
        res.json(updatedPost);
    }
    catch (err){
        res.status(400).json({message: err.message});
    }
  });

  //DELETE METHOD A POST
  router.delete('/:id', async (req, res) => {
    try {
        const deletedPost = await Post.findByIdAndDelete(req.params.id);
        if(!deletedPost) return res.status(404).json({message: 'Post not found'});
        res.json({message: 'Post deleted!'});
    } catch (err) {
        res.status(500).json({message: err.message});
    }
  });

  module.exports = router;


