const PostModel = require('../models/PostModel.js');
const PostService = require('../services/PostService.js');

class PostController {
	async createPost(req, res) {
		try {
			const post = req.body;

			const createdPost = await PostService.createPost(post);
			res.json(createdPost);
		} catch (error) {
			res.status(500).json(error.message);
		}
	}

	async getAllPosts(req, res) {
		try {
			const posts = await PostService.getAllPosts();
			console.log('posts ==>', posts);
			return res.json(posts);
		} catch (error) {
			res.status(500).json(error.message);
		}
	}

	async getPostById(req, res) {
		try {
			const { id } = req.params;
			const post = await PostService.getPostById(id);
			return res.json(post);
		} catch (error) {
			res.status(500).json(error.message);
		}
	}

	async updatePost(req, res) {
		try {
			const { id } = req.params;

			const post = req.body;
			const updatedPost = await PostService.updatePost(id, post);
			return res.json(updatedPost);
		} catch (error) {
			res.status(500).json(error.message);
		}
	}

	async deletePost(req, res) {
		try {
			const { id } = req.params;

			const deletedPost = await PostService.deletePost(id);
			return res.json(deletedPost);
		} catch (error) {
			res.status(500).json(error.message);
		}
	}
}

module.exports = new PostController();
