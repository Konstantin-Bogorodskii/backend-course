const express = require('express');
const cors = require('cors');

const PORT = 5000;

const app = express();
app.use(cors());

const appStart = async () => {
	try {
		app.listen(PORT, () => {
			console.log(`Server started on port: ${PORT}`);
		});
	} catch (error) {
		console.log('server error ==>', error);
	}
};

appStart();
