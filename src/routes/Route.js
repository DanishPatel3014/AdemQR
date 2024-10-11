import React, { createContext } from 'react';
import { Routes, Route, Outlet, Navigate, useLocation } from 'react-router-dom';

import RouteSwitch from './RouteSwitch';
import NotFound from '../views/NotFound';
import Home from '../views/Dashboard/Home';
import Header from '../components/Header';
import Footer from '../components/Footer';
import DashboardLayout from '../layout/DashboardLayout';

export const UserContext = createContext();

export default function AppRoute() {
  return (
    <Routes>
      {/* <Route exact path="/" element={<Home />} /> */}

      {/* Dashboard Routes */}
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}
