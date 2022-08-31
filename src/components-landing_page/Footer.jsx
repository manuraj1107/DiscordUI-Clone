import React from "react";
import { BsYoutube, BsTwitter, BsInstagram, BsFacebook } from "react-icons/bs";
import usa_Flag from "../assets/usa_flag.png";
import discordLogo from "../assets/discord_main_logo.svg";


const Footer = () => {
  return(
      <footer className="bg-[#23272A] w-full ">
      <div className="max-w-7xl mx-auto text-white flex pt-20 pb-8 px-6 flex-col   ">
        <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5  gap-y-20 lg:gap-x-3 border-b-[1px] border-b-[#5865F2]  pb-10 ">
          <div className="flex flex-col items-start justify-between gap-5 col-span-2 md:col-span-1  md:row-span-2 lg:row-span-1 md:justify-start  ">
            <h3 className="text-4xl text-[#5865F2] uppercase font-bold ">
              Imagine a place
            </h3>
            <div className="flex gap-2 items-center ">
              <img className=" w-6 h-4 " src={usa_Flag} />
              <div className="flex gap-2 items-center text-sm ">
                English, USA
                
              </div>
            </div>
            <div className="flex gap-6 items-center">
              <BsTwitter size={22} className="" />
              <BsInstagram size={22} className="" />
              <BsFacebook size={22} className="" />
              <BsYoutube size={22} className="" />
            </div>
          </div>
          <div className="flex flex-col gap-2.5 row-span-1 col-span-1 ">
            <p className=" text-[#5865F2] ">Product</p>
            <a className="hover:underline" href="#">
              Dowload
            </a>
            <a className="hover:underline" href="#">
              Nitro
            </a>
            <a className="hover:underline" href="#">
              Status
            </a>
          </div>
          <div className="flex flex-col gap-2.5">
            <p className='text-[#5865F2]' >Company</p>
            <a className="hover:underline" href="#">
              About
            </a>
            <a className="hover:underline" href="#">
              Jobs
            </a>
            <a className="hover:underline" href="#">
              Branding
            </a>
            <a className="hover:underline" href="#">
              Newsroom
            </a>
          </div>
          <div className="flex flex-col gap-2.5">
            <p className='text-[#5865F2]'>Resources</p>
            <a className="hover:underline" href="#">
              College
            </a>
            <a className="hover:underline" href="#">
              Support
            </a>
            <a className="hover:underline" href="#">
              Safety
            </a>
            <a className="hover:underline" href="#">
              Blog
            </a>
            <a className="hover:underline" href="#">
              Feedback
            </a>
            <a className="hover:underline" href="#">
              Developers
            </a>
            <a className="hover:underline" href="#">
              StreamKit
            </a>
          </div>
          <div className="flex flex-col gap-2.5">
            <p className='text-[#5865F2]'>Policies</p>
            <a className="hover:underline" href="#">
              Terms
            </a>
            <a className="hover:underline" href="#">
              Privacy
            </a>
            <a className="hover:underline" href="#">
              Cookie Settings
            </a>
            <a className="hover:underline" href="#">
              Guidelines
            </a>
            <a className="hover:underline" href="#">
              Acknowledgements
            </a>
            <a className="hover:underline" href="#">
              Licenses
            </a>
            <a className="hover:underline" href="#">
              Moderation
            </a>
          </div>
        </div>
        <div className="flex justify-between py-6 items-center ">
        <img
            src={discordLogo}
            className="text-white flex-2 w-24 md:w-32 lg:w-32  "
          />
          <button
            className="py-2 px-7 bg-[#5865F2] rounded-full hover:brightness-[1.2] duration-150 ">
            Sign up
          </button>
        </div>
      </div>
    </footer>

  );
};

export default Footer;