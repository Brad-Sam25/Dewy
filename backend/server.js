const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/connection');

dotenv.config();

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

connectDB();

app.listen(PORT, () => console.log(`Server has been established on port ${PORT}`))

