const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const Post = require('./models/Post.js');

const app = express();

app.use(express.json());
app.use(cors());

app.post('/', async (req, res) => {
	try {
		const { author, title, content, picture } = req.body;
		const post = await Post.create({ author, title, content, picture });
		res.json(post);
	} catch (error) {
		res.status(500).json(error);
	}
});

const PORT = process.env.PORT || 7000;

const startApp = async () => {
	try {
		await mongoose.connect(process.env.DB_URL);

		app.listen(PORT, () => {
			console.log(`Server started on port: ${PORT}`);
		});
	} catch (error) {
		console.log('server error ==>', error);
	}
};

startApp();
