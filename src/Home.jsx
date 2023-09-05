// import { useState, useEffect } from "react";
// import { FetchedCars } from "./services/FetchedCars.service.js";
import { Link } from "react-router-dom";
import CarList from "./components/CarList";
import Header from "./components/Header";
import Github from '../src/assets/Icons/Github.svg';
import Behnace from '../src/assets/Icons/Behance.svg';
import Linkedin from '../src/assets/Icons/Linkedin.svg';

const Home = () => {

  // const [getCars, setCars] = useState([]);

  // useEffect(() => {
  //   async function Cars() {
  //     try {
  //       const carData = await FetchedCars();
  //       setCars(carData);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   }

  //   Cars();
  // }, []);

  return (
    <>
      <section
        className="relative h-[630px] mx-8 mt-10 rounded-[32px] bg-[url(./assets/mainbackground.png)] bg-cover bg-center bg-no-repeat"
      >
            <Header/>

        <div
          className="absolute inset-0 bg-gray-50 bg-transparent sm:from-gray-50 sm:to-gray-50 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
        ></div>

        <div
          className=" h-full w-full py-10 px-10"
        >
          <div className="">
            <h1 className=" text-6xl w-[550px] max-[650px]:w-auto max-[1000px]:text-4xl  font-custom font-medium  text-white">
            EveMotors Where We Care About Your Vehicle     </h1>

            <p className="mt-4 w-[350px]  pr-8 text-xl text-white">
              Embark on Your Journey of Luxury and Performance: Discover Your Perfect Ride with Us.
            </p>

            
          </div>
          <div className=" absolute  max-[600px]:relative   flex mt-8   text-center">
              <a
                href=".list"
                className="inline-block shrink-0 rounded-[13px]    bg-[#FF001D] px-12 py-3 max-[600px]:px-6  mr-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-orange-red focus:outline-none focus:ring active:text-orange-red"
              >
                See our collection
              </a>

              <Link to="/register" className="inline-block shrink-0 rounded-[13px] border border-white  px-12 py-3 mr-3 text-sm font-medium text-white hover:border-[#1E1E1E] transition hover:bg-[#1E1E1E] hover:text-orange-red focus:outline-none focus:ring active:text-orange-red"
              >
                Sign Up
              </Link>
            </div>
        </div>
      </section>
      <div className="list">
      <CarList />
      </div>
      <div className=" h-[244px] max-[900px]:h-auto max-[900px]:py-10 bg-white rounded-[32px] mx-8 mt-8 flex justify-center items-center ">
           <div className=" h-[141px]   max-[1080px]:h-auto max-[1080px]:py-10 w-full bg-[#F5F5F5] mx-20 px-10 rounded-[32px] flex  max-[1080px]:flex-col max-[1080px]:gap-4 items-center justify-between">
           <h2 className=" font-custom text-lg font-semibold">Join us in Social Networks:</h2>
           <div className="  grid grid-cols-3 max-[900px]:grid-cols-1 gap-8">
            <div className=" w-64 max-[1350px]:w-auto max-[1350px]:px-6  h-16 bg-white rounded-[18px] flex justify-center items-center gap-3 ">
              <a href=""><img className=" h-12" src={Github} alt="" srcset="" /></a>
              <h2 className=" font-custom">ВКонтакте</h2>
            </div>
            <div className=" w-64 max-[1350px]:w-auto max-[1350px]:px-6  h-16 bg-white rounded-[18px] flex justify-center items-center gap-3 ">
              <a href=""><img className=" h-12" src={Behnace} alt="" srcset="" /></a>
              <h2 className=" font-custom">ВКонтакте</h2>
            </div>
            <div className=" w-64 max-[1350px]:w-auto max-[1350px]:px-6 h-16 bg-white rounded-[18px] flex justify-center items-center gap-3 ">
              <a href=""><img className=" h-12" src={Linkedin} alt="" srcset="" /></a>
              <h2 className=" font-custom">ВКонтакте</h2>
            </div>
           </div>
           </div>
      </div>
      <div className=" h-24 flex flex-col justify-center mx-8 px-8 ">
      <div className=" flex gap-2">
       <h2 className=" text-white">© 2023 | All Rights</h2>
       <h2 className=" text-white">Eve Motors</h2>
      </div>
      <div className=" flex gap-2">
       <h2 className=" text-white"> Reserved by</h2>
       <h2 className=" text-white">Pakistan</h2>
      </div>
      </div>
    </>
  );
};

export default Home;
