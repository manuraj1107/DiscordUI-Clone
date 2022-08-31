import React from "react";
import discordLogo from "../assets/discord_main_logo.svg";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
   <div className=" z-10 relative">
      <nav className="flex flex-row w-11/12 lg:w-3/4 mx-auto items-center lg:justify-between  justify-between">
        <Link to="/">
          <img
            src={discordLogo}
            className="text-white flex-2 w-24 md:w-32 lg:w-32  "
          />
        </Link>
        <div className="lg:flex-[6] flex-row lg:justify-center md:justify-center hidden  lg:flex md:flex md:gap-4 lg:gap-6   child:font-bold child:text-xs md:child:text-sm child:lg:text-base">
          <a className="text-white text-sm hover:underline font-semibold " href="#">
            Download
          </a>
          <a className="text-white text-sm hover:underline font-semibold" href="#">
            Nitro
          </a>
          <a className="text-white text-sm hover:underline font-semibold" href="#">
            Safety
          </a>
          <a className="text-white text-sm hover:underline font-semibold" href="#">
            Support
          </a>
          <a className="text-white text-sm hover:underline font-semibold" href="#">
            Blog
          </a>
          <a className="text-white text-sm hover:underline font-semibold" href="#">
            Careers
          </a>
        </div>
        <div className="lg:flex-1">
          <button
            onClick={() => navigate("/login")}
            className=" text-Gray-600 font-medium leading-4 shadow-sm px-4 py-2.5 text-sm rounded-full hover:shadow-xl ease-in-out hover:text-discordBlue-100 bg-white"
          >
            Login
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
