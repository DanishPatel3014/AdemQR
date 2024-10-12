import React, { createContext } from 'react';
import { Routes, Route, Outlet, Navigate, useLocation } from 'react-router-dom';

import RouteSwitch from './RouteSwitch';
import NotFound from '../views/NotFound';
import Home from '../views/Dashboard/Home';
import Header from '../components/Header';
import Footer from '../components/Footer';
import DashboardLayout from '../layout/DashboardLayout';
import ManageAds from '../views/Dashboard/ManageAds';
import BrowseTruck from '../views/Dashboard/BrowseTruck';
import Package from '../views/Dashboard/Package';
import Notifications from '../views/Dashboard/Notifications';
import Support from '../views/Dashboard/Support';
import Payment from '../views/Dashboard/Payment';
import Reports from '../views/Dashboard/Reports';
import AdDetails from '../views/Dashboard/AdDetails';
import ManageAdDetail from '../views/Dashboard/ManageAdDetail';

export const UserContext = createContext();

export default function AppRoute() {
  return (
    <Routes>
      {/* <Route exact path="/" element={<Home />} /> */}

      {/* Dashboard Routes */}
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<Home />} />
        <Route path="manage-ads" element={<ManageAds />} />
        <Route path="browse-truck" element={<BrowseTruck />} />
        <Route path="packages" element={<Package />} />
        <Route path="notifications" element={<Notifications />} />
        <Route path="support" element={<Support />} />
        <Route path="payment" element={<Payment />} />
        <Route path="reports" element={<Reports />} />
        <Route path="ad-details" element={<AdDetails />} />
        <Route path="manage-ad-detail" element={<ManageAdDetail />} />
      </Route>
    </Routes>
  );
}
