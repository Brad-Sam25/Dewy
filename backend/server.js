import express from 'express';
import 'dotenv/config';
import db from'./config/connection.js';
import cors from 'cors';

import userRouter from './routes/user.js'; 



const PORT = process.env.PORT || 3001;
const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());


app.use('/user', userRouter);



db.once('open', () => {
    app.listen(PORT, () => console.log(`Server has been established on port ${PORT}`))
});

