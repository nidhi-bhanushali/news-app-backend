const express = require ('express');
const connectDB = require('./config/db')
const cors = require('cors')

const app = express();

// Connect Database
connectDB();

// Init middleware
app.use(express.json({ extended: false }));

app.use(cors());

// Define routes
app.use('/api/users' , require('./routes/users'))
app.use('/api/auth' , require('./routes/auth'))
app.use('/api/news' , require('./routes/news'))

const PORT = process.env.PORT || 5000;

app.listen(PORT , () => console.log(`Server started at port ${PORT}`))