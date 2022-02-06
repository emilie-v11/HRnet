import React, { useState } from 'react';
import FormCreateEmployee from '../../components/Form/FormCreateEmployee';
import './HomePage.css';

const HomePage = () => {
    const [isModalActive, setModalActive] = useState(false);
    const handleClickModal = () => {
        isModalActive ? setModalActive(false) : setModalActive(true);
    };

    return (
        <main className="text-center py-5">
            <h2 className="mb-5 text-light">Create employee</h2>

            <FormCreateEmployee onSubmit={handleClickModal} />
        </main>
    );
};

export default HomePage;
