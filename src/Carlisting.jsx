import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import AddCarPopup from './components/popups/AddCarPopup';
import ModelViewer from './components/ModelViewer';
import { Link, useNavigate } from 'react-router-dom';

let Url = '/toyota_supra_a80_1993/scene.gltf';

const Carlisting = () => {
    const [cdnLink, setCdnLink]= useState('');
    const [scaleValue, setScaleValue]= useState('1');
    const [targetX, setTargetX] = useState('0');
    const [targetY, setTargetY] = useState('0');
    const [targetZ, setTargetZ] = useState('0');


    const handleCdnLinkChange = (value)=>{
     
        setCdnLink(value);
    };
    const handleScaleValueChange =(value)=>{
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
    
    const fixedScale = [ scaleValue, scaleValue, scaleValue ]; 
    const fixedTarget = [targetX, targetY, targetZ];
    
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
                    className=" mx-24 py-10  rounded-2xl  bg-prime relative flex flex-col justify-between items-center "
                >
                 <AddCarPopup  onCdnLinkChange={handleCdnLinkChange} onhandleScaleValueChange={handleScaleValueChange} onhandleChangeTargetX={handleChangeTargetX} onhandleChangeTargetY={handleChangeTargetY} onhandleChangeTargetZ={handleChangeTargetZ} />
                 <div className=" overflow-hidden mt-32 ">
                <div className=''>
                    <ModelViewer modelUrl={cdnLink} fixedScale={fixedScale} fixedTarget={fixedTarget} />
                </div>
            </div>

                </div>
               
            </section>
        </>

    );
};

export default Carlisting;
