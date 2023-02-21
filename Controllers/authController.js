const User = require('../Models/userModel');

exports.login = async (req, res) => {
	try {
		const user = await User.findOne({ username: req.body.username, password: req.body.password });
		if (user) {
			res.status(200).json(user);
		}
	} catch (error) {
		res.status(500).json(error);
	}
};

exports.register = async (req, res) => {
	try {
		const user = await User.create(req.body);
		res.status(201).send('success register');
	} catch (error) {
		res.status(500).json(error);
	}
};
