const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        mongoose.set('strictQuery', false);
        mongoose.connect(process.env.MONGO_URI, console.log("Mongo est connécté"))
    }
    catch (error) {
        console.log(error);
        process.exit()
    }
};

module.exports = connectDB;