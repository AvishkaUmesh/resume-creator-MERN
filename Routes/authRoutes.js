const express = require('express');
const { registerValidation } = require('../validators/authValidator');
const { validationResult } = require('express-validator');
const authMiddleware = require('../middlewares/authMiddleware');
const { loginLimiter, registerLimiter } = require('../middlewares/rateLimiter');
const passport = require('../middlewares/passport');
const jwt = require('jsonwebtoken');

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

router.get('/logout', (req, res) => {
	req.logout();
});

// Google OAuth routes
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/login' }), (req, res) => {
	// Successful authentication, redirect to client home with user data and token
	const user = req.user;
	const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
	const redirectUrl = `http://localhost:3000/oauth-redirect?user=${encodeURIComponent(
		JSON.stringify(user)
	)}&token=${token}`;
	res.redirect(redirectUrl);
});

module.exports = router;
