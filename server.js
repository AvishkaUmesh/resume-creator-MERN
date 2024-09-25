const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const corsOptions = require('./cors.config');
const csurf = require('csurf');
const cookieParser = require('cookie-parser');
const helmet = require('helmet');
const cors = require('cors');
const errorHandler = require('./middlewares/errorHandler');
const passport = require('./middlewares/passport');
const session = require('express-session');

const app = express();
app.use(cors(corsOptions));

const dbConnect = require('./DB/dbConnect');
app.use(express.json());

// Use helmet middleware
app.use(helmet());

// Use cookie parser middleware
app.use(cookieParser());

// Set up CSRF protection middleware
const csrfProtection = csurf({ cookie: true });

// Initialize passport and session
app.use(session({ secret: 'secret', resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// Routes
const authRoutes = require('./Routes/authRoutes');

// Apply CSRF protection to all routes
app.use(csrfProtection);

// CSRF token endpoint
app.get('/api/csrf-token', (req, res) => {
	res.json({ csrfToken: req.csrfToken() });
});

app.use('/api/auth', authRoutes);

app.use(errorHandler);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`app listening on port ${port}!`));
