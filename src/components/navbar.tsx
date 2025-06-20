import React from "react";
// import d from "../assets/d.jpg";

const Navbar: React.FC = () => {
  return (
    <aside className="fixed top-0 w-[40vw] h-screen bg-gray-900 text-white flex flex-col justify-start items-start p-[10vw] z-40 shadow-lg">
      {/*name/logo */}
      {/* <div className="flex flex-col items-center mb-20">
        <img
          src={d}
          alt="Deep's"
          className="w-28 h-28 rounded-full object-cover border-2 border-teal-200"
        />
        <h1>Deepak Saini</h1>
      </div> */}
      <div className="flex flex-col items-start">
        <h1 className="text-4xl font-bold  text-slate-200 sm:text-5xl">
          Deepak Saini
        </h1>
        {/* <h1 className="text-4xl font-bold">Deepak Saini</h1> */}
        <p className="text-base text-teal-400 mt-3">Full-Stack Developer</p>
        <p className="text-base text-gray-400 mt-5">
          I create responsive, full-featured web experiences from frontend to
          backend.
        </p>
      </div>
      <nav className="flex flex-col gap-6 text-lg text-gray-400 mt-[5vw]">
        <a href="/about" className="hover:text-teal-400 transition">
          About
        </a>

        <a href="/projects" className="hover:text-teal-400 transition">
          Projects
        </a>

        <a href="/contact" className="hover:text-teal-400 transition">
          {" "}
          Contact
        </a>
      </nav>
    </aside>
  );
};

export default Navbar;
