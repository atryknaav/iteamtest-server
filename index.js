const express = require('express');
const connectDB = require('./config/db');
const dotenv = require('dotenv');

dotenv.config({ path: './.env' });

const app = express();

connectDB();

app.use(express.json({ extended: false }));

app.use('/', require('./routes/authRoutes'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
