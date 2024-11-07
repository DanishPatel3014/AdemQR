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
//Trucker Dashboard
import TruckerDashboard from '../views/TruckerDashboard/Home';
import AddTruck from '../views/TruckerDashboard/AddTruck';
import Check from '../views/TruckerDashboard/Chart';
import AdsPerformance from '../views/TruckerDashboard/AdsPerformance';
import ReferFriend from '../views/TruckerDashboard/ReferFriend';
import RefferalEarning from '../views/TruckerDashboard/RefferalEarning';
import ChartNew from '../views/TruckerDashboard/ChartNew';
import WebHome from '../views/Website/WebHome';
import Weblayout from '../layout/Weblayout';
import Advertisers from '../views/Website/Advertisers';
import Trucker from '../views/Website/Trucker';
import Faqs from '../views/Website/Faqs';
import ContactUs from '../views/Website/ContactUs';
import Login from '../views/Website/Login';
import TruckerDashboardLayout from '../layout/TruckerDashboardLayout';
import TruckerDetail from '../views/TruckerDashboard/TruckDetail';
import Earning from '../views/TruckerDashboard/Earning';
export const UserContext = createContext();

export default function AppRoute() {
  return (
    <Routes>
      <Route path="/" element={<Weblayout />}>
        <Route index element={<WebHome />} />
        <Route path="/advertisers" element={<Advertisers />} />
        <Route path="/trucker" element={<Trucker />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/login" element={<Login />} />
      </Route>

      {/* Dashboard Routes */}
      <Route path="/dashboard" element={<DashboardLayout />}>
        {/* Advertiser Routes */}
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
        {/* Advertiser Routes */}
      </Route>
      <Route path="/trucker" element={<TruckerDashboardLayout />}>
        {/* Trucker Dashboard */}
        <Route path="check" element={<Check />} />
        <Route path="dashboard" element={<TruckerDashboard />} />
        <Route path="my-truck" element={<BrowseTruck />} />
        <Route path="truck-details" element={<TruckerDetail />} />
        <Route path="add-truck" element={<AddTruck />} />
        <Route path="edit-truck" element={<AddTruck />} />
        <Route path="ads-performance" element={<AdsPerformance />} />
        <Route path="earning" element={<Earning />} />
        <Route path="refer-friend" element={<ReferFriend />} />
        <Route path="referral-earning" element={<RefferalEarning />} />
        <Route path="checking" element={<ChartNew />} />
        <Route path="notifications" element={<Notifications />} />
        <Route path="support" element={<Support />} />
        {/* Trucker Dashboard */}
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
