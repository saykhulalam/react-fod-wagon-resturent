import React from "react";
import workone from "../assets/work1.png";
import worktow from "../assets/work2.png";
import workthree from "../assets/work3.png";
import workfour from "../assets/work4.png";

const Work = () => {
  return (
    <>
      <section id="work" className="bg-[#434343] pt-[80px] pb-[80px]">
        <div className="max-w-container mx-auto">
          <h2 className="text-praymari text-[43px] font-bold font-pro text-center mb-[71px]">
            How does it work
          </h2>
          <div className=" grid grid-cols-12">
            <div className=" col-span-3">
              <div className="main">
                <img className="ml-[90px]" src={workone} alt="img" />
                <h2 className="text-[22px] font-open text-halka-black font-bold mb-[10px] text-center">
                  Select location
                </h2>
                <h3 className="text-[18px] font-normal font-open text-halka-black text-center">
                  Choose the location where your <br /> food will be delivered.
                </h3>
              </div>
            </div>
            <div className=" col-span-3">
              <div className="main">
                <img className="ml-[90px]" src={worktow} alt="img" />
                <h2 className="text-[22px] font-open text-halka-black font-bold mb-[10px] text-center">
                  Choose order
                </h2>
                <h3 className="text-[18px] font-normal font-open text-halka-black text-center">
                  Check over hundreds of menus to <br /> pick your favorite food
                </h3>
              </div>
            </div>
            <div className=" col-span-3">
              <div className="main">
                <img className="ml-[90px]" src={workthree} alt="img" />
                <h2 className="text-[22px] font-open text-halka-black font-bold mb-[10px] text-center">
                  Pay advanced
                </h2>
                <h3 className="text-[18px] font-normal font-open text-halka-black text-center">
                  It's quick, safe, and simple. Select <br /> several methods of
                  payment
                </h3>
              </div>
            </div>
            <div className=" col-span-3">
              <div className="main">
                <img className="ml-[90px]" src={workfour} alt="img" />
                <h2 className="text-[22px] font-open text-halka-black font-bold mb-[10px] text-center">
                  Enjoy meals
                </h2>
                <h3 className="text-[18px] font-normal font-open text-halka-black text-center">
                  Food is made and delivered directly to your home.
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Work;
