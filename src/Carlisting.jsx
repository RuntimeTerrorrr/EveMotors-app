import React, { useEffect } from 'react';
import Header from './components/Header';
import AddCarPopup from './components/popups/AddCarPopup'
import { Link, useNavigate } from 'react-router-dom';

const Carlisting = () => {

    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (!token) {
            navigate('/login')
        }
    }, [navigate]);


    return (
        <>
            <section
                class="relative h-screen py-12  bg-[url(https://images.unsplash.com/photo-1619196721139-4039c7f330a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80)] bg-cover bg-center bg-no-repeat"
            >
                            <Header />
                <div
                    class="absolute  inset-0 bg-gray-50 sm:bg-transparent sm:from-gray-50 sm:to-gray-50 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
                ></div>

                <div
                    class=" mx-24 py-10  rounded-2xl  bg-prime relative flex justify-between items-center "
                >
                 <AddCarPopup/>
                </div>
            </section>
        </>

    );
};

export default Carlisting;
