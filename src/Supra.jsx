import staringIcon from '../src/assets/Icons/staring.png';
import ReloadIcon from '../src/assets/Icons/reload.png';
import ThunderIcom from '../src/assets/Icons/thunder.png';
import SpiralIcom from '../src/assets/Icons/spiral.png';
import Footer from './components/Footer';
import Header from './components/Header';
import ModelViewer from "./components/ModelViewer.jsx";
let Url = '/toyota_supra_a80_1993/scene.gltf'

const Supra = () => {
    const fixedScale = [0.4, 0.4, 0.4]; 
    const fixedTarget = [0, 0, 0]; 
    return (
        <>
        <Header/>
        <div className=' '>
            <div className="     ">
                <div className=" rounded-[32px] mt-8 mx-8  h-[600px] bg-prime">
                <div className='  px-8 translate-y-24'>
                <h1 className=" font-prime text-9xl max-[1200px]:text-8xl max-[750px]:text-7xl uppercase text-white ">Toyota Supra Mk-4</h1>
                <p className=' text-white font-custom text-2xl w-[600px]'>The iconic sports car known for its timeless design and thrilling turbocharged performance.</p>
                </div>
                </div>
            </div>
        </div>
        {/* <div className=' bg-white h-[600px] mx-8 rounded-[32px]' >
        </div> */}
        <div  className=' mx-8 mt-8 grid grid-cols-3 gap-4 '>
            <div className=' h-[500px] rounded-[32px] bg-center bg-cover bg-no-repeat col-start-1 col-span-2 bg-[url(https://images.unsplash.com/photo-1603811478700-7590182b6abb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80)]'></div>
            <div className='  h-[500px] rounded-[32px] bg-center bg-cover bg-no-repeat bg-[url(https://images.unsplash.com/photo-1584610351025-1cf49565315d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80)]'></div>
            <div className='  h-[500px] rounded-[32px] bg-center bg-cover bg-no-repeat  bg-[url(https://images.unsplash.com/photo-1603811478970-acb6e0916890?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)]'></div>
            <div className='  h-[500px] rounded-[32px] bg-center bg-cover bg-no-repeat col-start-2 col-end-4 bg-[url(https://images.unsplash.com/photo-1603811478698-0b1d6256f79a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80)]'></div>
        </div>
        <div>
            <div>
                <h1 className=' font-prime text-white text-9xl mt-8 px-8'>
                   3d Model
                </h1>
            </div>
        </div>
        <div className=" overflow-hidden ">
                <div className=''>
                    <ModelViewer modelUrl={Url} fixedScale={fixedScale} fixedTarget={fixedTarget} />
                </div>
            </div>
            <div className=' h-[500px] bg-prime mx-8 rounded-[32px] flex justify-between px-20 items-center'>
            <div>
            <div >
                <div className=' grid grid-cols-2 gap-8'>
                    <div className=' w-32 h-32 rounded-[13px] bg-white flex flex-col justify-between items-center py-4'>
                    <div className=' w-10 h-10 bg-prime'>
                    </div>
                    <ul  className=' flex flex-col items-center'>
                        <li>
                            <h2 className=' font-custom font-bold'>
                                480kph
                            </h2>
                        </li>
                        <li>
                            <h2 className=' font-custom font-medium opacity-70'>
                                Top Speed
                            </h2>
                        </li>
                    </ul>
                    </div>
                    <div className=' w-32 h-32 rounded-[13px] bg-white flex flex-col justify-between items-center py-4'>
                    <div className=' w-10 h-10 bg-prime'></div>
                    <ul  className=' flex flex-col items-center'>
                        <li>
                            <h2 className=' font-custom font-bold'>
                                480kph
                            </h2>
                        </li>
                        <li>
                            <h2 className=' font-custom font-medium opacity-70'>
                                Top Speed
                            </h2>
                        </li>
                    </ul>
                    </div>
                    <div className=' w-32 h-32 rounded-[13px] bg-white flex flex-col justify-between items-center py-4'>
                    <div className=' w-10 h-10 bg-prime'></div>
                    <ul  className=' flex flex-col items-center'>
                        <li>
                            <h2 className=' font-custom font-bold'>
                                480kph
                            </h2>
                        </li>
                        <li>
                            <h2 className=' font-custom font-medium opacity-70'>
                                Top Speed
                            </h2>
                        </li>
                    </ul>
                    </div>
                    <div className=' w-32 h-32 rounded-[13px] bg-white flex flex-col justify-between items-center py-4'>
                    <div className=' w-10 h-10 bg-prime'></div>
                    <ul  className=' flex flex-col items-center'>
                        <li>
                            <h2 className=' font-custom font-bold'>
                                480kph
                            </h2>
                        </li>
                        <li>
                            <h2 className=' font-custom font-medium opacity-70'>
                                Top Speed
                            </h2>
                        </li>
                    </ul>
                    </div>
                </div>
                </div>
            </div>
            <div className=' text-white w-[600px]'>
                <h2 className=' font-custom text-6xl font-bold pb-6'>Toyota Supra Mk-4</h2>
                <p className=' font-custom'>The Toyota Supra MK4 is renowned for its legendary 2JZ-GTE engine, a 3.0-liter twin-turbocharged inline-six, prized for its performance and modification capabilities among mechanics and enthusiasts.</p>
            </div>
            <div>
            <div>
                <div className=' grid grid-cols-2 gap-8'>
                    <div className=' w-32 h-32 rounded-[13px] bg-white flex flex-col justify-between items-center py-4'>
                    <div className=' w-10 h-10 '>
                    <img src={staringIcon} alt="" srcset="" />
                    </div>
                    <ul  className=' flex flex-col items-center'>
                        <li>
                            <h2 className=' font-custom font-bold'>
                                480kph
                            </h2>
                        </li>
                        <li>
                            <h2 className=' font-custom font-medium opacity-70'>
                                Top Speed
                            </h2>
                        </li>
                    </ul>
                    </div>
                    <div className=' w-32 h-32 rounded-[13px] bg-white flex flex-col justify-between items-center py-4'>
                    <div className=' w-10 h-10 '>
                        <img src={ReloadIcon} alt="" srcset="" />
                    </div>
                    <ul  className=' flex flex-col items-center'>
                        <li>
                            <h2 className=' font-custom font-bold'>
                                3s
                            </h2>
                        </li>
                        <li>
                            <h2 className=' font-custom font-medium opacity-70'>
                                0-100
                            </h2>
                        </li>
                    </ul>
                    </div>
                    <div className=' w-32 h-32 rounded-[13px] bg-white flex flex-col justify-between items-center py-4'>
                    <div className=' w-10 h-10 '>
                        <img src={ThunderIcom} alt="" srcset="" />
                    </div>
                    <ul  className=' flex flex-col items-center'>
                        <li>
                            <h2 className=' font-custom font-bold'>
                                840hp
                            </h2>
                        </li>
                        <li>
                            <h2 className=' font-custom font-medium opacity-70'>
                                Power
                            </h2>
                        </li>
                    </ul>
                    </div>
                    <div className=' w-32 h-32 rounded-[13px] bg-white flex flex-col justify-between items-center py-4'>
                    <div className=' w-10 h-10'>
                        <img src={SpiralIcom} alt="" srcset="" />
                    </div>
                    <ul  className=' flex flex-col items-center'>
                        <li>
                            <h2 className=' font-custom font-bold'>
                                480Nm
                            </h2>
                        </li>
                        <li>
                            <h2 className=' font-custom font-medium opacity-70'>
                                Torque
                            </h2>
                        </li>
                    </ul>
                    </div>
                </div>
                </div>
            </div>
            </div>
            <Footer/>

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

export default Supra;