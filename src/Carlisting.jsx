import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import AddCarPopup from './components/popups/AddCarPopup';
import ModelViewer from './components/ModelViewer';
import { Link, useNavigate } from 'react-router-dom';
import { FetchedCars } from './services/FetchedCars.service';

let Url = '/toyota_supra_a80_1993/scene.gltf';

const Carlisting = () => {
    const [getCars, setCars] = useState([]);
    const [cdnLink, setCdnLink] = useState('');
    const [scaleValue, setScaleValue] = useState('1');
    const [targetX, setTargetX] = useState('0');
    const [targetY, setTargetY] = useState('0');
    const [targetZ, setTargetZ] = useState('0');


    const handleCdnLinkChange = (value) => {

        setCdnLink(value);
    };
    const handleScaleValueChange = (value) => {
        setScaleValue(value);
    };
    const handleChangeTargetX = (value) => {
        const parsedValue = parseInt(value, 10);
        setTargetX(parsedValue);
    };

    const handleChangeTargetY = (value) => {
        const parsedValue = parseInt(value, 10);
        setTargetY(parsedValue);
    };

    const handleChangeTargetZ = (value) => {
        const parsedValue = parseInt(value, 10);
        setTargetZ(parsedValue);
    };

    const fixedScale = [scaleValue, scaleValue, scaleValue];
    const fixedTarget = [targetX, targetY, targetZ];

    const navigate = useNavigate();

    useEffect(() => {

        async function Cars() {
            try {
                const carData = await FetchedCars();
                setCars(carData);
            } catch (error) {
                console.error(error);
            }
        }

        Cars();

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
                    className=" mx-24 py-10  rounded-2xl  bg-prime relative flex flex-col justify-between items-center "
                >
                    <AddCarPopup onCdnLinkChange={handleCdnLinkChange} onhandleScaleValueChange={handleScaleValueChange} onhandleChangeTargetX={handleChangeTargetX} onhandleChangeTargetY={handleChangeTargetY} onhandleChangeTargetZ={handleChangeTargetZ} />
                    <div className=" overflow-hidden mt-32 ">
                        <div className=''>
                            <ModelViewer modelUrl={cdnLink} fixedScale={fixedScale} fixedTarget={fixedTarget} />
                        </div>
                    </div>

                </div>

                <div className=" " >
                    <div className=" mx-8 max-[440px]:mx-4 mt-6 grid grid-cols-3 max-[1200px]:grid-cols-2 max-[750px]:grid-cols-1 gap-4">

                        {getCars.map((car) => {
                            return (
                                <Link key={car._id} to={`/deletecar`}
                                    state={{ carData: car }}
                                    className="group h-[243px] max-[440px]:h-[280px] overflow-hidden  bg-[#1E1E1E] hover:bg-prime rounded-[24px] relative flex  justify-start items-center">
                                    <div className=" absolute right-4 z-50   flex transition-all">
                                        <img className=" group-hover:w-96 transition-all w-64 z-50" src="supra-mk4.png" alt="" srcSet="" />
                                    </div>
                                    <div className=" flex h-full py-6 px-6 flex-col justify-between items-start">
                                        <h3 className="  text-4xl  font-custom font-bold uppercase text-white">{car.makeModel}</h3>
                                        <div className=" mt-8">
                                            <div className="">
                                                <div className=" ">
                                                    <p className=" text-white">
                                                        {car.registeredIn}
                                                    </p>
                                                    <p className=" text-white">
                                                        Registered in {car.assembledIn}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>

                            );
                        })}
                    </div>

                </div>

            </section>
        </>

    );
};

export default Carlisting;
