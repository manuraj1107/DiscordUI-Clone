import React from "react";
import { Link, useNavigate } from "react-router-dom";
import qr_code from "../assets/qr_code.png";

const Login = () => {
  let navigate = useNavigate();

  return (
    <div className="h-screen bg-[#5865F2] object-contain mx-auto">
      <div className=" flex bg-[url('../assets/login_bg.svg')] bg-center h-full object-cover bg-no-repeat w-screen mx-auto items-center">
        <div className="flex flex-row rounded-md shadow-lg object-cover h-4/5 items-center lg:p-8 md:py-16 lg:h-3/5 md:h-4/5 sm:h-4/5 sm:w-2/4 md: w-3/4 bg-[#36393F] mx-auto">
          <div className="flex flex-col sm:w-3/5 sm:h-/5  py-48 px-24 text-center font-sans sm:py-12 sm:px-2 sm:mx-auto">
            <h3 className="text-white text-2xl  font-bold">Welcome back!</h3>
            <p className="text-[#9A9CA0]">We're so excited to see you again!</p>

            <form className="flex flex-col   lg:pl-6 py-4">
              <label className="text-gray-400 font-sans text-left text-xs font-bold py-2">
                EMAIL OR PHONE NUMBER
              </label>
              <input
                className="rounded-md bg-[#202225] h-10 text-white pl-2"
                type="email"
              ></input>
              <label className="text-gray-400 text-left text-xs font-bold pb-2 pt-4">
                PASSWORD
              </label>
              <input
                className="rounded-md bg-[#202225] h-10 text-white pl-2"
                type="password"
              ></input>
              <small className="text-[#0E91C6] text-left font-semibold pt-1 pb-4">
                Forgot your password?
              </small>
              <button
                onClick={() => navigate("/dashboard")}
                className="bg-[#5865f2] h-10 rounded-md text-white"
                type="submit"
              >
                Login <Link to="/dashboard"></Link>
              </button>
              <small className="text-left text-gray-500 font-medium py-1">
                Need an account?{" "}
                <span className="text-[#0E91C6]">Register</span>
              </small>
            </form>
          </div>
          <div className="flex flex-col w-2/4 font-sans text-center items-center   sm:py-16  sm:hidden md:block hidden  mx-auto ">
            <div className="mx-auto  flex justify-center">
              <img
                className="rounded-md border-8 self-center border-white object-contain w-2/4 "
                src={qr_code}
                alt="qr-code"
              />
            </div>
            <h3 className="w-3/5  mx-auto text-white text-2xl  font-bold pt-6">
              Log in with QR Code
            </h3>
            <p className="text-gray-400  mx-auto font-sans w-3/4 text-sm font-medium py-2">
              Scan this with the{" "}
              <span className="font-extrabold">Discord mobile app</span> to log
              in instantly
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
