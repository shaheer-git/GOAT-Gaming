
import React from 'react'
import Navbar from './components/Header/Navbar';
import MainContent from './components/MainContent/MainContent';

export default function App() {
  return (
    <div className='bg-[var(--goat-black)] h-[6548px] w-full px-28 py-5'>
      <Navbar />
      <MainContent />
    </div>
  );
}
