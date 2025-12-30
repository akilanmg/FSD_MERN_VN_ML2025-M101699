import React from 'react'
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Routers from '../routes/Routers' 
import Appointments from '../Dashboard/doctor-account/Appointments';
import MyBookings from '../Dashboard/user-account/MyBookings';

const Layout = () => {
    return (
        <>
            <Header/>
            <main>
                <Routers/>
            </main>
            <Footer/>  {/* Corrected from <Footers/> to <Footer/> */}
            <Appointments/>
            <MyBookings/>
        </>
    );
};

export default Layout;
