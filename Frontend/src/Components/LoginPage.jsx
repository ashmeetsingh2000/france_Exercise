import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../redux/loginSlice';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
    const navigate = useNavigate();

    const dispatch = useDispatch();
    const [credentials, setCredentials] = useState({ c_email: '', c_password: '' });
    const { isAuthenticated, authTo, loading, error } = useSelector((state) => state.auth);

    useEffect(() => {
        if (isAuthenticated) {
            authTo == null
                ?
                navigate('/customer')
                :
                navigate('/admin')
        }
    }, [isAuthenticated, authTo]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setCredentials((prevCredentials) => ({
            ...prevCredentials,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(login(credentials))
    };

    return (
        <div className='loginWrapper'>
            <div className='loginBox'>
                <h1>Login</h1>
                {error && <p>{error}</p>}
                {loading
                    ?
                    <div className='loaderContianer'><div className="loader"></div></div>
                    :
                    <form onSubmit={handleSubmit}>
                        <input type="email" name="c_email" value={credentials.c_email} onChange={handleChange} placeholder="Email Address" required />
                        <input type="password" name="c_password" value={credentials.c_password} onChange={handleChange} placeholder="Password" required />
                        <button type="submit" disabled={loading}>Login</button>
                    </form>
                }
            </div>
        </div>
    )
}

export default LoginPage