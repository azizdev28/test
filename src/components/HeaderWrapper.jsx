import React from "react";
import Person from "../assets/image/Person.svg";
import WrapperBg from "../assets/image/WrapperBg.png";
const HeaderWrapper = () => {
  return (
    <div className="bg-blue-800">
      <div className="flex items-center container min-h-[800px] flex-wrap gap-6   ">
        <div className="max-w-[500px]">
          <span className="text-red-400 text-base font-normal font-['Epilogue'] uppercase leading-loose tracking-[3px] text-[#EF6D58]">
            Modern Studio
          </span>
          <h2 className="text-white text-7xl font-extrabold mt-5 mb-5 font-['Epilogue'] leading-[80px]  text-[#fff] ">
            We're Help To Build Your Dream Project
          </h2>
          <p className="w-[470px] mb-6 h-[66px] text-white text-opacity-60 text-base font-normal font-['Epilogue'] leading-loose text-[#FFFFFFA3]">
            Agency provides a full service range including technical skills,
            design, business understanding.
          </p>
          <div className="flex gap-1  my-4">
            <a
              href="#"
              className="w-[154px] h-12 bg-[#EF6D58] flex justify-center hover:bg-[#28293E] transition-all items-center rounded-md text-center text-white text-sm font-black font-['Epilogue'] uppercase"
            >
              How We Work
            </a>
            <a
              href="#"
              className="w-[154px] h-12 bg-red-400 rounded-md bg-[#EF6D58]  hover:bg-[#28293E] flex justify-center items-center text-center text-white text-sm font-black font-['Epilogue'] uppercase"
            >
              Contact Us
            </a>
          </div>
          <div className="mt-20 flex gap-4">
            <div>
              <img src={Person} alt="Bitmap" className="w-12 h-12" />
            </div>
            <div>
              <p className="text-[#fff] text-opacity-60 text-base font-normal font-['Epilogue'] leading-loose">
                "Put themselves in the merchant's shoes"
              </p>
              <h3 className="text-[#fff] text-base font-normal font-['Epilogue'] leading-loose">
                Meta Inc.
              </h3>
            </div>
          </div>
        </div>
        <div>
          <img src={WrapperBg} alt="" className="max-w-[500px]" />
        </div>
      </div>
    </div>
  );
};

export default HeaderWrapper;
