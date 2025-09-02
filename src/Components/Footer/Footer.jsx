import React from 'react';
import { FaInstagram } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { SlSocialLinkedin } from "react-icons/sl";
import { IoMdCall } from "react-icons/io";
import { IoMailOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <div>
      <hr className='text-gray-200 text-2xl mt-3' />
      <div className='bg-sky-50'>
        <div className='w-9/12 mx-auto'>
          <div className='block xl:hidden lg:hidden'>
            <div className='lg:flex lg:items-center lg:justify-between p-2'>
              <div className='flex gap-6 text-[20px] text-gray-700 items-start'>
                < SlSocialLinkedin />
                < FaInstagram className='transform translate-y-[2px]' />
                < RiTwitterXLine className='transform translate-y-[2px]' />
              </div>
              <div className='flex items-center gap-5 py-2 '>
                <div className='flex gap-1 items-center  pr-4 '>
                  <IoMdCall className='text-[20px] ' />
                  <p className='text-[15px]'>+8801556440078</p>
                </div>
                <div className='flex gap-2  text-[20px] items-center'>
                  <IoMailOutline className='text-xl' />
                  <p className='text-[15px]'>asimankon@gmail.com</p>
                </div>
              </div>
            </div>
            <div className='flex items-center justify-between'>
              <h1 className='text-base text-black py-3 text-center'> © 2025 All Rights Reserved by <span className='text-[#023e8a]'>Assim</span></h1>
              <div className='text-2xl font-semibold bg-gradient-to-r from-[#023e8a] to-[#48cae4] text-transparent bg-clip-text'>
                Assim
              </div>
            </div>
          </div>
          <div className='hidden xl:block lg:block'>
            <div className='flex items-center justify-between'>
              <div className='flex gap-6 text-[20px] text-gray-700 items-start'>
                < SlSocialLinkedin />
                < FaInstagram className='transform translate-y-[2px]' />
                < RiTwitterXLine className='transform translate-y-[2px]' />
              </div>
              <div className='flex items-center gap-5 py-2 '>
                <div className='flex gap-1 items-center  pr-4 '>
                  <IoMdCall className='text-[20px] ' />
                  <p className='text-[15px]'>+8801556440078</p>
                </div>
                <div className='flex gap-2  text-[20px] items-center'>
                  <IoMailOutline className='text-xl' />
                  <p className='text-[15px]'>asimankon@gmail.com</p>
                </div>
              </div>
              <h1 className='text-base text-black py-3 text-center'> © 2025 All Rights Reserved by <span className='text-[#023e8a]'>Assim</span></h1>
              <div className='text-2xl font-semibold bg-gradient-to-r from-[#023e8a] to-[#48cae4] text-transparent bg-clip-text'>
                Assim
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;