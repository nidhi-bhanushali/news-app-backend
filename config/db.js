const mongoose = require('mongoose');
const db = process.env.MONGODB;

const connectDB = async () =>{
    try {
        await mongoose.connect(db , {
            useNewUrlParser : true,
            useFindAndModify: false,
            useCreateIndex : true,
            useUnifiedTopology: true
        });
        console.log('MongoDB Connected...')
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
}

module.exports = connectDB;