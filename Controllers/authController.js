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
		const userName = req.body.username;
		const user = await User.findOne({ username: userName });

		if (user) {
			return res.status(400).json({ message: 'user already exist' });
		}

		const newUser = await User.create(req.body);
		res.status(201).send('success register');
	} catch (error) {
		res.status(500).json({ error, message: 'error register' });
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
