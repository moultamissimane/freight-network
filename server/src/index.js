const express = require('express');
const cors = require('cors');
const colors = require('colors');
require("dotenv").config();
const PORT = process.env.PORT || 5000;
const connectDB = require('./config/db');
const { errorHandler } = require('./middleware/error.middleware');
const { notFound } = require('./middleware/route.middleware');

const app = express();

app.use(express.json());
app.use(cors());

connectDB();

//Routes
app.use('/api/users', require('./routes/user.route'));

//404
app.use(notFound);

//Error Handler
app.use(errorHandler);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`.yellow.bold));