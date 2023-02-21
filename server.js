const express = require('express');
const app = express();

const dotenv = require('dotenv');
dotenv.config();

const dbConnect = require('./DB/dbConnect');
app.use(express.json());
const port = process.env.PORT || 5000;

const authRoutes = require('./Routes/authRoutes');

app.use('/api/auth', authRoutes);
app.get('/', (req, res) => res.send('Hello World!'));
app.listen(port, () => console.log(`app listening on port ${port}!`));
