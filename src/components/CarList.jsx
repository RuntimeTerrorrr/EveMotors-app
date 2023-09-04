import { Link } from "react-router-dom";

const CarList = () => {
    return (
        <>
            <div className=" ">
                <div className=" mx-8 mt-6 grid grid-cols-3 max-[1200px]:grid-cols-2 max-[750px]:grid-cols-1 gap-4">
                    <Link to="/car/supra-mk4" className="group h-[243px] overflow-hidden  bg-[#1E1E1E] hover:bg-prime rounded-[24px] relative flex  justify-start items-center">
                        <div class=" absolute right-4 z-50   flex transition-all">
                            <img className=" w-64 z-50" src="supra-mk4.png" alt="" srcset="" />
                        </div>
                        <div className=" flex h-full py-6 px-6 flex-col justify-between items-start">
                            <h3 class="  text-4xl  font-custom font-bold uppercase text-white">Toyota Supra
                                Mk-4</h3>
                            <div class=" mt-8">
                                <div className="">
                                    <div className=" ">
                                        <p class=" text-white">
                                            1997 - JAPAN
                                        </p>
                                        <p class=" text-white">
                                            Registered in Karachi
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link to="/car/nissan-gtr" className="group h-[243px] overflow-hidden  bg-[#1E1E1E]  hover:bg-prime  rounded-[24px] relative flex  justify-start items-center">
                        <div class=" absolute right-4 z-50   flex transition-all">
                            <img className=" w-64 z-50" src="gtr.png" alt="" srcset="" />
                        </div>
                        <div className=" flex h-full py-6 px-6 flex-col justify-between items-start">
                            <h3 class="  text-4xl font-custom font-bold uppercase text-white">Toyota Supra
                                Mk-4</h3>
                            <div class=" mt-8">
                                <div className="">
                                    <div className=" ">
                                        <p class=" text-white">
                                            1997 - JAPAN
                                        </p>
                                        <p class=" text-white">
                                            Registered in Karachi
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link to="/car/ford-mustang" className="group h-[243px] overflow-hidden  bg-[#1E1E1E]  hover:bg-prime  rounded-[24px] relative flex  justify-start items-center">
                        <div class=" absolute right-4 z-50   flex transition-all">
                            <img className=" w-64 z-50" src="mustanggt.png" alt="" srcset="" />
                        </div>
                        <div className=" flex h-full py-6 px-6 flex-col justify-between items-start">
                            <h3 class="  text-4xl font-custom font-bold uppercase text-white">Ford Mustang</h3>
                            <div class=" mt-8">
                                <div className="">
                                    <div className=" ">
                                        <p class=" text-white">
                                            1997 - JAPAN
                                        </p>
                                        <p class=" text-white">
                                            Registered in Karachi
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link to="/car/supra-mk4" className="group h-[243px] overflow-hidden  bg-[#1E1E1E]  hover:bg-prime  rounded-[24px] relative flex  justify-start items-center">
                        <div class=" absolute right-4 z-50   flex transition-all">
                            <img className=" w-64 z-50" src="supra-mk4.png" alt="" srcset="" />
                        </div>
                        <div className=" flex h-full py-6 px-6 flex-col justify-between items-start">
                            <h3 class="  text-4xl font-custom font-bold uppercase text-white">Toyota Supra
                                Mk-4</h3>
                            <div class=" mt-8">
                                <div className="">
                                    <div className=" ">
                                        <p class=" text-white">
                                            1997 - JAPAN
                                        </p>
                                        <p class=" text-white">
                                            Registered in Karachi
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link to="/car/nissan-gtr" className="group h-[243px] overflow-hidden  bg-[#1E1E1E]  hover:bg-prime  rounded-[24px] relative flex  justify-start items-center">
                        <div class=" absolute right-4 z-50   flex transition-all">
                            <img className=" w-64 z-50" src="gtr.png" alt="" srcset="" />
                        </div>
                        <div className=" flex h-full py-6 px-6 flex-col justify-between items-start">
                            <h3 class="  text-4xl font-custom font-bold uppercase text-white">Toyota Supra
                                Mk-4</h3>
                            <div class=" mt-8">
                                <div className="">
                                    <div className=" ">
                                        <p class=" text-white">
                                            1997 - JAPAN
                                        </p>
                                        <p class=" text-white">
                                            Registered in Karachi
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link to="/car/ford-mustang" className="group h-[243px] overflow-hidden  bg-[#1E1E1E]  hover:bg-prime  rounded-[24px] relative flex  justify-start items-center">
                        <div class=" absolute right-4 z-50   flex transition-all">
                            <img className=" w-64 z-50" src="mustanggt.png" alt="" srcset="" />
                        </div>
                        <div className=" flex h-full py-6 px-6 flex-col justify-between items-start">
                            <h3 class="  text-4xl font-custom font-bold uppercase text-white">Ford Mustang</h3>
                            <div class=" mt-8">
                                <div className="">
                                    <div className=" ">
                                        <p class=" text-white">
                                            1997 - JAPAN
                                        </p>
                                        <p class=" text-white">
                                            Registered in Karachi
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
                
            </div>
        </>
    );
};

export default CarList;