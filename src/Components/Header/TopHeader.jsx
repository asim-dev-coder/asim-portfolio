import React from 'react';
import { IoMdCall } from "react-icons/io";
import { IoMailOutline } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { SlSocialLinkedin } from "react-icons/sl";
const TopHeader = () => {
    return (
        <div className='bg-linear-to-r from-[#023e8a] via-[#48cae4] to-[#caf0f8] work'>
            <div className='w-9/12 mx-auto '>
                <div className=' flex items-center justify-between text-white'>
                    <div className='flex items-center gap-5 py-2 '>
                        <div className='flex gap-1 items-center  pr-4 '>
                            <h1 className='text-red-500 block lg:hidden text-5xl font-roboto font-bold'>For a better view, please visit from desktop</h1>
                            <IoMdCall className='text-[20px] ' />
                            <p className='text-[15px]'><a href='https://web.whatsapp.com/' target="_blank">+8801556440078</a></p>
                        </div>
                        <div className='flex gap-2  text-[20px] items-center'>
                            <IoMailOutline className='text-xl' />
                            <p className='text-[15px]'><a href='https://www.bing.com/ck/a?!&&p=3cebd7c39b00614a24edc1265974cbd97e3284b1f10ff2aa0234e2bcb1ffa672JmltdHM9MTc0NjgzNTIwMA&ptn=3&ver=2&hsh=4&fclid=1a91a735-ebff-6c99-0698-b2ddea736dbf&psq=google&u=a1aHR0cHM6Ly9tYWlsLmdvb2dsZS5jb20vbWFpbC91LzEv&ntb=1' target="_blank">asimankon@gmail.com</a></p>
                        </div>
                    </div>
                    <div>
                        <div className='flex gap-12 items-center'>
                            <div className='flex gap-6 text-[20px] text-gray-700 items-start'>
                                < SlSocialLinkedin />
                                < FaInstagram className='transform translate-y-[2px]' />
                                < RiTwitterXLine className='transform translate-y-[2px]' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopHeader;