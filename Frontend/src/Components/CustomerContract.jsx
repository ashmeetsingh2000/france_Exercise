import React, { useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function CustomerContract() {
    const navigate = useNavigate();
    const { user } = useSelector((state) => state.auth);
    const [isLoading, setIsLoading] = useState(false);

    const [preview, setpreview] = useState(false)

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

    const prviewChange = () => {
        if (formData.customer_Id != '' &&
            formData.contract_tittle != '' &&
            formData.contract_body != '' &&
            formData.contract_sDate != '' &&
            formData.contract_eDate != '' &&
            formData.contract_Status != '') {
            setpreview(true)
        }
        else { }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setIsLoading(true)
            await axios.post(`${process.env.REACT_APP_API_URL}customer/contract`, formData);
            alert('New Contract Created');
            setFormData({
                customer_Id: '',
                contract_tittle: '',
                contract_body: '',
                contract_sDate: '',
                contract_eDate: '',
                contract_Status: ''
            });
            navigate('/customer')
            setIsLoading(false)
        } catch (error) {
            console.error('Error submitting contract:', error);
            alert('Failed to submit contract. Please try again later.');
        }
    };

    return (
        <div className='newContaractform'>
            <div className="contract-form-container">
                <h1>Contract Form</h1>
                {isLoading
                    ? (<div className='adminLoaderContianer'><div className="loader"></div></div>)
                    : (
                        <>

                            <form onSubmit={handleSubmit} className="contract-form">
                                {!preview
                                    ?
                                    (
                                        <>
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
                                            <button onClick={prviewChange}>Preview Contract</button>

                                        </>
                                    )
                                    :
                                    (
                                        <>

                                            <div className="contractPreviewBox">
                                                <h1>{formData.contract_tittle}</h1>
                                                <p>{formData.contract_body}</p>
                                                <div className="start_end_date">
                                                    Contract Duration:
                                                    <div>
                                                        <span>{formData.contract_sDate}</span>
                                                        To
                                                        <span>{formData.contract_eDate}</span>
                                                    </div>
                                                </div>
                                            </div>

                                            <button type="submit">Submit</button>
                                        </>
                                    )
                                }
                            </form>
                        </>)}
            </div>
        </div>

    );
}

export default CustomerContract