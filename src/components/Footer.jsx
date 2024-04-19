import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <>
      <section id="footer" className="bg-[#212121] pb-[88px] pt-[99px]">
        <div className="max-w-container mx-auto">
          <h2 className="text-[22px] text-white font-bold font-pro mb-[40px]">
            Our top cities
          </h2>
          <div className="grid grid-cols-10 gap-[170px]">
            <div className=" col-span-2">
              <ul className="text-[18px] font-pro font-normal text-white">
                <li className="mb-[16px]">
                  <a href="#">San Francisco</a>
                </li>
                <li className="mb-[16px]">
                  <a href="#">Miami</a>
                </li>
                <li className="mb-[16px]">
                  <a href="#">San Diego</a>
                </li>
                <li className="mb-[16px]">
                  <a href="#">East Bay</a>
                </li>
                <li className="mb-[16px]">
                  <a href="#">Long Beach</a>
                </li>
              </ul>
            </div>
            <div className=" col-span-2">
              <ul className="text-[18px] font-pro font-normal text-white">
                <li className="mb-[16px]">
                  <a href="#">Los Angeles</a>
                </li>
                <li className="mb-[16px]">
                  <a href="#">Washington DC</a>
                </li>
                <li className="mb-[16px]">
                  <a href="#">Seattle</a>
                </li>
                <li className="mb-[16px]">
                  <a href="#">Portland</a>
                </li>
                <li className="mb-[16px]">
                  <a href="#">Nashville</a>
                </li>
              </ul>
            </div>
            <div className=" col-span-2">
              <ul className="text-[18px] font-pro font-normal text-white">
                <li className="mb-[16px]">
                  <a href="#">New York City</a>
                </li>
                <li className="mb-[16px]">
                  <a href="#">Orange County</a>
                </li>
                <li className="mb-[16px]">
                  <a href="#">Atlanta</a>
                </li>
                <li className="mb-[16px]">
                  <a href="#">Charlotte</a>
                </li>
                <li className="mb-[16px]">
                  <a href="#">Denver</a>
                </li>
              </ul>
            </div>
            <div className=" col-span-2">
              <ul className="text-[18px] font-pro font-normal text-white">
                <li className="mb-[16px]">
                  <a href="#">Chicago</a>
                </li>
                <li className="mb-[16px]">
                  <a href="#">Phoenix</a>
                </li>
                <li className="mb-[16px]">
                  <a href="#">Las Vegas</a>
                </li>
                <li className="mb-[16px]">
                  <a href="#">Sacramento</a>
                </li>
                <li className="mb-[16px]">
                  <a href="#">Oklahoma City</a>
                </li>
              </ul>
            </div>
            <div className=" col-span-2">
              <ul className="text-[18px] font-pro font-normal text-white">
                <li className="mb-[16px]">
                  <a href="#">Columbus</a>
                </li>
                <li className="mb-[16px]">
                  <a href="#">New Mexico</a>
                </li>
                <li className="mb-[16px]">
                  <a href="#">Albuquerque</a>
                </li>
                <li className="mb-[16px]">
                  <a href="#">Sacramento</a>
                </li>
                <li className="mb-[16px]">
                  <a href="#">New Orleans</a>
                </li>
              </ul>
            </div>
          </div>
          <div className=" w-container h-[1px] bg-halka-black rounded-[5px] mt-[99px] mb-[63px]"></div>
          <div className="grid grid-cols-12 gap-[165px]">
            <div className=" col-span-6">
              <div className="grid grid-cols-12 gap-14">
                <div className=" col-span-4">
                  <h2 className="text-[22px] text-white font-bold font-pro mb-[40px]">
                    Company
                  </h2>
                  <ul className="text-[18px] font-pro font-normal text-white">
                    <li className="mb-[16px]">
                      <a href="#">About us</a>
                    </li>
                    <li className="mb-[16px]">
                      <a href="#">Team</a>
                    </li>
                    <li className="mb-[16px]">
                      <a href="#">Careers</a>
                    </li>
                    <li className="mb-[16px]">
                      <a href="#">Blog</a>
                    </li>
                  </ul>
                </div>
                <div className=" col-span-4">
                  <h2 className="text-[22px] text-white font-bold font-pro mb-[40px]">
                    Contact
                  </h2>
                  <ul className="text-[18px] font-pro font-normal text-white">
                    <li className="mb-[16px]">
                      <a href="#">Help & Support</a>
                    </li>
                    <li className="mb-[16px]">
                      <a href="#">Partner with us </a>
                    </li>
                    <li className="mb-[16px]">
                      <a href="#">Ride with us</a>
                    </li>
                  </ul>
                </div>
                <div className=" col-span-4">
                  <h2 className="text-[22px] text-white font-bold font-pro mb-[40px]">
                    Legal
                  </h2>
                  <ul className="text-[18px] font-pro font-normal text-white">
                    <li className="mb-[16px]">
                      <a href="#">Terms & Conditions</a>
                    </li>
                    <li className="mb-[16px]">
                      <a href="#">Refund & Cancellation</a>
                    </li>
                    <li className="mb-[16px]">
                      <a href="#">Privacy Policy</a>
                    </li>
                    <li className="mb-[16px]">
                      <a href="#">Cookie Policy</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className=" col-span-6">
              <h2 className="text-[22px] text-white font-bold font-pro mb-[40px]">
                Follow Us
              </h2>
              <div className="flex gap-[18px] mb-[43px]">
                <FaInstagram className=" text-[30px] text-white" />
                <FaFacebook className=" text-[30px] text-white" />
                <FaTwitter className=" text-[30px] text-white" />
              </div>
              <h3 className="text-[18px] text-white font-sans font-bold">
                Receive exclusive offers in your mailbox
              </h3>
              <div className=" relative mt-[40px]">
                <input
                  type="email"
                  className="w-[334px] h-[60px] bg-[#424242] text-[18px] font-sans text-halka-black rounded-[8px] pl-[50px]"
                  placeholder="Enter Your email"
                />
                <MdEmail className="text-[24px] text-halka-black absolute left-[16px] bottom-[15px]" />
                <button className="w-[133px] h-[60px] bg-praymari text-[18px] text-white font-pro font-bold rounded-[8px] ml-[16px]">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div className=" w-container h-[1px] bg-halka-black rounded-[5px] mt-[63px] mb-[16px]"></div>
          <div className="flex justify-between">
            <h4 className="text-[15px] text-white font-bold font-sans">
              All rights Reserved &#169; Your Company, 2021
            </h4>
            <h5 className="text-[15px] text-white font-bold font-sans">
              Made with by saukhul
            </h5>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
