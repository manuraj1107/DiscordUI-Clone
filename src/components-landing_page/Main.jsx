import React from "react";
import invite_only_landing from "../assets/invite_only_landing.svg";
import fandom_landing from "../assets/fandom_landing.svg";
import hanging_out_easy_landing from "../assets/hanging_out_easy_landing.svg";
import just_chiling_landing from "../assets/just_chiling_landing.svg";


const Main = () => {
    return(
  <main className='w-screen h-max  mb-0'>
         <div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 gap-6 h-[100vh] mx-auto  md:py-28 sm:py-16 px-10 py-10 md:px-28 sm:px-16 justify-items-center place-items-center'>
           <img className='object-contain'  src={invite_only_landing} alt='left-img' />
           <div className='flex flex-col  content-center h-full font-sans sm:w-full md:w-full gap-6 sm:pt-16 sm:pl-12'>
            <h1 className='sm:text-4xl md:text-5xl text-2xl font-bold text-[#23272A] md:w-3/4 sm:w-4/5 text-left tracking-wide leading-[1.2] '>Create an invite-only place where you belong</h1>
            <p className='sm:text-lg  text-gray-800 md:w-3/5 sm:w-4/5 text-left tracking-wider leading-[1.9]'>Discord servers are organized into topic-based channels where you can collaborate, share, and just talk about your day without clogging up a group chat.</p>
           </div>
         </div>
         
         <div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 gap-6 h-[100vh] mx-auto  md:py-28 sm:py-16 px-10 py-10 md:px-28 sm:px-16 justify-items-center place-items-center bg-gray-100'>
           
           <div className='flex flex-col  content-center h-full font-sans sm:w-full md:w-full gap-6 sm:pt-16 sm:pl-12'>
            <h1 className='sm:text-4xl md:text-5xl text-2xl font-bold text-[#23272A] md:w-3/4 sm:w-4/5 text-left tracking-wide leading-[1.2] '>Where hanging out is easy</h1>
            <p className='sm:text-lg  text-gray-800 md:w-3/5 sm:w-4/5 text-left tracking-wider leading-[1.9]'>Grab a seat in a voice channel when you're free. Friends in your server can see you're around and instantly pop in to talk without having to call.</p>
           </div>
           <img className='object-contain' src={hanging_out_easy_landing} alt='left-img'></img>
         </div>


         <div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 gap-6 h-[100vh] mx-auto  md:py-28 sm:py-16 px-10 py-10 md:px-28 sm:px-16 justify-items-center place-items-center'>
           <img className='object-contain' src={fandom_landing} alt='left-img'></img>
           <div className='flex flex-col  content-center h-full font-sans sm:w-full md:w-full gap-6 sm:pt-16 sm:pl-12'>
            <h1 className='sm:text-4xl md:text-5xl text-2xl font-bold text-[#23272A] md:w-3/4 sm:w-4/5 text-left tracking-wide leading-[1.2] '>From few to a fandom</h1>
            <p className='sm:text-lg  text-gray-800 md:w-3/5 sm:w-4/5 text-left tracking-wider leading-[1.9]'>Get any community running with moderation tools and custom member access. Give members special powers, set up private channels, and more.</p>
           </div>
         </div>
         
        <div className='flex flex-col bg-gray-100 max-h-max w-full'>
        <div className='flex flex-col w-4/5 mx-auto mt-28 my-12 text-center font-sans gap-6'>
        <h1 className='font-black sm:text-5xl text-2xl w-3/4 mx-auto text-gray-900 tracking-tight leading-[1] '>RELIABLE TECH FOR STAYING CLOSE</h1>
        <p className='w-3/4 mx-auto text-gray-700 sm:text-lg tracking-wider leading-[1.9]'>Low-latency voice and video feels like you’re in the same room. Wave hello over video, watch friends stream their games, or gather up and have a drawing session with screen share.</p>
        </div>
        <img className='object-contain w-3/4 mx-auto' src={just_chiling_landing} alt='center-img' />

        <div className='flex flex-col sm:w-4/5 mx-auto mt-28 my-12 text-center font-sans gap-6'>
          <h3 className='font-extrabold text-3xl '>Ready to start your journey?</h3>
          <button className='bg-[#5865F2] block text-white sm:w-1/4 py-4 rounded-full sm:text-lg font-medium mx-auto hover:bg-indigo-400 px-2 hover:drop-shadow-xl'>Download for Windows</button>
        </div>

        </div>

    </main>
  );
};

export default Main;
