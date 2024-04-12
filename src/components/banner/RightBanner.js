import React from 'react'
import { bannerImg } from "../../assets/index";

const RightBanner = () => {
  return (
    <div className="w-full lgl:w-1/2 flex justify-center items-center relative ">
      <img
        className="w-[300px] h-[400px] lgl:w-[500px] lgl:h-[680px] z-10 "
        src={bannerImg}
        alt="bannerImg"
      />
      <div className="absolute bottom-0 w-[350px] h-[300px] lgl:w-[500px] lgl:h-[500px] bg-gradient-to-r from-[#f3f3f3] to-[#C0AEA0] shadow-[0_10px_15px_-3px_rgba(238,163,2,0.1),0_4px_6px_-4px_rgba(238,163,2,0.1)] flex justify-center items-center"></div>
    </div>
  );
}

export default RightBanner