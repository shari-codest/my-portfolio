import React from 'react'
import { HiArrowRight } from "react-icons/hi";

const Card = ({ item: { title, des, icon } }) => {
  return (
    <div className="w-full px-12 h-80 py-10 rounded-lg shadow-lg flex items-center bg-[#f3f3f3] hover:bg-gradient-to-r hover:from-[#f3f3f3] hover:via-[#BBAB9C] hover:to-[#f3f3f3] transition-colors duration-300 ease-in-out group">
      <div className="h-72 overflow-y-hidden">
        <div className="flex h-full flex-col gap-10 translate-y-16 group-hover:translate-y-0 transition-transform duration-500">
          <div className="w-10 h-8 flex flex-col justify-between">
        
            {icon ? (
              <span className="text-5xl text-[#FFD2C0]">{icon}</span> // Icon color
            ) : (
              <>
                <span className="w-full h-[2px] rounded-lg bg-[#FFD2C0] inline-flex"></span>
                <span className="w-full h-[2px] rounded-lg bg-[#FFD2C0] inline-flex"></span>
                <span className="w-full h-[2px] rounded-lg bg-[#FFD2C0] inline-flex"></span>
                <span className="w-full h-[2px] rounded-lg bg-[#FFD2C0] inline-flex"></span>
              </>
            )}
          </div>
          <div className="flex flex-col gap-6">
            <h2 className="text-xl md:text-2xl font-bold text-[#20303c]">
              {title}
            </h2>
            <p className="text-[#20303c]">{des}</p>
            <span className="text-2xl text-[#20303C]"> 
              <HiArrowRight />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card