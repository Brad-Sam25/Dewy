import mongoose from "mongoose";
import "dotenv/config";





mongoose.connect(process.env.DEWY_DB_URI)
    .then(() => {
        console.log(`MongoDB connection has been established successfully...`);
    })
    .catch(error => console.error('Could not connect to MongoDB...', error))



export default mongoose.connection;
