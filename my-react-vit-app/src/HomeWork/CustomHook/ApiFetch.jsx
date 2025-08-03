import React, { useState } from 'react'

const ApiFetch = () => {
   const [state, setState] = useState({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      setState({ ...state, loading: true }); 
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const result = await response.json();
        setState({ data: result, loading: false, error: null });
      } catch (error) {
        setState({ data: null, loading: false, error: error.message }); // Set error and stop loading
      }
    };

    fetchData();
  }, [url]); // Re-fetch if URL changes

  return state; // Return the entire state (data, loading, error)
};

export default ApiFetch
