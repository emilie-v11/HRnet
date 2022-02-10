import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import LoaderSpinner from './components/LoaderSpinner/LoaderSpinner';
// import HomePage from './pages/HomePage/HomePage';
// import EmployeeListPage from './pages/EmployeeListPage/EmployeeListPage';
// import Error404 from './pages/Error404/Error404';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const EmployeeListPage = lazy(() => import('./pages/EmployeeListPage/EmployeeListPage'));
const Error404 = lazy(() => import('./pages/Error404/Error404'));
const renderLoader = () => <LoaderSpinner />;

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Suspense fallback={renderLoader()}>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/employee-list" element={<EmployeeListPage />} />
                    <Route path="*" element={<Error404 />} />
                </Routes>
            </Suspense>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
