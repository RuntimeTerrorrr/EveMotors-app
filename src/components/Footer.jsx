const Footer= ()=>{
    return(
        <>
        
        <div className=" h-[244px] bg-white rounded-[32px] mx-8 mt-8 flex justify-center items-center ">
           <div className=" h-[141px]   max-[1080px]:h-auto max-[1080px]:py-10 w-full bg-[#F5F5F5] mx-20 px-10 rounded-[32px] flex  max-[1080px]:flex-col max-[1080px]:gap-4 items-center justify-between">
           <h2 className=" font-custom text-lg font-semibold">Join us in Social Networks:</h2>
           <div className="  grid grid-cols-3  gap-8">
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
      <div className=" h-24 flex flex-col justify-center mx-8 ">
      <div className=" flex gap-2">
       <h2 className=" text-white">© 2023 | All Rights</h2>
       <h2 className=" text-white">Eve Motors</h2>
      </div>
      <div className=" flex gap-2">
       <h2 className=" text-white"> Reserved by</h2>
       <h2 className=" text-white">Pakistan</h2>
      </div>
      </div></>
    )
};
export default Footer;