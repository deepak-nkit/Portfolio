import React from "react";
// import d from "../assets/d.jpg";

const Navbar: React.FC = () => {
  return (
    <aside className="fixed top-0 w-[40vw] h-screen  text-white flex flex-col justify-start items-start pt-[5vw] pl-[10vw] z-40 shadow-lg font-mono">
      {/*name/logo */}
      {/* <div className="flex flex-col justify-center items-center mb-10">
        <img
          src={d}
          alt="Deep's"
          className=" w-[200px] h-[200px] rounded-full object-cover border-2 border-teal-200"
        />
      </div> */}

      <div className="flex flex-col justify-start max-w-[66%]">
        <h1 className="text-4xl font-bold  text-slate-200 sm:text-5xl">
          <a href="/">Deepak Saini</a>
        </h1>
        {/* <h1 className="text-4xl font-bold">Deepak Saini</h1> */}
        <p className="text-base text-teal-400 mt-3">Full-Stack Developer</p>
        <p className="text-base text-gray-400 mt-5">
          I create responsive, full-featured web experiences from frontend to
          backend.
        </p>
      </div>
      <nav className="flex flex-col gap-6 text-sm text-gray-400 mt-[5vw]">
        <a href="#about" className="hover:text-teal-400 transition">
          ABOUT
        </a>

        <a href="#projects" className="hover:text-teal-400 transition">
          PROJECTS
        </a>

        <a href="#resume" className="hover:text-teal-400 transition">
          RESUME
        </a>

        <a href="#contact" className="hover:text-teal-400 transition">
          Contact
        </a>
      </nav>
    </aside>
  );
};

export default Navbar;
