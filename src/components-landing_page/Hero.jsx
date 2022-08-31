import React from "react";
import Navbar from "./Navbar";
import clouds from "../assets/center_bg_landing_header.svg";
import leftImage from "../assets/left_bg_landing_header.svg";
import rightImage from "../assets/right_bg_landing_header.svg";


const Hero = () => {
  return(
<header className='overflow-x-hidden relative bg-[#404EED] pt-6 w-screen sm:h-[90vh] h-[100vh] flex flex-col'>
    <img
        className="z-[1]  max-w-none absolute lg:block hidden w-[2750px] bottom-0 left-[-70rem] "
        src={clouds}
      />
      <img
        className="z-[4] max-w-none w-[28rem] lg:block hidden lg:w-[36rem] absolute -left-[16rem] lg:-left-32 bottom-0 "
        src={leftImage}
      />
      <img
        className="z-[4] max-w-none w-[30rem] lg:block hidden lg:w-[40rem] absolute  lg:-right-36 -right-[18rem] bottom-0  "
        src={rightImage}
      />

    <Navbar />
    

    <div className='z-[8] absolute flex-1 sm:min-h-fit relative flex flex-col text-center items-center justify-center lg:w-4/5   mx-auto  gap-y-6'>
      <h1 className='font-black sm:text-4xl lg:text-6xl text-4xl sm:w-3/4 mx-auto text-white tracking-tight leading-[1]'>IMAGINE A PLACE...</h1>
      <p className='sm:w-3/4 px-2 w-auto mx-auto text-white sm:text-lg tracking-wider leading-[1.9]'>...where you can belong to a school club, a gaming group, or a worldwide art community. Where just you and a handful of friends can spend time together. A place that makes it easy to talk every day and hang out more often.</p>

      <div className=' flex lg:flex-row  flex-col items-center justify-center  lg:w-3/5 w-auto mx-auto lg:gap-6 gap-y-2 text-white text-center items-left'>
        <button className=' block bg-white text-gray-800 lg:py-4 lg:px-10 py-2 px-6 rounded-full lg:text-lg  lg:font-semibold font-medium  hover:text-indigo-700 hover:drop-shadow-xl'> Download for Windows</button>
        <button className="block text-center text-sm lg:text-lg font-medium py-3 px-4 lg:py-4 lg:px-8 text-white bg-black hover:bg-[#36393f] rounded-full ">
              <span className="">Open Discord in your browser</span>
            </button>
      </div>
    </div>
   
    </header>
  )
};

export default Hero;