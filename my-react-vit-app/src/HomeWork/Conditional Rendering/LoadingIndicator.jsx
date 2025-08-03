import React, { useEffect } from 'react'
import { useState } from 'react';

const LoadingIndicator = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            fetch('https://www.github.com/users')
                .then((response) => response.json())
                .then((data) => {
                    setData(data);
                    setLoading(false); // Data has been fetched, stop loading
                })
                .catch((err) => {
                    setError('Failed to fetch data');
                    setLoading(false);
                });
        }, 2000);
    }, [])

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div>
            <h2>Data Fetched Successfully!</h2>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    )
};

export default LoadingIndicator
