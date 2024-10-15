import React from 'react';
import MainBanner from '../../components/Website/Banner/MainBanner';
import About from '../../components/Website/About/About';
import Future from '../../components/Website/About/Future';
import Join from '../../components/Website/About/Join';
import Packages from '../../components/Website/Packages/Packages';
import QrAds from '../../components/Website/About/QrAds';
import Tir from '../../components/Website/About/Tir';

export default function WebHome() {
  return (
    <>
      <MainBanner />
      <About />
      <Future />
      <Join />
      <Packages />
      <QrAds />
      <Tir />
    </>
  );
}
