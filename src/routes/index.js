import React from 'react';
import { Routes as BrowserRouter, Route, Outlet, Navigate } from 'react-router-dom';
import Redirector from './Redirector';
import Layout from './Layout'

import Home from '../pages/Home';

const Routes = () => {
    return (
        <BrowserRouter>
            <Route path="/" element={<Layout />}>
                <Route path="/" element={<Navigate to="home" replace />} />
                <Route path="/home" element={<Home />} />
                {/* <Route path="*" element={<Redirector />} /> */}
            </Route>
        </BrowserRouter>
    );
}

export default Routes;