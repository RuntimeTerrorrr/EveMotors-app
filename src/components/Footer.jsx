import Github from '../assets/Icons/Github.svg';
import Behnace from '../assets/Icons/Behance.svg';
import Linkedin from '../assets/Icons/Linkedin.svg';

const Footer= ()=>{
    return(
        <>
        <div className=" h-[244px] max-[900px]:h-auto max-[900px]:py-10 bg-white rounded-[32px] mx-8  max-[440px]:mx-4 mt-8 flex justify-center items-center ">
           <div className=" h-[141px]   max-[1080px]:h-auto max-[1080px]:py-10 w-full  max-[440px]:w-full bg-[#F5F5F5] mx-20 px-8 max-[440px]:mx-8  rounded-[32px] flex  max-[1080px]:flex-col max-[1080px]:gap-4 items-center justify-between">
           <h2 className=" font-custom text-lg font-semibold">Join us in Social Networks:</h2>
           <div className="  grid grid-cols-3 max-[900px]:grid-cols-1 gap-8">
            <a href="">
           <div className=" w-64 cursor-pointer hover:bg-[#F5F5F5] max-[1350px]:w-auto  max-[440px]:w-[200px] max-[1350px]:px-6  h-16 bg-white rounded-[18px] flex justify-center items-center gap-3 ">
              <img className=" h-12" src={Github} alt="" srcset="" />
              <h2 className=" font-custom font-bold">Github</h2>
            </div>
            </a>
            <a href="">
            <div className=" w-64  cursor-pointer hover:bg-[#F5F5F5] max-[1350px]:w-auto  max-[440px]:w-[200px] max-[1350px]:px-6  h-16 bg-white rounded-[18px] flex justify-center items-center gap-3 ">
            <img className=" h-12" src={Behnace} alt="" srcset="" />
              <h2 className=" font-custom font-bold">Behance</h2>
            </div>
            </a>
            <a href="">
            <div className=" w-64 cursor-pointer hover:bg-[#F5F5F5] max-[1350px]:w-auto  max-[440px]:w-[200px] max-[1350px]:px-6 h-16 bg-white rounded-[18px] flex justify-center items-center gap-3 ">
            <img className=" h-12" src={Linkedin} alt="" srcset="" />
              <h2 className=" font-custom font-bold">Linkedin</h2>
            </div>
            </a>  
           </div>
           </div>
      </div>
      <div className=" h-24 flex flex-col justify-center mx-8 max-[440px]:mx-4 px-8 ">
      <div>
      <div className=" flex gap-2">
       <h2 className=" text-white">© 2023 | All Rights</h2>
       <h2 className=" text-white">Eve Motors</h2>
      </div>
      <div className=" flex gap-2">
       <h2 className=" text-white"> Reserved by</h2>
       <h2 className=" text-white">Pakistan</h2>
      </div>
      </div>
      </div></>
    )
};
export default Footer;