import React from 'react'
import Navbar from './src/components/navbar/Navbar';
import { Outlet } from 'react-router-dom';


export default function MainLayout() {
  return (
    <>
        <Navbar />
        <Outlet />  
    </>
  )
}
