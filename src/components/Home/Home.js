import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Home = () => {
    const { user } = useFirebase();
    return (
        <div>
            <h1>The Home Page</h1>
            <h2>Current User: {user ? user.displayName : 'No User Found'}</h2>
        </div>
    );
};

export default Home;