import React from "react";
import logo from "../assets/Logo.png";
import { FaLocationDot } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { FcManager } from "react-icons/fc";

const Nave = () => {
  return (
    <>
      <nav id="nav" className="pt-[26px] pb-[26px] bg-white">
        <div className="max-w-container mx-auto">
          <div className="flex justify-between items-center">
            <img src={logo} alt="logo" />
            <h4 className=" text-[18px] font-pro font-bold text-common flex items-center text-center">
              Deliver to:{" "}
              <span className=" font-open font-normal text-[18px] flex items-center gap-[9px] pl-[3px] pr-[3px]">
                <FaLocationDot className=" text-[18px] text-[#FFB30E]" />
                Current Location
              </span>
              Mohammadpur Bus Stand, Dhaka
            </h4>
            <div className="flex items-center gap-[30px]">
              <h3 className="text-[18px] font-bold text-common font-pro flex gap-[8px] items-center">
                {" "}
                <FaSearch className="text-[#FFB30E] text-[18px]" />
                Search Food
              </h3>
              <button className="w-[118px] h-[46px] flex items-center justify-center gap-[10px] rounded-[8px] shadow-lg text-[18px] font-bold text-[#FFB30E] font-pro">
                {" "}
                <FcManager className="text-[20px]" />
                Login
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nave;
