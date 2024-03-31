
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CustomerPage() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}customer/contract`);
                console.log(response.data)
                setData(response.data);
                setIsLoading(false);
            } catch (error) {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <div className='customerPanel'>
            <div>
                {isLoading ? (
                    <div>Loading...</div>
                ) : (
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                {/* Add more table headers as needed */}
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    {/* Add more table cells as needed */}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    )
}

export default CustomerPage