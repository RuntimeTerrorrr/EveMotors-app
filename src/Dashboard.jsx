import React, { useEffect } from 'react';
import Header from './components/Header';
import { Link, useNavigate } from 'react-router-dom';

const FormDashboard = () => {

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
                className="relative h-screen py-12  bg-[url(https://images.unsplash.com/photo-1619196721139-4039c7f330a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80)] bg-cover bg-center bg-no-repeat"
            >
                <Header />
                <div
                    className="absolute  inset-0 bg-gray-50 sm:bg-transparent sm:from-gray-50 sm:to-gray-50 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
                ></div>

                <div
                    className=" mx-24 py-24 rounded-2xl  bg-prime relative flex justify-between items-center "
                >
                    <div className=" pl-8  text-white">
                        <h1 className="text-3xl font-custom font-extrabold sm:text-5xl">
                            WELCOME TO

                            <strong className="block font-extrabold text-orange-red">
                                EVE MOTORS
                            </strong>
                        </h1>

                        <p className="mt-4 max-w-lg sm:text-xl/relaxed text-white">
                            Embark on Your Journey of Luxury and Performance: Discover Your Perfect Ride with Us.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-4 text-center">

                            <Link to="/addacar" className="inline-block shrink-0 bg-[#1E1E1E] hover:bg-prime border-none rounded-[12px]  border border-orange-red bg-orange-red px-12 py-3 text-sm font-medium text-white transition hover:text-orange-red focus:outline-none focus:ring active:text-orange-red">
                                Add a car</Link>

                            <Link to="/" className="block w-full rounded-[12px] border hover:border-prime hover:bg-transparent px-12 py-3 text-sm font-medium text-orange-red/75 shadow hover:text-orange-red focus:outline-none focus:ring active:text-orange-red sm:w-auto">
                                Back to Home</Link>
                        </div>
                    </div>
                    <div className=''>
                        <img className=' h-72' src="/Dashboardcar.png" alt="" />
                    </div>
                </div>
            </section>
        </>

    );
};

export default FormDashboard;
