const express = require('express');
const { registerValidation } = require('../validators/authValidator');
const { validationResult } = require('express-validator');
const authMiddleware = require('../middlewares/authMiddleware');
const { loginLimiter, registerLimiter } = require('../middlewares/rateLimiter');

const router = express.Router();
const authController = require('../Controllers/authController');

router.post('/login', loginLimiter, authController.login);

router.post(
	'/register',
	registerLimiter,
	registerValidation,
	(req, res, next) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}
		next();
	},
	authController.register
);

router.post('/update', authMiddleware, authController.update);

module.exports = router;
