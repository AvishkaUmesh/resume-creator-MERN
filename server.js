const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());

const dotenv = require('dotenv');
dotenv.config();

const dbConnect = require('./DB/dbConnect');
app.use(express.json());

const authRoutes = require('./Routes/authRoutes');

app.use('/api/auth', authRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`app listening on port ${port}!`));
