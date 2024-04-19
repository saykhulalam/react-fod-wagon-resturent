import React from "react";
import { RiEBike2Fill } from "react-icons/ri";
import { FaShoppingBag } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import bannerimg from "../assets/banner.png";
import bannerimg1 from "../assets/banner1.png";
import bannerimg2 from "../assets/banner2.png";
import bannerimg3 from "../assets/banner3.png";
import bannerimg4 from "../assets/banner4.png";

const Banner = () => {
  return (
    <>
      <section id="banner" className=" bg-[#FFB30E] pt-[132px]">
        <div className="max-w-container mx-auto">
          <div className="flex">
            <div className="itemone">
              <h1 className=" text-white text-[88px] font-bold font-pro">
                Are you starving?
              </h1>
              <h4 className="text-[#504F4F] text-[22px] font-normal font-pro mb-[32px]">
                Within a few clicks, find meals that are accessible near you
              </h4>
              <div className="h-[194px] w-[856px] bg-white rounded-[16px] pt-[24px]">
                <div className="flex gap-[8px] mb-[24px] pl-[24px]">
                  <button className="w-[148px] h-[38px] flex items-center gap-[10px] bg-[#f1722837] justify-center rounded-[8px] text-[18px] text-praymari font-bold font-pro">
                    {" "}
                    <RiEBike2Fill className="text-[18px]" />
                    Delivery
                  </button>
                  <button className="w-[148px] h-[38px] flex items-center gap-[10px] bg-white justify-center rounded-[8px] text-[18px] text-[#757575] font-bold font-pro">
                    {" "}
                    <FaShoppingBag className="text-[18px]" />
                    Delivery
                  </button>
                </div>
                <div className="h-[1px] bg-[#F5F5F5] mb-[24px]"></div>
                <div className="flex gap-[16px] items-center relative pl-[24px]">
                  <input
                    className="w-[593px] h-[49px] bg-[#F5F5F5] rounded-[8px] pl-[46px] text-[18px] font-open font-normal"
                    type="text"
                    placeholder="Enter Your Address"
                  />
                  <IoLocationSharp className=" text-praymari text-[18px] absolute left-[40px]" />
                  <button className="w-[199px] h-[60px] bg-praymari rounded-[8px] flex items-center justify-center gap-[10px] text-white font-bold font-pro">
                    <FaSearch />
                    Find Food
                  </button>
                </div>
              </div>
            </div>
            <div className="itmtow">
              <img className="mt-[150px] w-[604px]" src={bannerimg} alt="img" />
            </div>
          </div>
        </div>
        <div className=" bg-stone-950 pt-[80px] pb-[80px]">
          <div className="max-w-container mx-auto">
            <div className="grid grid-cols-12 gap-6">
              <div className=" col-span-3 h-[415px]">
                <div className=" relative">
                  <img className=" rounded-[15px]" src={bannerimg1} alt="" />
                  <div className="w-[140px] h-[83px] bg-[#FFB30E] rounded-tr-[30px] rounded-bl-[20px] absolute bottom-0 pl-2">
                    <div className="flex items-center gap-2">
                      <h2 className="text-[68px] font-bold text-white font-pro">
                        15
                      </h2>
                      <div className="">
                        <h3 className="text-[22px] text-white font-pro">% </h3>
                        <h3 className="text-[22px] text-white font-pro mt-[-8px]">
                          off
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
                <h4 className="font-pro text-common text-[22px] mt-[32px] mb-[14px]">
                  Greys Vage
                </h4>
                <div className="w-[215px] h-[42px] rounded-[8px] bg-[#f1722832] flex items-center justify-center">
                  <h5 className="text-[22px] text-[rgb(241,114,40)] font-bold font-pro">
                    6 Days Remaining
                  </h5>
                </div>
              </div>
              <div className=" col-span-3 h-[415px]">
                <div className=" relative">
                  <img className=" rounded-[15px]" src={bannerimg2} alt="" />
                  <div className="w-[140px] h-[83px] bg-[#FFB30E] rounded-tr-[30px] rounded-bl-[20px] absolute bottom-0 pl-2">
                    <div className="flex items-center gap-2">
                      <h2 className="text-[68px] font-bold text-white font-pro">
                        10
                      </h2>
                      <div className="">
                        <h3 className="text-[22px] text-white font-pro">% </h3>
                        <h3 className="text-[22px] text-white font-pro mt-[-8px]">
                          off
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
                <h4 className="font-pro text-common text-[22px] mt-[32px] mb-[14px]">
                  Greys Vage
                </h4>
                <div className="w-[215px] h-[42px] rounded-[8px] bg-[#f1722832] flex items-center justify-center">
                  <h5 className="text-[22px] text-[rgb(241,114,40)] font-bold font-pro">
                    6 Days Remaining
                  </h5>
                </div>
              </div>
              <div className=" col-span-3 h-[415px]">
                <div className=" relative">
                  <img className=" rounded-[15px]" src={bannerimg3} alt="" />
                  <div className="w-[140px] h-[83px] bg-[#FFB30E] rounded-tr-[30px] rounded-bl-[20px] absolute bottom-0 pl-2">
                    <div className="flex items-center gap-2">
                      <h2 className="text-[68px] font-bold text-white font-pro">
                        25
                      </h2>
                      <div className="">
                        <h3 className="text-[22px] text-white font-pro">% </h3>
                        <h3 className="text-[22px] text-white font-pro mt-[-8px]">
                          off
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
                <h4 className="font-pro text-common text-[22px] mt-[32px] mb-[14px]">
                  Greys Vage
                </h4>
                <div className="w-[215px] h-[42px] rounded-[8px] bg-[#f1722832] flex items-center justify-center">
                  <h5 className="text-[22px] text-[rgb(241,114,40)] font-bold font-pro">
                    7 Days Remaining
                  </h5>
                </div>
              </div>
              <div className=" col-span-3 h-[415px]">
                <div className=" relative">
                  <img className=" rounded-[15px]" src={bannerimg4} alt="" />
                  <div className="w-[140px] h-[83px] bg-[#FFB30E] rounded-tr-[30px] rounded-bl-[20px] absolute bottom-0 pl-2">
                    <div className="flex items-center gap-2">
                      <h2 className="text-[68px] font-bold text-white font-pro">
                        20
                      </h2>
                      <div className="">
                        <h3 className="text-[22px] text-white font-pro">% </h3>
                        <h3 className="text-[22px] text-white font-pro mt-[-8px]">
                          off
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
                <h4 className="font-pro text-common text-[22px] mt-[32px] mb-[14px]">
                  Greys Vage
                </h4>
                <div className="w-[215px] h-[42px] rounded-[8px] bg-[#f1722832] flex items-center justify-center">
                  <h5 className="text-[22px] text-[rgb(241,114,40)] font-bold font-pro">
                    8 Days Remaining
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
