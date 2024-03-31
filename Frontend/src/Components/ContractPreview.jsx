import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { useLocation } from 'react-router-dom';
function ContractPreview() {

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const id = queryParams.get('id');

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response = await axios.get(`${process.env.REACT_APP_API_URL}customer/contractpreview/${id}`);
    //             setTimeout(() => {
    //                 setData(response.data);
    //                 setIsLoading(false);
    //             }, 1000);
    //         } catch (error) {
    //             setIsLoading(false);
    //         }
    //     };

    //     fetchData();
    // }, []);


    return (
        <div>ContractPreview</div>
    )
}

export default ContractPreview