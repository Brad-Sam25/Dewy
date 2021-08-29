const mongoose = require('mongoose');

const connectDB =  async ()=>{
    try{
        const conn = await mongoose.connect(process.env.DEWY_DB_URI)
        .then(() => {
            console.log(`MongoDB connection established successfully...`)
        })
    }catch(error){
        console.error(`Error: ${error} `)
        process.exit(1) 
    }
}

module.exports = connectDB;