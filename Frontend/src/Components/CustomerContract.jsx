import React, { useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
function CustomerContract() {
    const navigate = useNavigate();
    // navigate('/customer')
    const { user } = useSelector((state) => state.auth);

    const [formData, setFormData] = useState({
        customer_Id: user._id,
        contract_tittle: '',
        contract_body: '',
        contract_sDate: '',
        contract_eDate: '',
        contract_Status: 'Under-Review'
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData)
        // try {
        //     await axios.post('/api/contracts', formData); // Replace '/api/contracts' with your actual API endpoint
        //     alert('Contract submitted successfully!');
        //     // Optionally, you can reset the form after successful submission
        //     setFormData({
        //         contract_tittle: '',
        //         contract_body: '',
        //         contract_sDate: '',
        //         contract_eDate: '',
        //         contract_Status: ''
        //     });
        // } catch (error) {
        //     console.error('Error submitting contract:', error);
        //     alert('Failed to submit contract. Please try again later.');
        // }
    };

    return (
        <div className='newContaractform'>
            <div className="contract-form-container">
                <h1>Contract Form</h1>
                <form onSubmit={handleSubmit} className="contract-form">
                    <div className="form-group">
                        <label htmlFor="contract_tittle">Contract Title:</label>
                        <input
                            type="text"
                            id="contract_tittle"
                            name="contract_tittle"
                            value={formData.contract_tittle}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="contract_body">Contract Body:</label>
                        <textarea
                            id="contract_body"
                            name="contract_body"
                            value={formData.contract_body}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="contract_sDate">Start Date:</label>
                        <input
                            type="date"
                            id="contract_sDate"
                            name="contract_sDate"
                            value={formData.contract_sDate}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="contract_eDate">End Date:</label>
                        <input
                            type="date"
                            id="contract_eDate"
                            name="contract_eDate"
                            value={formData.contract_eDate}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default CustomerContract