import { useState, useEffect } from "react";
import { FetchedCars } from "./services/FetchedCars.service.js";
import { Link } from "react-router-dom";
import Background from '../src/assets/mainbackground.png';
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import LoaderAnimation from "./components/Loader.jsx";


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
  }, [])


  function scrollToTarget() {
    const targetDiv = document.getElementById('scrollTarget');
    if (targetDiv) {
      targetDiv.scrollIntoView({ behavior: 'smooth' });
    }
  }


  return (
    <>
      <section
        className="relative overflow-hidden h-[630px] mx-8 max-[440px]:mx-4 mt-10 max-[440px]:mt-6 rounded-[32px] bg-cover max-[600px]:flex max-[600px]:flex-col max-[600px]:justify-center max-[600px]:items-center bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${Background})` }}
      >
        {/* <img className=" absolute w-full -z-50" src={Background} alt="" srcset="" /> */}
        <div className=" max-[600px]:-translate-y-8 max-[440px]:-translate-y-0">
          <Header />
        </div>

        <div
          className="absolute inset-0 bg-gray-50 bg-transparent sm:from-gray-50  sm:to-gray-50 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
        ></div>

        <div
          className=" h-full max-[600px]:h-auto w-full py-10 px-10"
        >
          <div className="">
            <h1 className=" text-6xl w-[550px] max-[650px]:w-auto max-[1000px]:text-4xl max-[440px]:text-3xl  font-custom font-medium  text-white">
              EveMotors Where We Care About Your Vehicle     </h1>

            <p className="mt-4 w-[350px] max-[440px]:w-auto max-[440px]:text-base  pr-8 text-xl text-white">
              Embark on Your Journey of Luxury and Performance: Discover Your Perfect Ride with Us.
            </p>
          </div>
          <div className=" absolute   max-[600px]:relative max-[600px]:flex max-[600px]:flex-col max-[600px]:gap-4 mt-8   text-center">
            <a
              href="#list"
              onClick={scrollToTarget}
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


      <div id="list">

          <div className=" " >
            <div className=" mx-8 max-[440px]:mx-4 mt-6 grid grid-cols-3 max-[1200px]:grid-cols-2 max-[750px]:grid-cols-1 gap-4">

              {getCars.map((car) => {
                return (
                  <Link key={car._id} to={`/car/${car._id}`} className="group h-[243px] max-[440px]:h-[280px] overflow-hidden  bg-[#1E1E1E] hover:bg-prime rounded-[24px] relative flex  justify-start items-center">
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
      </div >

      <Footer />
    </>
  );
};

export default Home;
