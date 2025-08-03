import React from 'react';

const OneTimeWelcomeMessage = () => {
    const [isWelcomeVisible, setIsWelcomeVisible] = React.useState(true);

    React.useEffect(() => {
        // Hide the message after 2 seconds (or any duration you prefer)
        const timer = setTimeout(() => setIsWelcomeVisible(false), 2000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div>
            {isWelcomeVisible && (
                <div>
                    <p>Welcome to our website!</p>
                </div>
            )}
        </div>
    );
};

export default OneTimeWelcomeMessage;
