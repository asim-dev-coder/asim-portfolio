import React from "react";
import { IoMdCall } from "react-icons/io";
import { IoMailOutline } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { SlSocialLinkedin } from "react-icons/sl";
const TopHeader = () => {
  return (
    <>
      {/* <style>
        {`
                h3{ color: red;}
                `}
      </style> */} {/*via-[#48cae4]*/}
      <div className="bg-linear-to-r from-[#023e8a]  to-[#caf0f8] work">
        <div className="w-9/12 mx-auto ">
          <div className=" flex items-center justify-between text-white">
            <div className="flex items-center gap-5 py-2 ">
              <div className="flex gap-1 items-center  pr-4 ">
                {/* style="color: red"*/}
                <IoMdCall className="text-[20px] " />
                <p className="text-[15px]">
                  <a href="https://web.whatsapp.com/" target="_blank">
                    +8801556440078
                  </a>
                </p>
              </div>
              <div className="flex gap-2  text-[20px] items-center">
                <IoMailOutline className="text-xl" />
                <p className="text-[15px]">
                  <a
                    href="https://www.bing.com/ck/a?!&&p=3cebd7c39b00614a24edc1265974cbd97e3284b1f10ff2aa0234e2bcb1ffa672JmltdHM9MTc0NjgzNTIwMA&ptn=3&ver=2&hsh=4&fclid=1a91a735-ebff-6c99-0698-b2ddea736dbf&psq=google&u=a1aHR0cHM6Ly9tYWlsLmdvb2dsZS5jb20vbWFpbC91LzEv&ntb=1"
                    target="_blank"
                  >
                    asimankon@gmail.com
                  </a>
                </p>
              </div>
            </div>
            <div>
              <div className="flex gap-3 text-[20px] text-gray-700 items-start">
                <div className="my-1 w-10 h-10 rounded-full bg-[#023e8a] text-white flex items-center justify-center">
                  <SlSocialLinkedin />
                </div>
                <div className="my-1 w-10 h-10 rounded-full bg-[#023e8a] text-white flex items-center justify-center">
                  <FaInstagram />
                </div>
                <div className="my-1 w-10 h-10 rounded-full bg-[#023e8a] text-white flex items-center justify-center">
                  <RiTwitterXLine />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopHeader;
