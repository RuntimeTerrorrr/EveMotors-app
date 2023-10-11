import staringIcon from '../src/assets/Icons/staring.png';
import ReloadIcon from '../src/assets/Icons/reload.png';
import ThunderIcom from '../src/assets/Icons/thunder.png';
import SpiralIcom from '../src/assets/Icons/spiral.png';
import PistonIcon from '../src/assets/Icons/piston.png';
import VehicleIcon from '../src/assets/Icons/vehicle.png';
import TransmissionIcon from '../src/assets/Icons/transmission.png';
import EngineIcon from '../src/assets/Icons/engine.png';
import Footer from './components/Footer';
import Header from './components/Header';
import ModelViewer from "./components/ModelViewer.jsx";
let Url = '/toyota_supra_a80_1993/scene.gltf';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCarById } from './services/fetchCarById.service.js'

const CarDetail = () => {
    const { carId } = useParams();
    const [carData, setCarData] = useState(null);
  
    useEffect(() => {
      async function fetchData() {
        try {
          const data = await fetchCarById(carId); // Fetch car data by ID
  
          if (data) {
            // If data is available, update the carData state
            setCarData(data);
          } else {
            // Handle the case when the car data is not found or an error occurs
            console.error('Car not found or an error occurred.');
            // You can set an appropriate error message or redirect the user to an error page.
          }
        } catch (error) {
          console.error('Error while fetching car data:', error);
          // Handle the error, e.g., show an error message to the user or redirect to an error page.
        }
      }
  
      fetchData();
    }, [carId]);
    const fixedTarget = [2.5, 1.8, 1.5]; // Adjust the target as needed
    return (
        
        <>
            <Header />
            {carData ? (
                <div>

                    <div className=' '>
                        <div className="     ">
                            <div className=" flex items-center max-sm:justify-center rounded-[32px] mx-8  h-[500px] bg-prime">
                                <div className='  px-8 '>
                                    <h1 className=" font-prime text-9xl max-[1200px]:text-8xl max-[750px]:text-6xl max-sm:text-4xl   uppercase text-white ">{carData.makeModel}</h1>
                                    <p className=' text-white font-custom text-2xl  max-[900px]:w-auto '>{carData.intro}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className=' bg-white h-[600px] mx-8 rounded-[32px]' >
        </div> */}
                    <div className=' mx-8 mt-8 grid grid-cols-3 max-[900px]:grid-cols-1 max-[900px]:gap-y-8  gap-4 '>
                        <div className=' h-[500px] rounded-[32px] bg-center bg-cover bg-no-repeat col-start-1 col-span-2'  style={{ backgroundImage: `url(${carData.imageLink1})` }}></div>
                        <div className='  h-[500px] rounded-[32px] bg-center bg-cover bg-no-repeat max-[900px]:col-start-1 max-[900px]:col-span-2 ' style={{ backgroundImage: `url(${carData.imageLink2})` }}></div>
                        <div className='  h-[500px] rounded-[32px] bg-center bg-cover bg-no-repeat max-[900px]:col-start-1 max-[900px]:col-span-2 ' style={{ backgroundImage: `url(${carData.imageLink3})` }}></div>
                        <div className='  h-[500px] rounded-[32px] bg-center bg-cover bg-no-repeat col-start-2 col-end-4 max-[900px]:col-start-1 max-[900px]:col-span-2' style={{ backgroundImage: `url(${carData.imageLink4})` }}></div>
                    </div>
                    <div>
                        <div>
                            <h1 className=' font-prime text-white text-9xl max-[1440px]:text-7xl max-[1200px]:text-5xl  mt-8 px-8'>
                                3d Model
                            </h1>
                        </div>
                    </div>
                    <div className=" overflow-hidden ">
                        <div className=''>
                            <ModelViewer modelUrl={carData.modelCDN} fixedScale={carData.fixedScaleValue} fixedTarget={carData.fixedTargetValue.split(',').map(parseFloat)} />
                        </div>
                    </div>
                    <div className=' h-[500px] bg-prime mx-8 max-sm:h-auto max-sm:py-10   rounded-[32px] flex justify-between max-[1000px]:justify-center max-[650px]:flex-col gap-4 px-20 max-[1480px]:px-10 max-sm:px-4 items-center '>
                        <div className=' max-[1200px]:order-2'>
                            <div >
                                <div className=' grid grid-cols-2  gap-8 max-[1380px]:gap-4 '>
                                    <div className=' w-32  h-32 max-[1110px]:w-28 max-[1110px]:h-28 rounded-[13px] bg-white flex flex-col justify-between items-center py-4'>
                                        <div className=' w-10 h-10 max-[1110px]:w-6 max-[1110px]:h-6 '>
                                            <img src={VehicleIcon} alt="" srcSet="" />
                                        </div>
                                        <ul className=' flex flex-col items-center'>
                                            <li>
                                                <h2 className=' font-custom font-bold'>
                                                    {carData.bodyType}
                                                </h2>
                                            </li>
                                            <li>
                                                <h2 className=' font-custom font-medium max-[1110px]:text-sm opacity-70'>
                                                    Body Type
                                                </h2>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className=' w-32 h-32 max-[1110px]:w-28 max-[1110px]:h-28 rounded-[13px] bg-white flex flex-col justify-between items-center py-4'>
                                        <div className=' w-10 h-10 max-[1110px]:w-6 max-[1110px]:h-6 '>
                                            <img src={EngineIcon} alt="" srcSet="" />
                                        </div>
                                        <ul className=' flex flex-col items-center'>
                                            <li>
                                                <h2 className=' font-custom font-bold'>
                                                    {carData.engine}
                                                </h2>
                                            </li>
                                            <li>
                                                <h2 className=' font-custom font-medium max-[1110px]:text-sm opacity-70'>
                                                    Engine
                                                </h2>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className=' w-32 h-32 max-[1110px]:w-28 max-[1110px]:h-28 rounded-[13px] bg-white flex flex-col justify-between items-center py-4'>
                                        <div className=' w-10 h-10 max-[1110px]:w-6 max-[1110px]:h-6'>
                                            <img src={TransmissionIcon} alt="" srcSet="" />
                                        </div>
                                        <ul className=' flex flex-col items-center'>
                                            <li>
                                                <h2 className=' font-custom font-bold'>
                                                    {carData.transmission}
                                                </h2>
                                            </li>
                                            <li>
                                                <h2 className=' font-custom font-medium max-[1110px]:text-sm opacity-70'>
                                                    Transmission
                                                </h2>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className=' w-32 h-32 max-[1110px]:w-28 max-[1110px]:h-28  rounded-[13px] bg-white flex flex-col justify-between items-center py-4'>
                                        <div className=' w-10 h-10 max-[1110px]:w-6 max-[1110px]:h-6 '>
                                            <img src={PistonIcon} alt="" srcSet="" />
                                        </div>
                                        <ul className=' flex flex-col items-center'>
                                            <li>
                                                <h2 className=' font-custom font-bold'>
                                                    {carData.displacement}
                                                </h2>
                                            </li>
                                            <li>
                                                <h2 className=' font-custom font-medium max-[1110px]:text-sm opacity-70'>
                                                    Displacement
                                                </h2>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=' text-white w-[600px] max-[1330px]:w-[400px] max-[1200px]:order-1 max-[1000px]:hidden'>
                            <h2 className=' font-custom text-6xl max-[1100px]:text-5xl font-bold pb-6'>{carData.makeModel}</h2>
                            <p className=' font-custom'>{carData.intro}</p>
                        </div>
                        <div className=' max-[1200px]:order-3'>
                            <div >
                                <div className=' grid grid-cols-2 gap-8 max-[1380px]:gap-4 '>
                                    <div className=' w-32 h-32 max-[1110px]:w-28 max-[1110px]:h-28 rounded-[13px] bg-white flex flex-col justify-between items-center py-4'>
                                        <div className=' w-10 h-10 max-[1110px]:w-6 max-[1110px]:h-6 '>
                                            <img src={staringIcon} alt="" srcSet="" />
                                        </div>
                                        <ul className=' flex flex-col items-center'>
                                            <li>
                                                <h2 className=' font-custom font-bold'>
                                                    {carData.topSpeed}
                                                </h2>
                                            </li>
                                            <li>
                                                <h2 className=' font-custom font-medium max-[1110px]:text-sm opacity-70'>
                                                    Top Speed
                                                </h2>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className=' w-32 h-32 max-[1110px]:w-28 max-[1110px]:h-28 rounded-[13px] bg-white flex flex-col justify-between items-center py-4'>
                                        <div className=' w-10 h-10 max-[1110px]:w-6 max-[1110px]:h-6'>
                                            <img src={ReloadIcon} alt="" srcSet="" />
                                        </div>
                                        <ul className=' flex flex-col items-center'>
                                            <li>
                                                <h2 className=' font-custom font-bold'>
                                                    {carData.zeroToHundred}
                                                </h2>
                                            </li>
                                            <li>
                                                <h2 className=' font-custom font-medium max-[1110px]:text-sm opacity-70'>
                                                    0-100
                                                </h2>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className=' w-32 h-32 max-[1110px]:w-28 max-[1110px]:h-28 rounded-[13px] bg-white flex flex-col justify-between items-center py-4'>
                                        <div className=' w-10 h-10 max-[1110px]:w-6 max-[1110px]:h-6 '>
                                            <img src={ThunderIcom} alt="" srcSet="" />
                                        </div>
                                        <ul className=' flex flex-col items-center'>
                                            <li>
                                                <h2 className=' font-custom font-bold'>
                                                    {carData.power}
                                                </h2>
                                            </li>
                                            <li>
                                                <h2 className=' font-custom font-medium max-[1110px]:text-sm opacity-70'>
                                                    Power
                                                </h2>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className=' w-32 h-32 max-[1110px]:w-28 max-[1110px]:h-28 rounded-[13px] bg-white flex flex-col justify-between items-center py-4'>
                                        <div className=' w-10 h-10 max-[1110px]:w-6 max-[1110px]:h-6'>
                                            <img src={SpiralIcom} alt="" srcSet="" />
                                        </div>
                                        <ul className=' flex flex-col items-center'>
                                            <li>
                                                <h2 className=' font-custom font-bold'>
                                                    {carData.torque}
                                                </h2>
                                            </li>
                                            <li>
                                                <h2 className=' font-custom font-medium max-[1110px]:text-sm opacity-70'>
                                                    Torque
                                                </h2>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (<div>Loading car data...</div>
            )}

            <Footer />

            {/* <div className="h-screen w-full bg-zinc-100">
                <div>
                    <ModelViewer modelUrl={Url} fixedScale={fixedScale} fixedTarget={fixedTarget} />
                </div>
            </div>

            <div className="w-11/12 m-auto flow-root rounded-lg border border-gray-100 py-3 shadow-sm">
                <dl className="-my-3 divide-y divide-gray-100 text-sm">
                    <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                        <dt className="font-medium text-gray-900">Make</dt>
                        <dd className="text-gray-700 sm:col-span-2">Toyota</dd>
                    </div>

                    <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                        <dt className="font-medium text-gray-900">Model</dt>
                        <dd className="text-gray-700 sm:col-span-2">Supra MK IV</dd>
                    </div>

                    <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                        <dt className="font-medium text-gray-900">Year</dt>
                        <dd className="text-gray-700 sm:col-span-2">1997</dd>
                    </div>

                    <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                        <dt className="font-medium text-gray-900">TopSpeed</dt>
                        <dd className="text-gray-700 sm:col-span-2">320 MPH</dd>
                    </div>

                    <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                        <dt className="font-medium text-gray-900">Power</dt>
                        <dd className="text-gray-700 sm:col-span-2">840 HP</dd>
                    </div>

                    <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                        <dt className="font-medium text-gray-900">Torque</dt>
                        <dd className="text-gray-700 sm:col-span-2">315 </dd>
                    </div>

                    <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                        <dt className="font-medium text-gray-900">Color</dt>
                        <dd className="text-gray-700 sm:col-span-2">Blue</dd>
                    </div>

                    <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                        <dt className="font-medium text-gray-900">Registered In</dt>
                        <dd className="text-gray-700 sm:col-span-2">Karachi</dd>
                    </div>

                    <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                        <dt className="font-medium text-gray-900">Assembled In</dt>
                        <dd className="text-gray-700 sm:col-span-2">Japan</dd>
                    </div>
                </dl>
                <button className="my-8 w-full text-center inline-block shrink-0 rounded-md border border-orange-red bg-orange-red px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-orange-red focus:outline-none focus:ring active:text-orange-red">
                    Talk to Dealer
                </button>
            </div> */}
        </>
    );
};

export default CarDetail;