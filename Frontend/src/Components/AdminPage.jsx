import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AdminPage() {
    const navigate = useNavigate();

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}auth/customer`);
                let result = response.data.filter((val) => { return val.c_auth != 'admin' })
                setTimeout(() => {
                    setData(result);
                    setIsLoading(false);
                }, 1000);
            } catch (error) {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    const newCustomer = () => {
        navigate('/admin/customer')
    };

    const customerDetail = (index) => {
        navigate(`/admin/customer-detail/?id=${data[index]._id}`);
    }

    return (
        <>

            {
                isLoading
                    ? (<div className='adminLoaderContianer'><div className="loader"></div></div>)
                    : (
                        <>
                            <div className="top_bar">
                                <h1>Total Coustomers - {data.length}</h1>
                                <button onClick={newCustomer}>Add New Customer</button>
                            </div>
                            {data.length == 0 ? (<div style={{ fontSize: "20px", textAlign: 'center' }}>No Customers Found</div>) : (
                                <div className='customersList'>
                                    {data.map((item, index) => (
                                        <div className="customerDetail_box" key={index} onClick={() => { customerDetail(index) }}>
                                            <p>{item.c_rank}</p>
                                            <p className='customer_name'>
                                                <span>{item.c_name}</span>
                                                <span style={{ margin: '5px 0 0 0', fontSize: '13px' }}>{item.c_email}</span>
                                            </p>
                                            <p>{item.c_type}</p>
                                        </div>
                                    ))}

                                </div>
                            )}
                        </>
                    )
            }

        </>
    )
}

export default AdminPage