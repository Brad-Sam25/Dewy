import express from 'express';
import dotenv from 'dotenv';
import db from'./config/connection.js';
// import routes from './routes';
import cors from 'cors';

import userRoutes from './routes/user.js'; 

dotenv.config();



const PORT = process.env.PORT || 3001;
const app = express();

app.use('/user', userRoutes);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());


// app.use(routes);

db.once('open', () => {
    app.listen(PORT, () => console.log(`Server has been established on port ${PORT}`))
});

