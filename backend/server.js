const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const {errorHandler} = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const PORT = process.env.PORT || 5050

connectDB()

const app = express()

// Middlewares
app.use(express.json())
app.use(express.urlencoded({extended: false}))

// Routes
app.use('/api/logs', require('./routes/logRoutes'))

app.use(errorHandler)

app.listen(PORT, () => console.log(`Server running on ${PORT}`))