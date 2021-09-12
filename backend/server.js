const express = require('express');
const dotenv = require('dotenv');
const db = require('./config/connection');
const routes = require('./routes')

dotenv.config();

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use(routes);

db.once('open', () => {
    app.listen(PORT, () => console.log(`Server has been established on port ${PORT}`))
});

