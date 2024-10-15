import React, { createContext } from 'react';
import { Routes, Route, Outlet, Navigate, useLocation } from 'react-router-dom';

import RouteSwitch from './RouteSwitch';
import NotFound from '../views/NotFound';
import Home from '../views/Dashboard/Home';
import Header from '../components/Header';
import Footer from '../components/Footer';
import DashboardLayout from '../layout/DashboardLayout';
import WebHome from '../views/Website/WebHome';
import Weblayout from '../layout/Weblayout';
import Advertisers from '../views/Website/Advertisers';
import Faqs from '../views/Website/Faqs';
import ContactUs from '../views/Website/ContactUs';
import Trucker from '../views/Website/Trucker';
import Login from '../views/Website/Login';

export const UserContext = createContext();

export default function AppRoute() {
  return (
    <Routes>
      <Route  element={<Weblayout />}>
        <Route index element={<WebHome />} />
        <Route  path="/advertisers" element={<Advertisers />} />
        <Route  path="/trucker" element={<Trucker />} />
        <Route  path="/faqs" element={<Faqs />} />
        <Route  path="/contact" element={<ContactUs />} />
        <Route  path="/login" element={<Login />} />
      </Route>
     

      {/* Dashboard Routes */}
      <Route path="/dashboard" element={<DashboardLayout />}>
      
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}
