import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import './index.css'

const BankCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="mt-[50px] mx-[50px] perspective">
      <div className={`flip-card ${isFlipped ? "flipped" : ""}`}>
        <div className="flip-card-inner">
          <div className="flip-card-front flex flex-row bg-gray-300 h-[450px] rounded-[12px] gap-5">
            <div className="flex flex-col justify-center w-[300px] bg-gray-300 gap-2 mt-7 ml-[40px] flex-grow">
              <div className="flex gap-2 w-[150px] h-10 rounded-[15px] px-1 bg-slate-400">
                <button
                  onClick={handleFlip}
                  className="text-green-400 text-sm font-medium capitalize hover:bg-white rounded-[12px]"
                >
                  banks
                </button>
                <button
                  onClick={handleFlip}
                  className="text-green-400 text-sm font-medium capitalize"
                >
                  merchants
                </button>
              </div>
              <div className="w-full flex flex-col bg-gray-300 gap-y-6">
                <h1 className="bg-gray-300 tracking-wide text-gray-700 font-bold text-5xl">
                  All your <br /> business payments <br /> on one platform
                </h1>
                <p className="mb-3 text-base bg-gray-300 text-gray-700">
                  Collect online on socials, across all your branches
                </p>
                <button className="w-[150px] text-nowrap gap-2 flex items-center p-3 rounded-[15px] bg-blue-950 text-white border-blue-300 font-bold capitalize text-base">
                  get's started
                  <IoIosArrowForward className="text-2xl bg-blue-950 text-white" />
                </button>
              </div>
            </div>
            <div className="flex items-center">
              <img src="./bank.png" alt="bank" className="h-full" />
            </div>
          </div>
          <div className="flip-card-back flex flex-col items-center justify-center bg-gray-200 rounded-[12px] h-[450px]">
            <h2 className="text-3xl font-bold text-gray-800  bg-gray-200">
              Merchant Side
            </h2>
            <p className="mt-4 text-base text-gray-700  bg-gray-200">
              Here you can manage your merchant account, view transactions.
            </p>
            <button
              onClick={handleFlip}
              className="mt-6 p-2 bg-green-500 text-white rounded"
            >
              Back to Banks
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BankCard;
