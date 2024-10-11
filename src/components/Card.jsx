import React from "react";

const Card = () => {
  return (
    <div className="mt-[40px] h-[200px] bg-gray-300 mx-[50px] flex justify-around w-full rounded-[12px] transition-shadow duration-200 hover:shadow-lg shadow-none">
      <div className="flex flex-col mx-[10px] bg-gray-300 text-gray-700 gap-y-2">
        <div className="w-10 h-10 bg-green-500 rounded-full mt-3"></div>
        <h1 className="text-3xl -tracking-wider bg-gray-300 font-semibold">
          Petty cash efficiency, Simplified
        </h1>
        <p className="text-sm tracking-wider bg-gray-300">
          Save time, Stay on schedule, handle all your <br />
          payments from wherever you are
        </p>
      </div>
      <div className="flex items-center bg-gray-300 ">
        <img src="./cash.png" alt="" className="h-[150px]" />
      </div>
    </div>
  );
};

export default Card;

//