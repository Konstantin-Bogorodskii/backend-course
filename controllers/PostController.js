const Post = require('../models/Post.js');

class PostController {
	async createPost(req, res) {
		try {
			const { author, title, content, picture } = req.body;
			console.log('req.body ==>', req.body);
			const post = await Post.create({ author, title, content, picture });
			res.json(post);
		} catch (error) {
			res.status(500).json(error);
		}
	}

	async getAllPosts(req, res) {
		try {
			const posts = await Post.find();
			return res.json(posts);
		} catch (error) {
			res.status(500).json(error);
		}
	}

	async getPostById(req, res) {
		try {
			const { id } = req.params;
			if (!id) {
				res.status(400).json({ message: 'no id specified' });
			}
			const post = await Post.findById(id);
			return res.json(post);
		} catch (error) {
			res.status(500).json(error);
		}
	}

	async updatePost(req, res) {
		try {
			const { id } = req.params;
			if (!id) {
				res.status(400).json({ message: 'no id specified' });
			}

			const post = req.body;
			const updatedPost = await Post.findByIdAndUpdate(id, post, { new: true });
			return res.json(updatedPost);
		} catch (error) {
			res.status(500).json(error);
		}
	}

	async deletePost(req, res) {
		try {
			const { id } = req.params;
			if (!id) {
				res.status(400).json({ message: 'no id specified' });
			}

			const post = await Post.findByIdAndDelete(id);
			return res.json(post);
		} catch (error) {
			res.status(500).json(error);
		}
	}
}

module.exports = new PostController();
