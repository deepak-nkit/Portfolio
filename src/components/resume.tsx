import React from "react";
import { HiOutlineArrowRight } from "react-icons/hi";

const Resume: React.FC = () => {
  const handleResume = () => {
    window.open("/deep-resume.pdf", "_blank");
  };

  return (
    <div
      className=" flex items-center ml-[40vw]  group relative w-fit "
      id="resume"
    >
      <button
        onClick={handleResume}
        className="inline-flex font-inter shadow-xl items-center gap-3 max-w-fit px-2 py-2 text-gray-100 text-xl font-bold hover:border-l-2 border-teal-300 hover:text-teal-400 transition p-2 cursor-pointer"
      >
        <span className="flex gap-2">View Resume</span>
        <HiOutlineArrowRight className="text-lg transition-transform group-hover:translate-x-3" />
        <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-teal-400 transition-all duration-300 group-hover:w-[9vw]"></span>
      </button>
    </div>
  );
};

export default Resume;
