import React from "react";
import Navbar from "./Navbar";
import BankCard from "./BankCard";
import Card from "./Card";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const LandingPage = () => {
  const profileCards = [
    {
      image: "/cash.png",
      header: "Streamline your invoicing",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
    },
    {
      image: "/cash.png",
      header: "Improve efficiency",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
    },
    {
      image: "/cash.png",
      header: "Increase productivity",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
    },
    {
      image: "/cash.png",
      header: "Simplify payments",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
    },
  ];

  const patners = [
    {
      image: "/KCB.jpeg",
    },
    { image: "/Absa.png" },
    {
      image: "/coop.jpeg",
    },
    {
      image: "/I&M.png",
    },
    { image: "/stanbic.jpeg" },
  ];

  return (
    <div className="h-full w-full">
      <Navbar />
      <BankCard />
      <div className="mt-[150px] mx-[50px]">
        <div className="flex flex-col items-center justify-center gap-y-2">
          <button className="w-[100px] h-10 px-3 rounded-[15px] border-5 bg-gray-200 text-gray-900 border-gray-400 font-semibold capitalize text-base">
            Feature
          </button>
          <p className="text-2xl text-gray-800 font-semibold tracking-wider">
            Discover the power of LIPAD
          </p>
          <p className="text-sm text-gray-800 tracking-wider">
            Automate your business, and give your customers a more seamless
            experience
          </p>
          <Card />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
          {profileCards.map((profile, index) => (
            <div
              key={index}
              className="relative flex flex-col gap-3 p-4 bg-gray-300 rounded-[12px] transition-shadow duration-200 hover:shadow-lg"
            >
              <div className="w-10 h-10 bg-green-500 rounded-full mt-3"></div>
              <h2 className="text-xl font-semibold text-gray-800 bg-gray-300">
                {profile.header}
              </h2>
              <p className="text-sm text-gray-600 bg-gray-300">
                {profile.text}
              </p>
              <img
                src={profile.image}
                alt={profile.text}
                className="w-[400px] h-80 object-cover rounded-[12px] mb-2"
              />
            </div>
          ))}
        </div>
        <div className="flex bg-white justify-around tracking-wider text-gray-800 mt-20 p-4">
          <div className="gap-y-3 flex flex-col w-[400px]">
            <h1 className="text-2xl font-semibold">Learn how to use Lipad</h1>
            <p className="space-y-1 text-sm tracking-wider text-gray-800">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry...
            </p>
          </div>
          <div className="flex justify-center">
            <video
              src="video.mp4"
              controls
              className="w-[400px] h-auto rounded-[12px]"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        <div className="mt-[100px] flex flex-col items-center h-30 gap-5 w-full">
          <h3 className="text-3xl font-semibold capitalize flex items-center text-gray-800">
            Our Partner Banks
          </h3>
          <Splide
            options={{
              type: "loop",
              perPage: 3,
              autoplay: true,
              interval: 3000,
              pauseOnHover: false,
              resetProgress: false,
              arrows: false,
              pagination: false,
              speed: 800,
              gap: "1rem",
              direction: "ltr",
            }}
            className="w-full"
          >
            {patners.map((patner, index) => (
              <SplideSlide key={index}>
                <div
                  className={`flex items-center justify-center rounded-full ${
                    index === Math.floor(patners.length / 2)
                      ? "bg-gray-800 p-3"
                      : ""
                  }`}
                  style={{ width: "100px", height: "100px" }}
                >
                  <img
                    className="rounded-full w-full h-full object-cover"
                    src={patner.image}
                    alt={`Partner ${index}`}
                  />
                </div>
              </SplideSlide>
            ))}
          </Splide>
        </div>
        <div className="flex mt-[100px] justify-between">
          <div className="flex flex-col gap-3 w-1/2">
            <button className="w-[200px] text-nowrap rounded-2xl p-2 text-gray-800 text-sm font-semibold border-4 border-gray-300 bg-gray-200">
              why you should use LIPAD
            </button>
            <h3 className="text-4xl font-semibold   text-gray-800">
              One platform for all your business <br /> needs
            </h3>

            <p className=" text-gray-800 text-xl tracking widest">
              Simplify your business with a all-in-one <br /> platform
            </p>
          </div>
          <div className="flex flex-col gap-3 w-1/2">
            <div className="space-y-7 flex flex-col justify-start">
              <p className=" text-gray-800 text-xl tracking widest">
                Instant activating to start transacting
              </p>
              <div className="h-[0.01rem]  bg-slate-300"></div>
              <p className=" text-gray-800 text-xl tracking widest">
                Simple Pricing
              </p>
              <div className="h-[0.01rem]  bg-slate-300"></div>
              <p className=" text-gray-800 text-xl tracking widest">
               Built for all merchants
              </p>
              <div className="h-[0.01rem]  bg-slate-300"></div>
              <p className=" text-gray-800 text-xl tracking widest">
              Dashboard Reporting
              </p>
              <div className="h-[0.01rem]   bg-slate-300"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
