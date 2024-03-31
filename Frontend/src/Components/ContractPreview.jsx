import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { useLocation } from 'react-router-dom';
function ContractPreview() {

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const id = queryParams.get('id');

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}customer/contractpreview/${id}`);
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


    return (
        <div className='previewContract'>
            {
                isLoading
                    ?
                    (<div className='loaderContianer'><div className="loader"></div></div>)
                    :
                    (
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
                            <div className="contractStatus">
                                Contract Status:
                                <span>{data.contract_Status}</span>
                            </div>
                        </div>
                    )
            }
        </div>
    )
}

export default ContractPreview