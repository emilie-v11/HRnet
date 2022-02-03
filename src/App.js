import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import EmployeeListPage from './pages/EmployeeListPage/EmployeeListPage';
import Error404 from './pages/Error404/Error404';
import Footer from './components/Footer/Footer';

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/employee-list" element={<EmployeeListPage />} />
                <Route path="*" element={<Error404 />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
