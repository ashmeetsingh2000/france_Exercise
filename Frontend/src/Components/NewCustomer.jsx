import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function NewCustomer() {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [loader, setloader] = useState(false);
    const [formData, setFormData] = useState({
        c_name: '',
        c_email: '',
        c_password: '',
        c_type: '',
        c_rank: ''
    });

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setloader(true)
            await axios.post(`${process.env.REACT_APP_API_URL}auth/customer`, formData);
            alert('New Customer Created');
            setFormData({
                c_name: '',
                c_email: '',
                c_password: '',
                c_type: '',
                c_rank: '',
            });
            navigate('/admin')
            setloader(false)
        } catch (error) {
            console.error('Error submitting form:', error.message);
        }
    };
    return (
        <div className='newCustomerForm'>

            <h1>New Customer</h1>
            {loader ? (
                <div className='adminLoaderContianer'><div className="loader"></div></div>
            ) : (
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="c_name">Name:</label>
                        <input type="text" id="c_name" name="c_name" value={formData.c_name} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="c_email">Email:</label>
                        <input type="email" id="c_email" name="c_email" value={formData.c_email} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="c_password">Password:</label>
                        <input type={showPassword ? 'text' : 'password'} id="c_password" name="c_password" value={formData.c_password} onChange={handleChange} required />
                        <span className='showHideButton' onClick={handleTogglePassword}> {showPassword ? 'Hide' : 'Show'}</span>
                    </div>
                    <div className="form-group">
                        <label>Type:</label>
                        <div className='radioButtons'>
                            <label>
                                <input type="radio" name="c_type" value="B2B" checked={formData.c_type === 'B2B'} onChange={handleChange} required />
                                B2B
                            </label>
                            <label>
                                <input type="radio" name="c_type" value="B2C" checked={formData.c_type === 'B2C'} onChange={handleChange} required />
                                B2C
                            </label>
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Rank:</label>
                        <div className='radioButtons'>
                            <label>
                                <input type="radio" name="c_rank" value="#1" checked={formData.c_rank === '#1'} onChange={handleChange} required />
                                #1
                            </label>
                            <label>
                                <input type="radio" name="c_rank" value="#2" checked={formData.c_rank === '#2'} onChange={handleChange} required />
                                #2
                            </label>
                            <label>
                                <input type="radio" name="c_rank" value="#3" checked={formData.c_rank === '#3'} onChange={handleChange} required />
                                #3
                            </label>
                        </div>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            )}
        </div>
    )
}

export default NewCustomer