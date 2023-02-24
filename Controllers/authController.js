const User = require('../Models/userModel');

exports.login = async (req, res) => {
	try {
		const user = await User.findOne({ username: req.body.username, password: req.body.password });
		if (user) {
			res.status(200).json(user);
		} else {
			res.status(404).send('user not found');
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

exports.update = async (req, res) => {
	try {
		await User.findOneAndUpdate({ _id: req.body._id }, req.body);
		const user = await User.findOne({ _id: req.body._id });
		res.status(200).json(user);
	} catch (error) {
		res.status(500).json(error);
	}
};
