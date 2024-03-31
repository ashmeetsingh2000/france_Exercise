import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';


function ContractDetail() {
    const navigate = useNavigate();

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const id = queryParams.get('id');

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}customer/contractpreview/${id}`);
                setData(response.data);
                setIsLoading(false);

            } catch (error) {

                setIsLoading(false);

            }
        };

        fetchData();
    }, []);

    const contactAction = async (decision) => {
        if (decision == 'approve') {
            const result = window.confirm('Approve Contract!');
            if (result) {

                try {
                    await axios.put(`${process.env.REACT_APP_API_URL}customer/contract/${id}`, {
                        "contract_Status": "Approved"
                    });
                    navigate(`/admin/customer-detail/?id=${data.customer_Id}`);

                } catch (error) {
                    console.error('Error updating data:', error);
                }

            } else {
                console.log('clicked Cancel');
            }
        }
        else {
            const result = window.confirm('Rejecting Contact!');
            if (result) {

                try {
                    await axios.put(`${process.env.REACT_APP_API_URL}customer/contract/${id}`, {
                        "contract_Status": "Rejected"
                    });
                    navigate(`/admin/customer-detail/?id=${data.customer_Id}`);

                } catch (error) {
                    console.error('Error updating data:', error);
                }

            } else {
                console.log('User clicked Cancel');
            }
        }
    }

    return (
        <div className='previewContract'>
            {
                isLoading
                    ?
                    (<div className='loaderContianer'><div className="loader"></div></div>)
                    :
                    (
                        <>
                            <div className="contract_wrapper">
                                <div className="contractPreviewBox">
                                    <h1>{data.contract_tittle}</h1>
                                    <p>{data.contract_body}</p>
                                    <div className="start_end_date">
                                        Contract Duration:
                                        <div>
                                            <span>{data.contract_sDate}</span>
                                            To
                                            <span>{data.contract_eDate}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="contractActionButtons">
                                <button onClick={() => { contactAction('approve') }}>Approve Contract</button>
                                <button onClick={() => { contactAction('reject') }}>Reject Contract</button>
                            </div>

                        </>
                    )
            }
        </div>
    )
}

export default ContractDetail