import React, { useState } from 'react'

// Use an API to fetch a random joke and display it when the component is initially rendered.

const Joke = () => {
   
    const [joke, setJoke] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const fetchJoke = async () => {
        try {
            const response = await fetch('https://official-joke-api.appspot.com/random_joke');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setJoke(`${data.setup} - ${data.punchline}`);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
    <div>
        <button onClick={fetchJoke}>Get a Joke</button>
        <h2>Random Joke</h2>
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        {joke && <p>Joke: {joke}</p>}

    </div>
  )
}

export default Joke
