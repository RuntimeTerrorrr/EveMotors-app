import { useState, useEffect } from "react";
import { FetchedCars } from "./services/FetchedCars.service.js";

const Home = () => {

  const [getCars, setCars] = useState([]);

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
  }, []);

  return (
    <>
      <section
        className="relative bg-[url(https://images.unsplash.com/photo-1611858246382-da4877c6476d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80)] bg-cover bg-center bg-no-repeat"
      >
        <div
          className="absolute inset-0 bg-gray-50 sm:bg-transparent sm:from-gray-50 sm:to-gray-50 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
        ></div>

        <div
          className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
        >
          <div className="max-w-xl ltr:sm:text-left rtl:sm:text-right">
            <h1 className="text-3xl font-extrabold sm:text-5xl text-white">
              WELCOME TO

              <strong className="block font-extrabold text-orange-red">
                EVE MOTORS
              </strong>
            </h1>

            <p className="mt-4 max-w-lg sm:text-xl/relaxed text-white">
              Embark on Your Journey of Luxury and Performance: Discover Your Perfect Ride with Us.
            </p>

            <div className="mt-8 flex flex-wrap gap-4 text-center">
              <a
                href="#"
                className="inline-block shrink-0 rounded-md border border-orange-red bg-orange-red px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-orange-red focus:outline-none focus:ring active:text-orange-red"
              >
                See our collection
              </a>
            </div>
          </div>
        </div>
      </section>

      <h1 className="font-bold text-3xl text-gray-900 text-center p-6">Discover Our Collection!</h1>

      <p className=" max-w-full sm:text-xl/relaxed text-gray-700 text-center font-light">
        Embark on Your Journey of Luxury and Performance: Discover Your Perfect Ride with Us.
      </p>

      {/* {getCars.map((car) => (
        <a href="#" className="group relative block my-12">
          <div className="relative h-[350px] sm:h-[450px] transition-all">
            <img
              src={car.imgLinkOne}
              alt="carImage"
              className="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0"
            />

            <img
              src={car.imgLinkTwo}
              alt="carImage"
              className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
            />
          </div>

          <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
            <h3 className="text-xl font-medium text-white">{car.make} {car.model}</h3>

            <p className="mt-1.5 max-w-[40ch] text-xs text-white">
              {car.year} - {car.assembledIn}
              Registered In {car.registeredIn}
            </p>

            <span
              className="mt-3 inline-block rounded-md bg-orange-red px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
            >
              Learn More
            </span>
          </div>
        </a>

      ))} */}
    </>
  );
};

export default Home;
