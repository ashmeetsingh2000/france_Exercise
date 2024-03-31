const express = require('express');
const router = express.Router();

const Contract = require('../models/contractmodel');

// list all contract
router.get('/contract', async (req, res) => {
    try {
        let contract = await Contract.find();
        res.json(contract);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
})
// list all contracts

// list all contracts of a single customer
router.get('/contract/:id', async (req, res) => {
    try {
        const contractID = req.params.id;
        const document = await Contract.findOne({ _id: contractID });

        if (document) {
            res.json(document);
        } else {
            res.status(404).json({ message: 'Document not found' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});
// list all contracts of a single customer

// create a new contract
router.post('/contract', async (req, res) => {
    try {
        const { customer_Id, contract_tittle, contract_body, contract_sDate, contract_eDate, contract_Status } = req.body;
        let contract = new Contract({ customer_Id, contract_tittle, contract_body, contract_sDate, contract_eDate, contract_Status });
        await contract.save();
        res.status(201).json({ message: 'New Contract created' });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: 'Server Error' });
    }
});
// create a new contract

// delete a contract
router.delete('/contract/:id', async (req, res) => {
    try {

        const contractId = req.params.id;

        await Contract.findByIdAndDelete(contractId);
        res.json({ message: 'Contract deleted' });

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});
// delete a contract

// update contract status
router.put('/contract/:id', async (req, res) => {

    const id = req.params.id;
    const updateFields = req.body;

    try {
        await Contract.findByIdAndUpdate(id, updateFields, { new: true });
        return res.status(200).json({ message: 'Contract Status successfully' });

    } catch (error) {
        console.error('Error updating document:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }

});
// update contract status

module.exports = router;