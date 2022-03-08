require('dotenv').config();
const express = require("express")
const path = require("path");
const morgan = require("morgan")

// Api routes
const productRoutes = require("./routes/mainRoute");

// connect to MongoDB
const connectDB = require("./config/db")

//ANCHOR start the essential
connectDB() //connect to database with base log in

const app = express();// start an instance of the app

// read json data and url code
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}


// Routes list
app.use("/", productRoutes)

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '/frontend/build')))

    app.get('*', (req, res) =>
        res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
    )
} else {
    app.get('/', (req, res) => {
        res.send('API is running....')
    })
}


const PORT = process.env.PORT || 3000 // if reading .env file fail => running on port 3000
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))