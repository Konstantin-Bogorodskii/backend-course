const express = require('express');
const router = express.Router();

router.get('/posts');
router.get('/posts/:id');

const Post = require('../models/Post.js');

router.post('/posts', async (req, res) => {
	try {
		const { author, title, content, picture } = req.body;
		const post = await Post.create({ author, title, content, picture });
		res.json(post);
	} catch (error) {
		res.status(500).json(error);
	}
});

router.put('/posts');

router.delete('/posts/:id');

module.exports = router;
