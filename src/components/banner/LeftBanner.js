import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
// import Media from './Media';

const LeftBanner = () => {
    const [text] = useTypewriter({
      words: ["Professional Coder.", "Full Stack Developer.", "UI Designer."],
      loop: true,
      typeSpeed: 20,
      deleteSpeed: 10,
      delaySpeed: 2000,
    });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20 ">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal text-[black]">IT'S THE DIGITAL WORLD, WHERE THIS SPACE IS MY OYSTER</h4>
        <h1 className="text-5xl font-bold text-[#20303c] ">
          Hi, I'm <span className="text-designColor capitalize ">Eunice Awuni</span>
        </h1>
        <h2 className="text-4xl font-bold text-[#20303c]">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#C0AEA0"
          />
        </h2>
        {/* <p className="text-base font-bodyFont leading-6 tracking-wide">
        As a web developer, I utilize HTML5, CSS3, JavaScript, React, and Tailwind 
        to create dynamic and accessible websites. I prioritize clean code and 
        responsive design to ensure seamless experiences on any device. My focus is on 
        crafting digital spaces that are both visually appealing and intuitively functional.
        </p> */}
      </div>
     {/* Media */}
     {/* <Media /> */}
    </div>
  );
}

export default LeftBanner