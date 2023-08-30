import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'


// importo NAVBAR, FOOTER en fragments //
const LayoutsComponent = () => {
    return (
        <div className='h-screen w-full relative flex flex-col'>

            <Navbar />
            <Outlet />
            <Footer />
        </div>

    )
}

export default LayoutsComponent