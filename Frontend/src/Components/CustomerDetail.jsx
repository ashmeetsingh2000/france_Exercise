import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { useLocation, useNavigate } from 'react-router-dom';

function CustomerDetail() {
    const navigate = useNavigate();

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const id = queryParams.get('id');

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const [contractData, setcontractData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const customer_response = await axios.get(`${process.env.REACT_APP_API_URL}auth/customer/${id}`);
                const contract_response = await axios.get(`${process.env.REACT_APP_API_URL}customer/contract/${id}`);

                setData(customer_response.data);
                setIsLoading(false);

                setcontractData(contract_response.data);

            } catch (error) {

                setIsLoading(false);

            }
        };

        fetchData();
    }, []);

    const openContract = (index) => {
        navigate(`/admin/contract-detail/?id=${contractData[index]._id}`);
    }

    const deleteCustomer = async (index) => {

        const result = window.confirm('Deleting Customer Account will also delete all customer Contracts. Are you sure you want to continue');
        if (result) {

            await axios.delete(`${process.env.REACT_APP_API_URL}auth/delete/${index}`, {
                "customer_Id": index
            });
            navigate(`/admin`);

        } else {
            console.log('User clicked Cancel');
        }

    }

    const openCustomer = (index) => {
        navigate(`/admin/customer-detail-edit/?id=${index}`);;
    }

    return (
        <div className='coustomerDetials'>

            {
                isLoading
                    ? (
                        <div className='adminLoaderContianer'><div className="loader"></div></div>
                    )
                    : (
                        <>
                            <div className="customerInfo">

                                <div className="infoHeading">
                                    <h1>Customer Account Detais</h1>
                                </div>

                                <div className="customerDetailsTable">
                                    <table id='contract_table'>
                                        <thead>
                                            <tr>
                                                <th>Rank</th>
                                                <th>Full Name</th>
                                                <th>Email Address</th>
                                                <th>Business Type</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>{data.c_rank}</td>
                                                <td>{data.c_name}</td>
                                                <td>{data.c_email}</td>
                                                <td>{data.c_type}</td>
                                                <td>
                                                    <button onClick={() => { openCustomer(id) }}>Edit</button>
                                                    <button onClick={() => { deleteCustomer(id) }}>Delete</button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                            </div>

                            <div className="customerContracts">

                                <div className="infoHeading">
                                    <h1>Customer Contract Detais</h1>
                                </div>

                                <div className="contracts_tableDetails">
                                    {
                                        contractData.length != 0
                                            ?
                                            <table id='contract_table'>
                                                <thead>
                                                    <tr>
                                                        <th>S.No</th>
                                                        <th>Tittle of Contract</th>
                                                        <th>Start Date</th>
                                                        <th>End Date</th>
                                                        <th>Contract Status</th>
                                                        <th>Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {contractData.map((item, index) => (
                                                        <tr key={index}>
                                                            <td>{index + 1}</td>
                                                            <td>{item.contract_tittle}</td>
                                                            <td>{item.contract_sDate}</td>
                                                            <td>{item.contract_eDate}</td>
                                                            <td>{item.contract_Status}</td>
                                                            <td><button onClick={() => { openContract(index) }}>View</button></td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>

                                            :
                                            <div className='noPreviosContract'>No Previos Contracts</div>
                                    }
                                </div>

                            </div>
                        </>
                    )
            }

        </div>
    )
}

export default CustomerDetail