const path = require('path')
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
app.use('/api/users', require('./routes/userRoutes'))
app.use('/api/books', require('./routes/bookRoutes'))

// Serve frontend
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../frontend/build')))
  
    app.get('*', (req, res) =>
      res.sendFile(
        path.resolve(__dirname, '../', 'frontend', 'build', 'index.html')
      )
    );
  } else {
    app.get('/', (req, res) => res.send('Please set to production'))
  }
  
  app.use(errorHandler);
  
  app.listen(PORT, () => console.log(`Server started on port ${PORT}`))