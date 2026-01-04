import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const SocialLinks: React.FC = () => {
  return (
    <div className="sm:fixed sm:bottom-0 sm:left-[6vw] sm:z-50 flex flex-row sm:flex-col gap-6 sm:gap-0 sm:items-center sm:space-y-5 sm:py-0 sm:m-0 px-7 py-4 m-4">
      <a href="mailto:ds954642@gmail.com" target="_blank" rel="noreferrer">
        <MdEmail className="text-2xl sm:text-xl text-gray-400 sm:hover:text-teal-400 sm:transition-colors" />
      </a>

      <a
        href="https://github.com/Deepaksaini00/"
        target="_blank"
        rel="noreferrer"
      >
        <FaGithub className="text-2xl sm:text-xl text-gray-400 sm:hover:text-teal-400 sm:transition-colors" />
      </a>

      <a
        href="https://www.instagram.com/saini_deepak_01/"
        target="_blank"
        rel="noreferrer"
      >
        <FaInstagram className="text-2xl sm:text-xl text-gray-400 sm:hover:text-teal-400 sm:transition-colors" />
      </a>

      <a
        href="https://www.linkedin.com/in/deepak-saini-07d02/"
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedin className="text-2xl sm:text-xl text-gray-400 sm:hover:text-teal-400 sm:transition-colors" />
      </a>
      <div className="hidden  sm:block sm:w-[2px] sm:h-20 sm:bg-gray-400"></div>
    </div>
  );
};

export default SocialLinks;
