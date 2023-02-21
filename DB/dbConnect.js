const mongoose = require('mongoose');
const URL = process.env.DB_URL;

mongoose.connect(URL, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

const connection = mongoose.connection;

connection.on('connected', () => {
	console.log('db connected');
});

connection.on('error', (err) => {
	console.log('db error', err);
});
