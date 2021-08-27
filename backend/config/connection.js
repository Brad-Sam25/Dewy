const mongoose = require('mongoose');

mongoose.connect(
    process.env.DEWY_DB_URI || 'mongodb://localhost/dewy',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
    }
);

module.exports = mongoose.connection;