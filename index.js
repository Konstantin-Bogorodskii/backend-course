require('dotenv').config();

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 7000;

const app = express();

app.use(express.json());
app.use(cors());

app.post('/', (req, res) => {
	console.log('req ==>', req.body);
	res.status(200).json('server works');
});

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
