
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function CustomerPage() {
    const navigate = useNavigate();

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const { user } = useSelector((state) => state.auth);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}customer/contract/${user._id}`);
                setTimeout(() => {
                    setData(response.data);
                    setIsLoading(false);
                }, 1000);
            } catch (error) {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    const createContract = () => {
        navigate('/customer/contract')
    };

    return (
        <div className='customerPanel'>
            <div>
                {isLoading ? (
                    <div className='loaderContianer'><div className="loader"></div></div>
                ) : (
                    <div>

                        <div className='customerAactionBar'>
                            <h2>Total Contracts - {data.length}</h2>
                            <button onClick={createContract}>
                                New Contract
                            </button>
                        </div>

                        <table id='contract_table'>
                            <thead>
                                <tr>
                                    <th>S.No</th>
                                    <th>Tittle of Contract</th>
                                    <th>Start Date</th>
                                    <th>End Date</th>
                                    <th>Contract Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((item, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{item.contract_tittle}</td>
                                        <td>{item.contract_sDate}</td>
                                        <td>{item.contract_eDate}</td>
                                        <td>{item.contract_Status}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>

        </div>
    )
}

export default CustomerPage