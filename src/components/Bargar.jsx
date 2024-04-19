import React from "react";
import { FaStar } from "react-icons/fa6";
import { MdLocalOffer } from "react-icons/md";
import { IoTime } from "react-icons/io5";
import bargarone from "../assets/bargar1.png";
import bargartow from "../assets/bargar2.png";
import bargarthree from "../assets/bargar3.png";
import bargarfour from "../assets/bargar4.png";
import bargarfive from "../assets/bargar5.png";
import { IoLocationSharp } from "react-icons/io5";
import kekone from "../assets/kek1.png";
import kektow from "../assets/kek2.png";
import kekthree from "../assets/kek3.png";
import kekfour from "../assets/kek4.png";
import meet1 from "../assets/meet1.png";
import meet2 from "../assets/meet2.png";
import meet3 from "../assets/meet3.png";
import meet4 from "../assets/meet4.png";
import com1 from "../assets/compani1.png";
import com2 from "../assets/compani2.png";
import com3 from "../assets/compani3.png";
import com4 from "../assets/compani4.png";
import com5 from "../assets/compani5.png";
import com6 from "../assets/compani6.png";
import com7 from "../assets/compani7.png";
import com8 from "../assets/compani8.png";
import { FaAngleRight } from "react-icons/fa6";

const Bargar = () => {
  return (
    <>
      <section id="bargar" className="bg-[#212121] pt-[136px] pb-[80px]">
        <div className="max-w-container mx-auto">
          <div className="grid grid-cols-10 gap-4 mb-[216px]">
            <div className=" col-span-2">
              <div className="main">
                <img src={bargarone} alt="img" />
                <h3 className="text-[22px] font-pro font-bold text-halka-black mt-[16px] mb-[8px]">
                  Cheese Burger
                </h3>
                <h2 className="text-[#FFB30E] flex items-center gap-[8px] text-[22px] font-normal font-pro mb-[50px]">
                  {" "}
                  <IoLocationSharp />
                  Burger Arena
                </h2>
                <button className="w-[283px] h-[60px] bg-praymari rounded-[8px] text-[18px] font-pro font-bold text-white flex items-center justify-center">
                  Order Now
                </button>
              </div>
            </div>
            <div className=" col-span-2">
              <div className="main">
                <img src={bargartow} alt="img" />
                <h3 className="text-[22px] font-pro font-bold text-halka-black mt-[16px] mb-[8px]">
                  Toffe’s Cake
                </h3>
                <h2 className="text-[#FFB30E] flex items-center gap-[8px] text-[22px] font-normal font-pro mb-[50px]">
                  {" "}
                  <IoLocationSharp />
                  Top Sticks
                </h2>
                <button className="w-[283px] h-[60px] bg-praymari rounded-[8px] text-[18px] font-pro font-bold text-white flex items-center justify-center">
                  Order Now
                </button>
              </div>
            </div>
            <div className=" col-span-2">
              <div className="main">
                <img src={bargarthree} alt="img" />
                <h3 className="text-[22px] font-pro font-bold text-halka-black mt-[16px] mb-[8px]">
                  Dancake
                </h3>
                <h2 className="text-[#FFB30E] flex items-center gap-[8px] text-[22px] font-normal font-pro mb-[50px]">
                  {" "}
                  <IoLocationSharp />
                  Cake World
                </h2>
                <button className="w-[283px] h-[60px] bg-praymari rounded-[8px] text-[18px] font-pro font-bold text-white flex items-center justify-center">
                  Order Now
                </button>
              </div>
            </div>
            <div className=" col-span-2">
              <div className="main">
                <img src={bargarfour} alt="img" />
                <h3 className="text-[22px] font-pro font-bold text-halka-black mt-[16px] mb-[8px]">
                  Crispy Sandwitch
                </h3>
                <h2 className="text-[#FFB30E] flex items-center gap-[8px] text-[22px] font-normal font-pro mb-[50px]">
                  {" "}
                  <IoLocationSharp />
                  Fastfood Dine
                </h2>
                <button className="w-[283px] h-[60px] bg-praymari rounded-[8px] text-[18px] font-pro font-bold text-white flex items-center justify-center">
                  Order Now
                </button>
              </div>
            </div>
            <div className=" col-span-2">
              <div className="main">
                <img src={bargarfive} alt="img" />
                <h3 className="text-[22px] font-pro font-bold text-halka-black mt-[16px] mb-[8px]">
                  Thai Soup
                </h3>
                <h2 className="text-[#FFB30E] flex items-center gap-[8px] text-[22px] font-normal font-pro mb-[50px]">
                  {" "}
                  <IoLocationSharp />
                  Foody man
                </h2>
                <button className="w-[283px] h-[60px] bg-praymari rounded-[8px] text-[18px] font-pro font-bold text-white flex items-center justify-center">
                  Order Now
                </button>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-5">
            <div className=" col-span-3">
              <div className="main">
                <div className=" relative">
                  <img
                    className=" rounded-[16px] mb-[24px]"
                    src={kekone}
                    alt="img"
                  />
                  <div className="parant flex gap-[8px] absolute top-[24px] left-[24px]">
                    <div className="w-[134px] h-[42px] flex items-center justify-center rounded-[8px] bg-praymari">
                      <h2 className="text-[22px] font-pro text-white font-bold flex items-center gap-[10px]">
                        {" "}
                        <MdLocalOffer />
                        20% off
                      </h2>
                    </div>
                    <div className="w-[101px] h-[42px] flex items-center justify-center rounded-[8px] bg-[#FFB30E]">
                      <h2 className="text-[22px] font-pro text-white font-bold flex items-center gap-[10px]">
                        {" "}
                        <IoTime />
                        Fast
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="flex gap-[24px]">
                  <img src={com1} alt="compani-img" />
                  <div className="">
                    <h3 className="text-[22px] text-halka-black font-bold font-pro">
                      Foodworld
                    </h3>
                    <h2 className="text-[#FFB30E] flex items-center gap-[8px] text-[22px] font-pro font-normal">
                      {" "}
                      <FaStar />
                      46
                    </h2>
                  </div>
                </div>
                <button className="w-[196px] h-[42px] bg-[#f172284c] text-praymari font-bold font-pro rounded-[16px] mt-[32px]">
                  Opens tomorrow
                </button>
              </div>
            </div>
            <div className=" col-span-3">
              <div className="main">
                <div className=" relative">
                  <img
                    className=" rounded-[16px] mb-[24px]"
                    src={kektow}
                    alt="img"
                  />
                  <div className="parant flex gap-[8px] absolute top-[24px] left-[24px]">
                    <div className="w-[134px] h-[42px] flex items-center justify-center rounded-[8px] bg-praymari">
                      <h2 className="text-[22px] font-pro text-white font-bold flex items-center gap-[10px]">
                        {" "}
                        <MdLocalOffer />
                        15% off
                      </h2>
                    </div>
                    <div className="w-[101px] h-[42px] flex items-center justify-center rounded-[8px] bg-[#FFB30E]">
                      <h2 className="text-[22px] font-pro text-white font-bold flex items-center gap-[10px]">
                        {" "}
                        <IoTime />
                        Fast
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="flex gap-[24px]">
                  <img src={com2} alt="compani-img" />
                  <div className="">
                    <h3 className="text-[22px] text-halka-black font-bold font-pro">
                      Pizzahub
                    </h3>
                    <h2 className="text-[#FFB30E] flex items-center gap-[8px] text-[22px] font-pro font-normal">
                      {" "}
                      <FaStar />
                      40
                    </h2>
                  </div>
                </div>
                <button className="w-[196px] h-[42px] bg-[#f172284c] text-praymari font-bold font-pro rounded-[16px] mt-[32px]">
                  Opens tomorrow
                </button>
              </div>
            </div>
            <div className=" col-span-3">
              <div className="main">
                <div className=" relative">
                  <img
                    className=" rounded-[16px] mb-[24px]"
                    src={kekthree}
                    alt="img"
                  />
                  <div className="parant flex gap-[8px] absolute top-[24px] left-[24px]">
                    <div className="w-[134px] h-[42px] flex items-center justify-center rounded-[8px] bg-praymari">
                      <h2 className="text-[22px] font-pro text-white font-bold flex items-center gap-[10px]">
                        {" "}
                        <MdLocalOffer />
                        10% off
                      </h2>
                    </div>
                    <div className="w-[101px] h-[42px] flex items-center justify-center rounded-[8px] bg-[#FFB30E]">
                      <h2 className="text-[22px] font-pro text-white font-bold flex items-center gap-[10px]">
                        {" "}
                        <IoTime />
                        Fast
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="flex gap-[24px]">
                  <img src={com3} alt="compani-img" />
                  <div className="">
                    <h3 className="text-[22px] text-halka-black font-bold font-pro">
                      Donuts hut
                    </h3>
                    <h2 className="text-[#FFB30E] flex items-center gap-[8px] text-[22px] font-pro font-normal">
                      {" "}
                      <FaStar />
                      20
                    </h2>
                  </div>
                </div>
                <button className="w-[132px] h-[42px] bg-[#78b93c4a] text-[#79B93C] font-bold font-pro rounded-[16px] mt-[32px]">
                  Open Now
                </button>
              </div>
            </div>
            <div className=" col-span-3">
              <div className="main">
                <div className=" relative">
                  <img
                    className=" rounded-[16px] mb-[24px]"
                    src={kekfour}
                    alt="img"
                  />
                  <div className="parant flex gap-[8px] absolute top-[24px] left-[24px]">
                    <div className="w-[134px] h-[42px] flex items-center justify-center rounded-[8px] bg-praymari">
                      <h2 className="text-[22px] font-pro text-white font-bold flex items-center gap-[10px]">
                        {" "}
                        <MdLocalOffer />
                        15% off
                      </h2>
                    </div>
                    <div className="w-[101px] h-[42px] flex items-center justify-center rounded-[8px] bg-[#FFB30E]">
                      <h2 className="text-[22px] font-pro text-white font-bold flex items-center gap-[10px]">
                        {" "}
                        <IoTime />
                        Fast
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="flex gap-[24px]">
                  <img src={com4} alt="compani-img" />
                  <div className="">
                    <h3 className="text-[22px] text-halka-black font-bold font-pro">
                      Donuts hut
                    </h3>
                    <h2 className="text-[#FFB30E] flex items-center gap-[8px] text-[22px] font-pro font-normal">
                      {" "}
                      <FaStar />
                      50
                    </h2>
                  </div>
                </div>
                <button className="w-[132px] h-[42px] bg-[#78b93c4a] text-[#79B93C] font-bold font-pro rounded-[16px] mt-[32px]">
                  Open Now
                </button>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-12 mt-[64px] gap-5">
            <div className=" col-span-3">
              <div className="main">
                <div className=" relative">
                  <img
                    className=" rounded-[16px] mb-[24px]"
                    src={meet1}
                    alt="img"
                  />
                  <div className="parant flex gap-[8px] absolute top-[24px] left-[24px]">
                    <div className="w-[134px] h-[42px] flex items-center justify-center rounded-[8px] bg-praymari">
                      <h2 className="text-[22px] font-pro text-white font-bold flex items-center gap-[10px]">
                        {" "}
                        <MdLocalOffer />
                        10% off
                      </h2>
                    </div>
                    <div className="w-[101px] h-[42px] flex items-center justify-center rounded-[8px] bg-[#FFB30E]">
                      <h2 className="text-[22px] font-pro text-white font-bold flex items-center gap-[10px]">
                        {" "}
                        <IoTime />
                        Fast
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="flex gap-[24px]">
                  <img src={com5} alt="compani-img" />
                  <div className="">
                    <h3 className="text-[22px] text-halka-black font-bold font-pro">
                      Ruby Tuesday
                    </h3>
                    <h2 className="text-[#FFB30E] flex items-center gap-[8px] text-[22px] font-pro font-normal">
                      {" "}
                      <FaStar />
                      26
                    </h2>
                  </div>
                </div>
                <button className="w-[132px] h-[42px] bg-[#78b93c4a] text-[#79B93C] font-bold font-pro rounded-[16px] mt-[32px]">
                  Open Now
                </button>
              </div>
            </div>
            <div className=" col-span-3">
              <div className="main">
                <div className=" relative">
                  <img
                    className=" rounded-[16px] mb-[24px]"
                    src={meet2}
                    alt="img"
                  />
                  <div className="parant flex gap-[8px] absolute top-[24px] left-[24px]">
                    <div className="w-[134px] h-[42px] flex items-center justify-center rounded-[8px] bg-praymari">
                      <h2 className="text-[22px] font-pro text-white font-bold flex items-center gap-[10px]">
                        {" "}
                        <MdLocalOffer />
                        25% off
                      </h2>
                    </div>
                    <div className="w-[101px] h-[42px] flex items-center justify-center rounded-[8px] bg-[#FFB30E]">
                      <h2 className="text-[22px] font-pro text-white font-bold flex items-center gap-[10px]">
                        {" "}
                        <IoTime />
                        Fast
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="flex gap-[24px]">
                  <img src={com6} alt="compani-img" />
                  <div className="">
                    <h3 className="text-[22px] text-halka-black font-bold font-pro">
                      Kuakata Fried Chicken
                    </h3>
                    <h2 className="text-[#FFB30E] flex items-center gap-[8px] text-[22px] font-pro font-normal">
                      {" "}
                      <FaStar />
                      53
                    </h2>
                  </div>
                </div>
                <button className="w-[132px] h-[42px] bg-[#78b93c4a] text-[#79B93C] font-bold font-pro rounded-[16px] mt-[32px]">
                  Open Now
                </button>
              </div>
            </div>
            <div className=" col-span-3">
              <div className="main">
                <div className=" relative">
                  <img
                    className=" rounded-[16px] mb-[24px]"
                    src={meet3}
                    alt="img"
                  />
                  <div className="parant flex gap-[8px] absolute top-[24px] left-[24px]">
                    <div className="w-[134px] h-[42px] flex items-center justify-center rounded-[8px] bg-praymari">
                      <h2 className="text-[22px] font-pro text-white font-bold flex items-center gap-[10px]">
                        {" "}
                        <MdLocalOffer />
                        10% off
                      </h2>
                    </div>
                    <div className="w-[101px] h-[42px] flex items-center justify-center rounded-[8px] bg-[#FFB30E]">
                      <h2 className="text-[22px] font-pro text-white font-bold flex items-center gap-[10px]">
                        {" "}
                        <IoTime />
                        Fast
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="flex gap-[24px]">
                  <img src={com7} alt="compani-img" />
                  <div className="">
                    <h3 className="text-[22px] text-halka-black font-bold font-pro">
                      Red Square
                    </h3>
                    <h2 className="text-[#FFB30E] flex items-center gap-[8px] text-[22px] font-pro font-normal">
                      {" "}
                      <FaStar />
                      35
                    </h2>
                  </div>
                </div>
                <button className="w-[132px] h-[42px] bg-[#78b93c4a] text-[#79B93C] font-bold font-pro rounded-[16px] mt-[32px]">
                  Open Now
                </button>
              </div>
            </div>
            <div className=" col-span-3">
              <div className="main">
                <div className=" relative">
                  <img
                    className=" rounded-[16px] mb-[24px]"
                    src={meet4}
                    alt="img"
                  />
                  <div className="parant flex gap-[8px] absolute top-[24px] left-[24px]">
                    <div className="w-[134px] h-[42px] flex items-center justify-center rounded-[8px] bg-praymari">
                      <h2 className="text-[22px] font-pro text-white font-bold flex items-center gap-[10px]">
                        {" "}
                        <MdLocalOffer />
                        10% off
                      </h2>
                    </div>
                    <div className="w-[101px] h-[42px] flex items-center justify-center rounded-[8px] bg-[#FFB30E]">
                      <h2 className="text-[22px] font-pro text-white font-bold flex items-center gap-[10px]">
                        {" "}
                        <IoTime />
                        Fast
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="flex gap-[24px]">
                  <img src={com8} alt="compani-img" />
                  <div className="">
                    <h3 className="text-[22px] text-halka-black font-bold font-pro">
                      Taco Bell
                    </h3>
                    <h2 className="text-[#FFB30E] flex items-center gap-[8px] text-[22px] font-pro font-normal">
                      {" "}
                      <FaStar />
                      35
                    </h2>
                  </div>
                </div>
                <button className="w-[132px] h-[42px] bg-[#78b93c4a] text-[#79B93C] font-bold font-pro rounded-[16px] mt-[32px]">
                  Open Now
                </button>
              </div>
            </div>
          </div>
          <button className="w-[178px] h-[60px] bg-[#FFB30E] text-white font-bold font-pro flex items-center justify-center gap-[10px] ml-[45%] mt-[88px] rounded-[14px]">
            View All <FaAngleRight />
          </button>
        </div>
      </section>
    </>
  );
};

export default Bargar;
