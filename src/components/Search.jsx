import React from "react";
import search1 from "../assets/search1.png";
import search2 from "../assets/search2.png";
import search3 from "../assets/search3.png";
import search4 from "../assets/search4.png";
import search5 from "../assets/search5.png";
import search6 from "../assets/search6.png";
import { FaAngleRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";
import baj1 from "../assets/baj1.png";
import baj2 from "../assets/baj2.png";
import baj3 from "../assets/baj3.png";
import appimg from "../assets/app1.png";
import appimg2 from "../assets/app2.png";
import appimg3 from "../assets/app3.png";

const Search = () => {
  return (
    <>
      <section id="search">
        <div className="bg-[#FEFAF1] pt-[82px] pb-[55px]">
          <div className="max-w-container mx-auto">
            <div className="flex items-center justify-between">
              <h3 className="text-black text-[43px] font-bold font-pro mb-[166px]">
                Search by Food
              </h3>
              <div className="flex gap-[26px]">
                <h3 className="text-[18px] font-bold font-pro text-[#FFB30E] flex items-center gap-[10px]">
                  View All <FaAngleRight />
                </h3>
                <div className="flex gap-[16px]">
                  <div className="bg-[#FFB30E] w-[76px] h-[76px] rounded-full flex items-center justify-center text-[50px] text-white">
                    <FaAngleLeft />
                  </div>
                  <div className="bg-[#FFB30E] w-[76px] h-[76px] rounded-full flex items-center justify-center text-[50px] text-white">
                    <FaAngleRight />
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-12">
              <div className=" col-span-2">
                <img className="ml-3" src={search1} alt="img" />
                <h4 className="text-[22px] font-bold font-pro text-common text-center mt-[26px]">
                  Pizza
                </h4>
              </div>
              <div className=" col-span-2">
                <img className="ml-3 rounded-full" src={search2} alt="img" />
                <h4 className="text-[22px] font-bold font-pro text-common text-center mt-[26px]">
                  Burger
                </h4>
              </div>
              <div className=" col-span-2">
                <img className="ml-3 rounded-full" src={search3} alt="img" />
                <h4 className="text-[22px] font-bold font-pro text-common text-center mt-[26px]">
                  Noodles
                </h4>
              </div>
              <div className=" col-span-2">
                <img className="ml-3 rounded-full" src={search4} alt="img" />
                <h4 className="text-[22px] font-bold font-pro text-common text-center mt-[26px]">
                  Sub-sandiwch
                </h4>
              </div>
              <div className=" col-span-2">
                <img className="ml-3 rounded-full" src={search5} alt="img" />
                <h4 className="text-[22px] font-bold font-pro text-common text-center mt-[26px]">
                  Chowmein
                </h4>
              </div>
              <div className=" col-span-2">
                <img className="ml-3 rounded-full" src={search6} alt="img" />
                <h4 className="text-[22px] font-bold font-pro text-common text-center mt-[26px]">
                  Steak
                </h4>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#FEEFD0] pt-[130px] pb-[px]">
          <div className="max-w-container mx-auto">
            <div className="w-[1230px] h-[246px] bg-white flex justify-between items-center mx-auto pl-8 pr-8 rounded-[46px]">
              <div className=" flex gap-[30px] items-center">
                <img src={baj1} alt="" />
                <h2 className="text-[35px] font-pro text-praymari font-bold">
                  Daily <br /> Discounts
                </h2>
              </div>
              <div className="bg-[#CFCFCF] w-[96px] h-[1px] rotate-90"></div>
              <div className=" flex gap-[30px] items-center">
                <img src={baj2} alt="" />
                <h2 className="text-[35px] font-pro text-praymari font-bold">
                  Live <br /> Tracing
                </h2>
              </div>
              <div className="bg-[#CFCFCF] w-[96px] h-[1px] rotate-90"></div>
              <div className=" flex gap-[30px] items-center">
                <img src={baj3} alt="" />
                <h2 className="text-[35px] font-pro text-praymari font-bold">
                  Quick <br /> Delivery
                </h2>
              </div>
            </div>
            <div className="grid grid-cols-12 items-center mt-[61px]">
              <div className=" col-span-6">
                <img src={appimg} alt="appimg" />
              </div>
              <div className=" col-span-6">
                <h2 className="text-[68px] font-bold font-pro text-praymari mb-[10px]">
                  Install the app
                </h2>
                <p className=" text-common text-[18px] font-open font-normal">
                  It's never been easier to order food. Look for the <br />{" "}
                  finest discounts and you'll be lost in a world of <br />{" "}
                  delectable food.
                </p>
                <div className="flex mt-[40px]">
                  <img src={appimg2} alt="img" />
                  <img src={appimg3} alt="img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Search;
