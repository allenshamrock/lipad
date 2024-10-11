import React from "react";
// import { Button } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <div className="flex flex-col">
      <div className="h-[80px] w-full flex justify-between ">
        <div className="mx-5 flex items-center ">
          {/* <h1 className=" text-black">Logo</h1>
           */}
           <img src="./logo.png" alt="logo" />
        </div>
        <nav className="flex max-w-md items-center justify-evenly gap-4 font-semibold text-base text-gray-900 capitalize ">
          <h4>home</h4>
          <h4>our products</h4>
          <h4>pricing</h4>
          <h4 className="uppercase">faq</h4>
          <h4>contact</h4>
        </nav>
        <div className="flex justify-end  items-center gap-2">
          <button className="w-full h-10 px-3  rounded-[15px] border-2 bg-white-200 text-gray-900 border-blue-900 font-semibold capitalize text-base">
            login
          </button>
          <button className="w-full text-nowrap   p-3 rounded-[15px] bg-blue-950 text-white border-blue-300 font-semibold capitalize text-base">
            get's started
          </button>
        </div>
      </div>
      <div className="mt-3  bg-gray-300 h-[0.01rem]"></div>
    </div>
  );
};

export default Navbar;
