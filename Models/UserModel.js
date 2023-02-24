const { timeStamp } = require('console');
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
	{
		username: {
			type: String,
			required: true,
			unique: true,
		},
		password: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			default: '',
		},
		firstName: {
			type: String,
			default: '',
		},
		lastName: {
			type: String,
			default: '',
		},
		mobileNumber: {
			type: String,
			default: '',
		},
		linkedIn: {
			type: String,
			default: '',
		},
		address: {
			type: String,
			default: '',
		},
		objective: {
			type: String,
			default: '',
		},
		education: { type: Array, default: [] },
		skills: { type: Array, default: [] },
		experience: { type: Array, default: [] },
		projects: { type: Array, default: [] },
	},
	{ timeStamp: true }
);

module.exports = mongoose.model('User', userSchema);
