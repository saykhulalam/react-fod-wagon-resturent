import React from "react";
import { FaAngleRight } from "react-icons/fa6";

const Are = () => {
  return (
    <>
      <section
        id="are"
        className="bg-last-banner bg-cover bg-no-repeat bg-center h-[400px] w-full"
      >
        <div className="max-w-container mx-auto">
          <div className="pt-[75px]">
            <h2 className="text-[57px] font-pro text-white font-bold text-center mb-[62px]">
              Are you ready to order with the <br /> best deals?
            </h2>
            <button className="text-[18px] text-white font-pro font-bold w-[233px] h-[60px] bg-praymari rounded-[8px] flex items-center gap-[10px] justify-center ml-[42%]">
              Proceed to order <FaAngleRight />
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Are;
