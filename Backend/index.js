const express = require('express');
const app = express();

const mongoose = require('mongoose');
require('dotenv').config();

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const cors = require('cors')
var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
}
app.use(cors(corsOptions));


// ==================== [ Mongodb Atlas Database connection ] ==================== 
mongoose.connect(process.env.DB_URI)
    .then(() => {
        console.log('MongoDB Database ok');
        app.listen(3000, () => console.log(`Server http://localhost:3000`));
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB Atlas:', error);
    });
// ==================== [ Mongodb Atlas Database connection ] ====================


// =========================== [ Application routes ] ===========================

app.get('/', (req, res) => {
    res.send('Contract generator Server');
});

const loginRoutes = require('./routes/login');
// const adminRoutes = require('./routes/admin');
const customerRoutes = require('./routes/customer');

// Routes
app.use('/auth', loginRoutes);
app.use('/customer', customerRoutes);
// app.use('/offer', offerRoutes);

// =========================== [ Application routes ] ===========================