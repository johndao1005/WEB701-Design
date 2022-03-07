require('dotenv').config();
const connectDB = require('./config/db')

const express = require("express")
const app = express();

connectDB();
const PORT = process.env.PORT || 3000 // if reading .env file fail => running on port 3000
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))