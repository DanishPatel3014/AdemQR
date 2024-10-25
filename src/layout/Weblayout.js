import React, { useEffect } from 'react';
import Header from '../components/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import { Stack } from '@chakra-ui/react';

export default function Weblayout() {

  useEffect(() => {
    const cursor = document.querySelector('.blob');

    if (cursor) {
      const moveCursor = (e) => {
        const x = e.clientX;
        const y = e.clientY;
        cursor.style.transform = `translate3d(calc(${x}px - 50%), calc(${y}px - 50%), 0)`;
      };

      document.addEventListener('mousemove', moveCursor);

      // Cleanup event listener on component unmount
      return () => {
        document.removeEventListener('mousemove', moveCursor);
      };
    }
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <>
      <Stack className="blob"></Stack>
      <Header />
      <Outlet />
      <Footer/>
    </>
  );
}
