const PostModel = require('../models/PostModel.js');

class PostService {
	async createPost(post) {
		const createdPost = await PostModel.create(post);
		return createdPost;
	}

	async getAllPosts() {
		const allPosts = await PostModel.find();
		return allPosts;
	}

	async getPostById(id) {
		if (!id) {
			throw new Error('no id specified');
		}
		const post = await PostModel.findById(id);
		return post;
	}

	async updatePost(id, post) {
		if (!id) {
			throw new Error('no id specified');
		}

		const updatedPost = await PostModel.findByIdAndUpdate(id, post, { new: true });
		return updatedPost;
	}

	async deletePost(id) {
		if (!id) {
			throw new Error('no id specified');
		}

		const deletedPost = await PostModel.findByIdAndDelete(id);
		return deletedPost;
	}
}

module.exports = new PostService();
