import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const SocialLinks: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-[6vw] z-50 hidden md:flex flex-col items-center space-y-5">
      <a href="mailto:ds954642@gmail.com" target="_blank" rel="noreferrer">
        <MdEmail className="text-gray-400 hover:text-teal-400 transition-colors" />
      </a>

      <a
        href="https://github.com/deepak-nkit/"
        target="_blank"
        rel="noreferrer"
      >
        <FaGithub className="text-gray-400 hover:text-teal-400 transition-colors" />
      </a>

      <a
        href="https://www.instagram.com/saini_deepak_01/"
        target="_blank"
        rel="noreferrer"
      >
        <FaInstagram className="text-gray-400 hover:text-teal-400 transition-colors" />
      </a>

      <a
        href="https://www.linkedin.com/in/deepak-saini-07d02/"
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedin className="text-gray-400 hover:text-teal-400 transition-colors" />
      </a>
      <div className="w-[2px] h-20 bg-gray-400"></div>
    </div>
  );
};

export default SocialLinks;
