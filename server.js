const express = require('express');
const corsOptions = require('./cors.config');
const csurf = require('csurf');
const cookieParser = require('cookie-parser');
const helmet = require('helmet');
const cors = require('cors');
const errorHandler = require('./middlewares/errorHandler');
const dotenv = require('dotenv');

const app = express();
app.use(cors(corsOptions));
dotenv.config();

const dbConnect = require('./DB/dbConnect');
app.use(express.json());

// Use helmet middleware
app.use(helmet());

// Use cookie parser middleware
app.use(cookieParser());

// Set up CSRF protection middleware
const csrfProtection = csurf({ cookie: true });

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
