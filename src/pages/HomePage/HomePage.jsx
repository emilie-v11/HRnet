import React from 'react';
import FormCreateEmployee from '../../components/Form/FormCreateEmployee';
import './HomePage.css';

const HomePage = () => {
    return (
        <main className="text-center py-5">
            <h2 className="mb-4 text-light">Create employee</h2>

            <FormCreateEmployee />
        </main>
    );
};

export default HomePage;
