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
        className="relative h-[800px] mx-10 mt-10 rounded-[24px] bg-[url(https://images.unsplash.com/photo-1611858246382-da4877c6476d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80)] bg-cover bg-center bg-no-repeat"
      >
        <div
          className="absolute inset-0 bg-gray-50 bg-transparent sm:from-gray-50 sm:to-gray-50 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
        ></div>

        <div
          className=" h-full w-full py-10 px-10"
        >
          <div className="">
            <h1 className=" text-9xl max-[1000px]:text-8xl  font-bold text-white">
              WELCOME TO

              <span className="block text-9xl max-[1000px]:text-8xl  font-bold   text-orange-red">
                EVE MOTORS
              </span>
            </h1>

            <p className="mt-4 pr-8 text-xl text-white">
              Embark on Your Journey of Luxury and Performance: Discover Your Perfect Ride with Us.
            </p>

            
          </div>
        </div>
        <div className=" absolute bottom-8 right-10 flex   text-center">
              <a
                href=".list"
                className="inline-block shrink-0 rounded-md border border-orange-red bg-orange-red px-12 py-3 mr-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-orange-red focus:outline-none focus:ring active:text-orange-red"
              >
                See our collection
              </a>

              <Link to="/register" className="block w-full rounded bg-white/75 px-12 py-3 text-sm font-medium text-orange-red/75 shadow hover:text-orange-red focus:outline-none focus:ring active:text-orange-red sm:w-auto"
              >
                Sign Up
              </Link>
            </div>
      </section>
      <div className=" mt-7">
      <h1 className="font-bold text-5xl text-gray-900 text-center p-6">Discover Our Collection!</h1>

      <p className=" px-20 max-w-full sm:text-xl/relaxed text-gray-700 text-center font-light">
        Embark on Your Journey of Luxury and Performance: Discover Your Perfect Ride with Us.
      </p>
      </div>

      <div className="list">
      <CarList />
      </div>
    </>
  );
};

export default Home;
