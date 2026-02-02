import React, { useEffect, useRef, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoSearch } from "react-icons/io5";
import { Link } from "react-router-dom";

function Navbar() {
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  const toggleMenus = () => {
    setIsCategoriesOpen(!isCategoriesOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsCategoriesOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className="bg-white py-3 shadow-lg">
      <div className="w-11/12 mx-auto flex items-center justify-between">
        <ul className="hidden lg:flex lg:items-center lg:gap-7">
          <Link to="/">
            <li className="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-black to-black hover:from-red-400 hover:to-rose-600">হোম</li>
          </Link>
          <Link to="/latest">
            <li className="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-black to-black hover:from-red-400 hover:to-rose-600">সর্বশেষ</li>
          </Link>
          <Link to="/politics">
            <li className="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-black to-black hover:from-red-400 hover:to-rose-600">রাজনীতি</li>
          </Link>
          <Link to="/bangladesh">
            <li className="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-black to-black hover:from-red-400 hover:to-rose-600">বাংলাদেশ</li>
          </Link>
          <Link to="/crime">
            <li className="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-black to-black hover:from-red-400 hover:to-rose-600">অপরাধ</li>
          </Link>
          <Link to="/international">
            <li className="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-black to-black hover:from-red-400 hover:to-rose-600">বিশ্ব</li>
          </Link>
          <Link to="/trade">
            <li className="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-black to-black hover:from-red-400 hover:to-rose-600">বাণিজ্য</li>
          </Link>
          <Link to="/opinion">
            <li className="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-black to-black hover:from-red-400 hover:to-rose-600">মতামত</li>
          </Link>
          <Link to="/sports">
            <li className="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-black to-black hover:from-red-400 hover:to-rose-600">খেলা</li>
          </Link>
          <Link to="/entertainment">
            <li className="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-black to-black hover:from-red-400 hover:to-rose-600">বিনোদন</li>
          </Link>
          <Link to="/jobs">
            <li className="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-black to-black hover:from-red-400 hover:to-rose-600">চাকরি</li>
          </Link>
          <Link to="/lifestyle">
            <li className="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-black to-black hover:from-red-400 hover:to-rose-600">জীবনযাপন</li>
          </Link>
        </ul>

        <div className="flex items-center gap-4 sm:justify-evenly sm:w-full lg:w-auto">
          <Link to="/search" className="flex items-center gap-2 transition duration-300 hover:scale-110">
            <IoSearch size={25} className="transition duration-300" />
            <p className="text-black text-lg hidden sm:block lg:block transition duration-300">খুঁজুন</p>
          </Link>
          <Link to="/login">
            <button className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-black to-black hover:from-red-400 hover:to-rose-600 hidden sm:block lg:block">
            লগ ইন
            </button>
          </Link>
          <Link to="/signup">
            <button className="btn text-lg font-semibold rounded-lg border-none bg-[#ee4023] hover:bg-sky-500 text-white hidden sm:block lg:block">
            সাইন আপ
            </button>
          </Link>
          <GiHamburgerMenu
            onClick={toggleMenus}
            size={25}
            className="cursor-pointer block sm:block lg:hidden"
            ref={buttonRef}
          />
        </div>

        {isCategoriesOpen && (
          <div
            ref={menuRef}
            className="absolute top-[64px] left-4 right-4 bg-white rounded-md shadow-lg p-4 z-10 lg:hidden"
          >
            <ul className="flex flex-col gap-2 text-black text-base font-semibold">
              <Link to="/"><li>হোম</li></Link>
              <Link to="/latest"><li>সর্বশেষ</li></Link>
              <Link to="/politics"><li>রাজনীতি</li></Link>
              <Link to="/bangladesh"><li>বাংলাদেশ</li></Link>
              <Link to="/crime"><li>অপরাধ</li></Link>
              <Link to="/international"><li>বিশ্ব</li></Link>
              <Link to="/trade"><li>বাণিজ্য</li></Link>
              <Link to="/opinion"><li>মতামত</li></Link>
              <Link to="/sports"><li>খেলা</li></Link>
              <Link to="/entertainment"><li>বিনোদন</li></Link>
              <Link to="/jobs"><li>চাকরি</li></Link>
              <Link to="/lifestyle"><li>জীবনযাপন</li></Link>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
