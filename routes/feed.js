const express = require('express');

const feedController = require('../controllers/feed');

const router = express.Router();

// GET /feed/posts
router.get('/posts',feedController.getPosts);

// POST /feed/post
router.post('/post',feedController.createPosts);

module.exports = router;