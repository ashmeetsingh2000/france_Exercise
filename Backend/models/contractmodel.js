const mongoose = require('mongoose');

const contractSchema = new mongoose.Schema({
    customer_Id: {
        type: String,
        required: true,
    },
    contract_tittle: {
        type: String,
        required: true,
    },
    contract_body: {
        type: String,
        required: true
    },
    contract_sDate: {
        type: String,
        required: true
    },
    contract_eDate: {
        type: String,
        required: true
    },
    contract_Status: {
        type: String,
        required: true
    }
});

const Contract = mongoose.model('Contract', contractSchema);

module.exports = Contract;