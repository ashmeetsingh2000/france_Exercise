import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../redux/loginSlice';

function FixedTopBar() {
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.auth);

    const handleLogout = () => {
        dispatch(logoutUser());
    };

    return (
        <nav>
            <h1>Contract Generator</h1>
            {user == null ? (
                <div>
                    <p></p>
                </div>
            ) : (
                <div className='headerName'>
                    <p>Bonjour {user.c_name}</p>
                </div>
            )}
            {user == null ? (
                <div>
                    <p></p>
                </div>
            ) : (
                <div className='logoutButton'>
                    <button onClick={handleLogout}>Logout</button>
                </div>
            )}

        </nav>
    );
}

export default FixedTopBar