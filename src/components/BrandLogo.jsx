import React from "react";
import first from "../assets/image/first.svg";
import second from "../assets/image/second.png";
import threes from "../assets/image/threes.svg";
import four from "../assets/image/four.png";
import five from "../assets/image/five.png";
import About from "../assets/image/about.svg";
import Check from "../assets/image/check.png";
import Phone from "../assets/image/phone.png";
import Shape from "../assets/image/Combined Shape.png";

const BrandLogo = () => {
  return (
    <div className="bg-[#FDF0E9] ">
      <div className="container bg-[#FDF0E9] ">
        <ul className="flex flex-wrap  justify-between items-center py-8">
          <li>
            <img src={first} alt="photo" />
          </li>
          <li>
            <img src={second} alt="photo" />
          </li>
          <li>
            <img src={threes} alt="photo" />
          </li>
          <li>
            <img src={four} alt="photo" />
          </li>
          <li>
            <img src={five} alt="photo" />
          </li>
        </ul>
        <div className="max-w-[1090px] h-px bg-[#F3D1BF] my-5 " />
      </div>
      <div className="container bg-[#FDF0E9] flex justify-between items-center flex-wrap gap-24 text-start">
        <div>
          <img src={About} alt="photo" className="max-w-[450px]" />
        </div>
        <div className="flex  flex-col max-w-[450px]">
          <span className="text-[#EF6D58] text-base font-normal font-['Epilogue'] uppercase leading-loose tracking-[3px]">
            About
          </span>
          <h3 className="text-[#391400] text-[50px] font-extrabold font-['Epilogue'] leading-[30px">
            An Experience Design Agency
          </h3>
          <h5 className="text-[#391400A3] text-xl font-normal font-['Epilogue'] leading-loose">
            Provides a full service range
          </h5>
          <p className="w-[470px] h-[98px] text-orange-950 text-opacity-60 text-base font-normal font-['Epilogue'] leading-loose">
            Ability to put themselves in the merchant's shoes. It is meant to
            partner on the long run, and work as an extension of the merchant's
            team.
          </p>
          <a
            href="#"
            className="w-[138px] h-12 bg-[#fff] rounded-md shadow flex items-center justify-center hover:bg-[#FDF0E9]"
          >
            About Us
          </a>
        </div>
      </div>
      <div className="container flex my-32  ">
        <div className="  w-[391px] p-10 h-44 rounded-tl-md rounded-bl-md border border-red-200 ">
          <h4 className="text-orange-950 text-[40px] font-extrabold font-['Epilogue'] leading-[48px]">
            42%
          </h4>
          <p className="text-orange-950 text-xl font-normal font-['Epilogue'] leading-loose">
            Years of experience
          </p>
        </div>
        <div className="  w-[391px] p-10 h-44 rounded-tl-md rounded-bl-md border border-red-200 ">
          <h4 className="text-orange-950 text-[40px] font-extrabold font-['Epilogue'] leading-[48px]">
            5.000
          </h4>
          <p className="text-orange-950 text-xl font-normal font-['Epilogue'] leading-loose">
            Projects complete
          </p>
        </div>
        <div className="  w-[391px] p-10 h-44 rounded-tl-md rounded-bl-md border border-red-200 ">
          <h4 className="text-orange-950 text-[40px] font-extrabold font-['Epilogue'] leading-[48px]">
            73+
          </h4>
          <p className="text-orange-950 text-xl font-normal font-['Epilogue'] leading-loose">
            Agency members
          </p>
        </div>
      </div>

      <div className="container  flex flex-wrap  justify-between items-center">
        <div className="flex  flex-col max-w-[500px]">
          <span className="text-[#EF6D58] text-base font-normal font-['Epilogue'] uppercase leading-loose tracking-[3px]">
            How we work
          </span>
          <h3 className="text-[#391400] text-[50px] font-extrabold font-['Epilogue'] leading-[30px">
            Making Your Projects Look Awesome
          </h3>

          <p className="w-[470px] h-[98px] text-orange-950 text-opacity-60 text-base font-normal font-['Epilogue'] leading-loose">
            Technical skills, design, business understanding, ability to put
            themselves in the merchant's shoes.
          </p>
          <a
            href="#"
            className="w-[138px] h-12 bg-[#fff] rounded-md shadow flex items-center justify-center hover:bg-[#FDF0E9]"
          >
            Read More
          </a>
        </div>
        <div className="flex  flex-wrap flex-col   items-start justify-center">
          <div className="flex items-center gap-8">
            <h3 className="text-orange-950 text-7xl font-extrabold font-['Epilogue'] leading-[80px]">
              1
            </h3>
            <p className="text-orange-950 text-2xl font-bold font-['Epilogue'] leading-loose">
              Full service range including
            </p>
          </div>
          <div className="flex items-center gap-12 row-gap-12">
            <h3 className="text-orange-950 text-7xl font-extrabold font-['Epilogue'] leading-[80px]">
              2
            </h3>
            <p className="text-orange-950 text-2xl font-bold font-['Epilogue'] leading-loose">
              Technical skills, design, business
            </p>
          </div>
          <div className="flex items-center gap-12 row-gap-12">
            <h3 className="text-orange-950 text-7xl font-extrabold font-['Epilogue'] leading-[80px]">
              3
            </h3>
            <p className="text-orange-950 text-2xl font-bold font-['Epilogue'] leading-loose">
              Themselves in the merchant's
            </p>
          </div>
        </div>
      </div>

      <div className="container flex justify-between flex-wrap gap-4 items-center  ">
        <div>
          <iframe
            width="500"
            height="315"
            src="https://www.youtube.com/embed/H1R-4hleRQ8?si=ffgco1VAFkqJ_KEa"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>

        <div>
          <span className="text-red-400 text-base font-normal font-['Epilogue'] uppercase leading-loose tracking-[3px]">
            Read More
          </span>
          <h2 className="w-[469px] h-[99px] text-orange-950 text-[40px] font-extrabold font-['Epilogue'] leading-[48px] my-8">
            Unlock The Greatest Value Possible
          </h2>
          <p className="w-[470px] h-[70px] text-orange-950 text-opacity-60 text-base font-normal font-['Epilogue'] leading-loose">
            Design, business understanding, ability to put themselves in the
            merchant's shoes meant to partner.
          </p>
        </div>
      </div>
      <div className="container flex my-32 items-center flex-wrap  justify-between">
        <div className="max-w-[500px]">
          <span className="text-red-400 text-base font-normal font-['Epilogue'] uppercase leading-loose tracking-[3px]">
            Features
          </span>
          <h2 className="text-orange-950 text-[56px] font-extrabold font-['Epilogue'] leading-[64px]">
            Give Your Site A New Look
          </h2>
          <p className=" my-8 w-[470px] h-[72px] text-orange-950 text-xl font-normal font-['Epilogue'] leading-loose">
            Service range including technical skills, design, business
            understanding.
          </p>

          <div className="flex flex-col gap-3">
            <div className="flex gap-3">
              <img src={Check} alt="" />
              <p className="text-orange-950 text-opacity-60 text-base font-normal font-['Epilogue'] leading-loose">
                Range including technical skills
              </p>
            </div>
            <div className="flex gap-3">
              <img src={Check} alt="" />
              <p className="text-orange-950 text-opacity-60 text-base font-normal font-['Epilogue'] leading-loose">
                Business understanding
              </p>
            </div>
            <div className="flex gap-3">
              <img src={Check} alt="" />
              <p className="text-orange-950 text-opacity-60 text-base font-normal font-['Epilogue'] leading-loose">
                Partner on the long run
              </p>
            </div>
          </div>
        </div>
        <div>
          <img src={Phone} alt="" />
        </div>
      </div>
      <div className="container flex justify-between items-center ">
        <div>
          <span className="text-red-400 text-base font-normal font-['Epilogue'] uppercase leading-loose tracking-[3px]">
            Features
          </span>
          <p className="my-5 w-[370px] h-[70px] text-orange-950 text-xl font-normal font-['Epilogue'] leading-loose">
            Long run, and work as an extension of the merchant's team.
          </p>
          <a
            href="#"
            className="text-orange-950 text-base font-normal font-['Epilogue'] leading-loose "
          >
            Read More
          </a>
        </div>
        <div className="flex justify-between items-end ">
          <div className="gap-5  p-10 flex flex-col items-start justify-center bg-[white] w-[336px] h-[336px] bg-white rounded-tl-md rounded-tr-md rounded-bl-md shadow border border-red-200">
            <span className="w-20 h-20 bg-[red] rounded-full flex items-center justify-center">
              <img src={Shape} alt="ds" />
            </span>

            <h3 className="text-orange-950 text-2xl font-bold font-['Epilogue'] leading-loose">
              Professional
            </h3>
            <p className="w-60 h-[70px] text-orange-950 text-opacity-60 text-base font-normal font-['Epilogue'] leading-loose">
              Full service range including technical skills, design.
            </p>
          </div>
          <div className=" gap-5  p-10 flex flex-col items-start justify-center  w-[336px] h-[272px] rounded-tr-md rounded-br-md border border-red-200">
            <h3 className="text-orange-950 text-2xl font-bold font-['Epilogue'] leading-loose">
              Accessibility
            </h3>
            <p className="w-60 h-[70px] text-orange-950 text-opacity-60 text-base font-normal font-['Epilogue'] leading-loose">
              Business understanding, ability to put themselves.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandLogo;
