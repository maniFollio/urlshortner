const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        console.log("Connect to MongoDB successfully")
        await mongoose.connect(process.env.MONGODB_CONNECT_URI)
        console.log("Connect to MongoDB successfully")
    } catch (error) {
        console.log("Connect failed " + error.message );
        throw error;
    }
}

module.exports = connectDB