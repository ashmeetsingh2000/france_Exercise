const mongoose = require('mongoose');

// Define a schema for customer
const customerSchema = new mongoose.Schema({
    c_name: {
        type: String,
        required: true
    },
    c_email: {
        type: String,
        required: true,
        unique: true
    },
    c_password: {
        type: String,
        required: true
    },
    c_type: {
        type: String,
        required: true
    },
    c_rank: {
        type: String,
        required: true
    }
});

// Create a model from the schema
const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;