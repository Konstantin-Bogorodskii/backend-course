const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const router = require('./router/router.js');

const app = express();

app.use(express.json());
app.use('/api', router);
// app.use('/posts', postsRouter); // we can create multiple routers for multiple endpoints
app.use(cors());

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
