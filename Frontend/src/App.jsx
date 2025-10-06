
import React from 'react'
import Navbar from './components/Header/Navbar';
import MainContent from './components/MainContent/MainContent';

export default function App() {
  return (
    <div className='bg-[var(--goat-black)] w-full px-0 sm:px-0 md:px-16 lg:px-28 py-3 sm:py-4 md:py-5'>
      <Navbar />
      <MainContent />
    </div>

  );
}
