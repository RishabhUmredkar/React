import React, { useEffect, useState } from 'react'

const CachedUserFetching = () => {
const [state, setState] = useState({
    data: null,
    loading: true,
    error: null,
  });

  const url = 'https://jsonplaceholder.typicode.com/users/1'; // Replace with your API URL

  useEffect(() => {
    const cachedData = localStorage.getItem(url);

    if (cachedData) {
      setState({
        data: JSON.parse(cachedData),
        loading: false,
        error: null,
      });
    } else {
      const fetchData = async () => {
        try {
          const response = await fetch(url);
          if (!response.ok) {
            throw new Error('Failed to fetch data');
          }
          const result = await response.json();
          setState({
            data: result,
            loading: false,
            error: null,
          });
          localStorage.setItem(url, JSON.stringify(result));
        } catch (error) {
          setState({
            data: null,
            loading: false,
            error: error.message,
          });
        }
      };
      fetchData();
    }
  }, [url]);

  if (state.loading) return <div>Loading...</div>;
  if (state.error) return <div>Error: {state.error}</div>;

  return (
    <div>
      <h2>{state.data.name}</h2>
      <p>{state.data.email}</p>
    </div>
  );
};


export default CachedUserFetching
