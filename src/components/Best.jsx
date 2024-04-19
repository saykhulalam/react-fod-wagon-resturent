import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import vew1 from "../assets/vew1.png";
import vew2 from "../assets/vew2.png";
import vew3 from "../assets/vew3.png";

const Best = () => {
  return (
    <>
      <section id="best" className="bg-[#212121] pt-[135px] pb-[100px]">
        <div className="max-w-container mx-auto">
          <div className="grid grid-cols-12">
            <div className=" col-span-4">
              <div className=" bg-white pl-[50px] h-[512px] pt-[56px] rounded-l-[15px] mb-[80px]">
                <h2 className="text-[#353535] text-[43px] font-bold font-pro mb-[19px]">
                  Best deals{" "}
                  <span className=" text-[#FFB30E]">Crispy Sandwiches</span>
                </h2>
                <p className=" text-common text-[18px] font-semibold font-open mb-[111px]">
                  Enjoy the large size of sandwiches. Complete <br /> perfect
                  slice of sandwiches.
                </p>
                <button className="w-[407px] h-[60px] bg-praymari text-[18px] font-pro font-bold text-white flex items-center justify-center gap-[10px] rounded-[8px]">
                  Proceed to order <FaAngleRight />
                </button>
              </div>
            </div>
            <div className=" col-span-8">
              <img className=" rounded-r-[15px]" src={vew1} alt="img" />
            </div>
          </div>
          <div className="grid grid-cols-12">
            <div className=" col-span-8">
              <img className=" rounded-l-[15px]" src={vew2} alt="img" />
            </div>
            <div className=" col-span-4">
              <div className=" bg-white pl-[50px] h-[512px] pt-[56px] rounded-r-[15px] mb-[80px] ml-[-21px]">
                <h2 className="text-[#353535] text-[43px] font-bold font-pro mb-[19px]">
                  Celebrate parties <br /> with{" "}
                  <span className=" text-[#FFB30E]">Fried Chicken</span>
                </h2>
                <p className=" text-common text-[18px] font-semibold font-open mb-[111px]">
                  Get the best fried chicken smeared with a lip <br /> smacking
                  lemon chili flavor. Check out best <br /> deals for fried
                  chicken.
                </p>
                <button className="w-[407px] h-[60px] bg-praymari text-[18px] font-pro font-bold text-white flex items-center justify-center gap-[10px] rounded-[8px]">
                  Proceed to order <FaAngleRight />
                </button>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-12">
            <div className=" col-span-4">
              <div className=" bg-white pl-[50px] h-[512px] pt-[56px] rounded-l-[15px]">
                <h2 className="text-[#353535] text-[43px] font-bold font-pro mb-[19px]">
                  Wanna eat hot & spicy
                  <span className=" text-[#FFB30E] ml-2">Pizza?</span>
                </h2>
                <p className=" text-common text-[18px] font-semibold font-open mb-[111px]">
                  Pair up with a friend and enjoy the <br /> hot and crispy
                  pizza pops. <br />
                  Try it with the best deals.
                </p>
                <button className="w-[407px] h-[60px] bg-praymari text-[18px] font-pro font-bold text-white flex items-center justify-center gap-[10px] rounded-[8px]">
                  Proceed to order <FaAngleRight />
                </button>
              </div>
            </div>
            <div className=" col-span-8">
              <img className=" rounded-r-[15px]" src={vew3} alt="img" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Best;
