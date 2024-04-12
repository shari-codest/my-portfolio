import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { contactImg } from "../../assets/index";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-[#BBAB9C] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-[#20303c]">Eunice Awuni</h3>
        <p className="text-lg font-normal text-gray-700">
          MERN Stack Developer
        </p>
        <p className="text-base text-[#f9fafa] tracking-wide">
        As a MERN Stack Developer, I specialize in building high-performing, 
        scalable web applications leveraging MongoDB, Express.js, React.js, 
        and Node.js. that is not only visually appealing but 
        also robust and maintainable.
        </p>
        <p className="text-base text-[#20303c] flex items-center gap-2">
          Phone: <span className="text-[#20303c]">+233557212074</span>
        </p>
        <p className="text-base text-[#20303c] flex items-center gap-2">
          Email: <span className="text-[#20303c]">awunieunice@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4 text-[#FED9C8]">Find me on</h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <FaFacebookF />
          </span>
          <span className="bannerIcon">
            <FaTwitter />
          </span>
          <span className="bannerIcon">
            <FaLinkedinIn />
          </span>
        </div>
      </div>
    </div>
  );
}

export default ContactLeft