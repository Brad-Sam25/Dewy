const mongoose = require('mongoose');

mongoose.connect(process.env.DEWY_DB_URI || 'mongodb://localhost/dewy')
    .then(() => {
        console.log(`MongoDB connection has been established successfully...`)
    })
    .catch(error => console.error(`Error: ${error}`))

module.exports = mongoose.connection;