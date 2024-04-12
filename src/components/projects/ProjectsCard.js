import React from 'react';
import { BsGithub } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa";

const ProjectsCard = ({ title, des, src, github, demo }) => {
  return (
    <div className="w-full p-4 xl:px-12 h-auto xl:py-10 rounded-lg shadow-lg flex flex-col bg-gradient-to-r from-[#20303c] to-[#BBAB9C] group hover:bg-[#80d8da] transition-colors duration-1000">
      <div className="w-full h-[80%] overflow-hidden rounded-lg">
        <img
          className="w-full h-60 object-cover group-hover:scale-110 duration-300 cursor-pointer"
          src={src}
          alt="Project"
        />
      </div>
      <div className="w-full mt-5 flex flex-col gap-6">
        <div>
          <div className="flex items-center justify-between">
            <h3 className="text-base uppercase font-normal text-[#BBAB9C]">
              {title}
            </h3>
            <div className="flex gap-2">
              <span className="text-lg w-10 h-10 rounded-full inline-flex justify-center items-center bg-[#20303c] text-[#f3f3f3] hover:text-[#BBAB9C] duration-300 cursor-pointer">
                <a href={github} target="_blank" rel="noopener noreferrer">
                  <BsGithub />
                </a>
              </span>
              <span className="text-lg w-10 h-10 rounded-full inline-flex justify-center items-center bg-[#20303c] text-[#f3f3f3] hover:text-[#BBAB9C] duration-300 cursor-pointer">
                <a href={demo} target="_blank" rel="noopener noreferrer">
                  <FaGlobe />
                </a>
              </span>
            </div>
          </div>
          <p className="text-sm tracking-wide mt-3 text-[#f3f3f3]">
            {des}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProjectsCard;
