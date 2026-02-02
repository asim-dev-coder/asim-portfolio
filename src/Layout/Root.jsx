import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Header/Navbar";
import TopHeader from "../Components/Header/TopHeader";
import Footer from "../Components/Footer/Footer";

const Root = () => {
  return (
    <>
      <div className="hidden lg:block">
        <TopHeader />
      </div>
      <div className="sticky top-0 z-10">
        <Navbar></Navbar>
      </div>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
};

export default Root;
