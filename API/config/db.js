require('dotenv').config();
const mongoose = require('mongoose');

const connectDB = async() => {
    try { 
        const uri = process.env.MONGODB_URI || "mongodb+srv://user1:user1@database.wzu1z.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("MongoDB connection Success")
    } catch (e) {
        console.error("MongoDB connection Failure")
        process.exit(1)
    }
}
module.exports = connectDB;