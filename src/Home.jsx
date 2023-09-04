// import { useState, useEffect } from "react";
// import { FetchedCars } from "./services/FetchedCars.service.js";
import { Link } from "react-router-dom";
import CarList from "./components/CarList";

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
        <div
          className="absolute inset-0 bg-gray-50 bg-transparent sm:from-gray-50 sm:to-gray-50 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
        ></div>

        <div
          className=" h-full w-full py-10 px-10"
        >
          <div className="">
            <h1 className=" text-6xl w-[450px] max-[1000px]:text-8xl   text-white">
            Премиальное обслуживание
вашего автомобиля       </h1>

            <p className="mt-4 pr-8 text-xl text-white">
              Embark on Your Journey of Luxury and Performance: Discover Your Perfect Ride with Us.
            </p>

            
          </div>
          <div className=" absolute bottom-8  right-10 flex mt-8   text-center">
              <a
                href=".list"
                className="inline-block shrink-0 rounded-md border border-orange-red bg-[#FF001D] px-12 py-3 mr-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-orange-red focus:outline-none focus:ring active:text-orange-red"
              >
                See our collection
              </a>

              <Link to="/register" className="block w-full rounded-2xl border border-white/20 px-12 py-3 text-sm font-medium text-orange-red/75 shadow hover:text-orange-red focus:outline-none focus:ring active:text-orange-red sm:w-auto"
              >
                Sign Up
              </Link>
            </div>
        </div>
      </section>
      <div className="list">
      <CarList />
      </div>
    </>
  );
};

export default Home;
