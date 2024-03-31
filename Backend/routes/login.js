const express = require('express');
const router = express.Router();

const Customer = require('../models/customermodel');

// verfiy admin/customer
router.post('/verify', async (req, res) => {
    try {
        const { c_email, c_password } = req.body;
        let response = await Customer.findOne({ c_email });
        if (!response) {
            return res.status(201).json({ message: 'notFound' });
        }
        else {
            if (response.c_password == c_password) {
                return res.status(200).json({ data: response });
            }
            else {
                return res.status(201).json({ message: 'wrongPassword' });
            }
        }
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: 'Server Error' });
    }
});
// verfiy admin/customer

// create new customer
router.post('/customer', async (req, res) => {
    try {
        const { c_name, c_email, c_password, c_type, c_rank } = req.body;
        let customer = await Customer.findOne({ c_name });
        if (customer) {
            return res.status(400).json({ message: 'Costomer already exists' });
        }
        customer = new Customer({ c_name, c_email, c_password, c_type, c_rank });
        await customer.save();
        res.status(201).json({ message: 'New Costomer created' });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: 'Server Error' });
    }
});
// create new customer

// get all customer
router.get('/customer', async (req, res) => {
    try {
        const customer = await Customer.find();
        res.json(customer);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
})
// get all customer

// update customer info
router.put('/customer/:id', async (req, res) => {

    const id = req.params.id;
    const updateFields = req.body;

    try {

        await Customer.findByIdAndUpdate(id, updateFields, { new: true });
        return res.status(200).json({ message: 'Document updated successfully' });

    } catch (error) {
        console.error('Error updating document:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }

});
// update customer info

// delete one customer
router.delete('/delete/:id', async (req, res) => {
    try {

        const coustomerId = req.params.id;

        // Delete User contracts

        // Delete User contracts

        await Customer.findByIdAndDelete(coustomerId);
        res.json({ message: 'Customer deleted' });

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});
// delete one customer

module.exports = router;