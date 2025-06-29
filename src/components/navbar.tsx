import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

// import d from "../assets/d.jpg";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <aside
      className=" sm:fixed sm:top-0 w-full sm:w-[40vw] md:w-[40vw] h-fit pb-5 sm:h-screen mt-1
      sm:bg-transparent text-white flex flex-col  lg:flex-col justify-between sm:justify-start items-start md:flex-row
      pt-10  lg:p-[7vw] pl-[6vw] z-40 shadow-lg font-mono"
    >
      {/*name/logo */}
      {/* <div className="flex flex-col justify-center items-center mb-10">
        <img
          src={d}
          alt="Deep's"
          className=" w-[200px] h-[200px] rounded-full object-cover border-2 border-teal-200"
        />
      </div> */}

      <div className="fixed top-0 min-h-14 left-0 w-full bg-[#0f172a] px-4 flex justify-between items-center sm:hidden z-50 mb-6 ">
        <h2 className="text-xl font-bold text-slate-200">Deepak Saini </h2>
        <button onClick={toggleMenu} className="text-white text-3xl">
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>
      <div className="flex flex-col items-start justify-start w-full max-w-[90%] sm:max-w-[90%]">
        <h1 className="hidden sm:block text-4xl sm:pt-3 sm:text-4xl lg:text-5xl font-bold text-slate-200">
          <a href="/">Deepak Saini</a>
        </h1>
        <p className="text-base sm:text-lg text-teal-400 mt-10">
          Full-Stack Developer
        </p>
        <p className="text-sm sm:text-md sm:text-gray-400 mt-8 sm:mt-5 w-full leading-relaxed">
          I create responsive, full-featured web experiences from frontend to
          backend.
        </p>
      </div>

      {isOpen && (
        <div className="fixed top-[50px] left-0 w-full bg-gray-900 z-40 px-6 py-6 sm:hidden shadow-md transition-all">
          <nav
            className={`mt-6 sm:mt-16 flex-col gap-7 sm:gap-5 text-sm sm:text-base text-gray-400 ${
              isOpen ? "flex" : "hidden"
            } sm:flex px-4 sm:px-0 `}
          >
            {/* // className="md:mr-auto md:ml-auto sm:flex sm:flex-col  gap-4 sm:gap-5 text-sm sm:text-base text-gray-400 mt-10 sm:mt-16"> */}
            {[
              { href: "#about", label: "ABOUT" },
              { href: "#projects", label: "PROJECTS" },
              { href: "#resume", label: "RESUME" },
              { href: "#contact", label: "CONTACT" },
            ].map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="group flex items-center gap-3 transition-all duration-300"
                onClick={() => setIsOpen(false)} // optional: auto-close menu
              >
                <span className="text-gray-500 group-hover:text-teal-400 transition duration-300 transform group-hover:translate-x-2">
                  ──
                </span>
                {/* Link text */}
                <span className="text-gray-400 group-hover:text-teal-400 transition duration-300 transform group-hover:translate-x-2">
                  {item.label}
                </span>
              </a>
            ))}
          </nav>
        </div>
      )}

      <nav className="hidden sm:flex flex-col gap-5 text-sm sm:text-base text-gray-400 mt-10 sm:mt-16">
        {[
          { href: "#about", label: "ABOUT" },
          { href: "#projects", label: "PROJECTS" },
          { href: "#resume", label: "RESUME" },
          { href: "#contact", label: "CONTACT" },
        ].map((item, index) => (
          <a
            key={index}
            href={item.href}
            className="group flex items-center gap-3 transition-all duration-300"
          >
            <span className="text-gray-500 group-hover:text-teal-400 transition duration-300 transform group-hover:translate-x-2">
              ──
            </span>
            <span className="text-gray-400 group-hover:text-teal-400 transition duration-300 transform group-hover:translate-x-2">
              {item.label}
            </span>
          </a>
        ))}
      </nav>
    </aside>
  );
};

export default Navbar;
