
import React from 'react'
import Navbar from './components/Header/Navbar';
import MainContent from './components/MainContent/MainContent';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import './App.css';

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <div className='bg-[var(--goat-black)] w-full px-0 sm:px-0 md:px-16 lg:px-28 py-3 sm:py-4 md:py-5'>
      <Navbar />
      <MainContent />
    </div>

  );
}
