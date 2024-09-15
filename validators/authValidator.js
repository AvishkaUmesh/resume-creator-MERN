const { body } = require('express-validator');

exports.registerValidation = [
	body('username')
		.notEmpty()
		.withMessage('Username is required')
		.isLength({ min: 3 })
		.withMessage('Username must be at least 3 characters long'),
	body('password')
		.notEmpty()
		.withMessage('Password is required')
		.isLength({ min: 8 })
		.withMessage('Password must be at least 8 characters long')
		.matches(/[A-Z]/)
		.withMessage('Password must contain at least one uppercase letter')
		.matches(/[a-z]/)
		.withMessage('Password must contain at least one lowercase letter')
		.matches(/[0-9]/)
		.withMessage('Password must contain at least one number')
		.matches(/[\W_]/)
		.withMessage('Password must contain at least one special character'),
	body('email').isEmail().withMessage('Email is invalid').optional({ checkFalsy: true }),
];
