const rateLimit = require('express-rate-limit');

// Rate limiter for login route
const loginLimiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	max: 5, // Limit each IP to 5 login requests per `window`
	message: {
		message: 'Too many login attempts from this IP, please try again after 15 minutes',
	},
	headers: true,
});

// Rate limiter for registration route
const registerLimiter = rateLimit({
	windowMs: 60 * 60 * 1000, // 1 hour
	max: 3, // Limit each IP to 3 registration requests per `window`
	message: {
		message: 'Too many registration attempts from this IP, please try again after an hour',
	},
	headers: true,
});

module.exports = { loginLimiter, registerLimiter };
