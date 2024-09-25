const User = require('../Models/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.login = async (req, res, next) => {
	try {
		const user = await User.findOne({ username: req.body.username });
		if (user) {
			const isMatch = await bcrypt.compare(req.body.password, user.password);
			if (!isMatch) {
				const error = new Error('Invalid password');
				error.status = 400;
				throw error;
			}
			const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
			res.status(200).json({ user, token });
		} else {
			const error = new Error('User not found');
			error.status = 404;
			throw error;
		}
	} catch (error) {
		next(error);
	}
};

exports.register = async (req, res, next) => {
	try {
		const userName = req.body.username;
		const password = req.body.password;
		const user = await User.findOne({ username: userName });

		if (user) {
			const error = new Error('User already exists');
			error.status = 400;
			throw error;
		}

		const salt = await bcrypt.genSalt(10);
		const hashPassword = await bcrypt.hash(password, salt);
		req.body.password = hashPassword;

		const newUser = await User.create(req.body);
		const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
		res.status(201).json({ user: newUser, token });
	} catch (error) {
		next(error);
	}
};

exports.update = async (req, res, next) => {
	try {
		await User.findOneAndUpdate({ _id: req.body._id }, req.body);
		const user = await User.findOne({ _id: req.body._id });
		res.status(200).json(user);
	} catch (error) {
		next(error);
	}
};
