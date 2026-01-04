import React from "react";
import { TfiArrowTopRight } from "react-icons/tfi";
import { HiOutlineArrowRight } from "react-icons/hi";
import currency from "../assets/currency.png";
import friend from "../assets/friend.png";
import todo from "../assets/todo.png";
import pass from "../assets/pass.png";
import launcher from "../assets/launcher.jpg";

type Project = {
  title: string;
  description: string;
  link: string;
  image: string;
  tech: string[];
};

const projects: Project[] = [
  {
    title: "Friend Finder",
    description:
      "A full-stack social app that lets users connect based on location and interests. Built with SvelteKit, FastAPI, and SQLite. Features real-time chat, location sharing via Leaflet.js, and secure authentication.",
    link: "https://friends.nkit.dev/",
    image: friend,
    tech: ["SvelteKit", "FastAPI", "leaflet.js", "Ts"],
  },

  {
    title: "Secure Password Manager",
    description:
      "Built a command-line password manager to securely store and manage user credentials using a master password.Implemented AES encryption and key derivation to ensure strong data protection.",
    link: "https://github.com/Deepaksaini00/Password-Manager",
    image: pass,
    tech: ["Python", "SQLite", "AES Encryption", "PBKDF2"],
  },

  {
    title: "Deep Launcher(Android)",
    description:
      "Built a simple Android launcher with clean UI and grayscale app icons, used daily by me. Implemented app listing, search, and fast launching with smooth Flutter performance.",
    link: "https://github.com/Deepaksaini00/deep-launcher",
    image: launcher,
    tech: ["Flutter", "Android", "Dart"],
  },

  {
    title: "ToDo List",
    description:
      "A task management app built with Flask and SQLite. Supports adding, updating, and deleting todos with clean RESTful routes and server-side rendering via Jinja templates.",
    link: "https://github.com/deepak-nkit/Todo",
    image: todo,
    tech: ["HTML", "CSS", "Python", "Flask"],
  },

];

const Projects: React.FC = () => {
  return (
    <section
      className="mt-5 w-full sm:w-[59vw] sm:ml-[40vw] pr-4 overflow-hidden"
      id="projects"
    >
      <div className="pl-[3vw] w-full sm:max-w-[41vw] md:max-w-fit font-inter">
        <h2 className="text-xl sm:text-2xl text-teal-500 font-bold mb-8">
          PROJECTS
        </h2>
        <div className="flex  flex-col gap-10">
          {projects.map((projects, index) => (
            <a
              key={index}
              href={projects.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-start sm:flex-row gap-6 p-3 max-w-fit rounded-md shadow-xl hover:bg-gray-900 duration-300 cursor-pointer"
            >
              <div className="w-full flex justify-center sm:justify-start md:justify-center">
                <img
                  src={projects.image}
                  alt={projects.title}
                  className=" sm:w-36 sm:h-36 w-4/5 h-4/6 object-cover rounded-md border-2 border-transparent transition-all duration-300  group-hover:border-gray-400"
                />
              </div>

              <div className="flex flex-col justify-center items-start p-2">
                <h3 className="mb-6 flex items-start text-xl font-semibold text-white max-w-fit sm:group-hover:text-teal-400 ">
                  {projects.title}
                  <span className="hidden sm:block transform transition-all duration-300 group-hover:translate-x-1">
                    <TfiArrowTopRight className="mt-1 ml-2" />
                  </span>
                </h3>
                <p className="text-gray-400 text-sm sm:text-md w-full sm:w-[27vw] ">
                  {projects.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-2 sm:mt-3 md:mt-4 px-4">
                  {projects.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-iter text-teal-300 rounded-full bg-teal-800 border border-teal-700 px-2 sm:px-4 py-1 sm:py-2"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-10 sm:mt-14">
          <div className="w-auto group inline-block relative">
            <a
              href="/allprojects"
              className="inline-flex items-center gap-2 px-2 py-2 text-white hover:border-l-2 border-teal-300 hover:text-teal-300 transition"
            >
              <span className="font-semibold text-lg">View All Projects</span>
              <HiOutlineArrowRight className="text-lg transition-transform group-hover:translate-x-2" />
              <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-teal-400 transition-all duration-300 group-hover:w-full mt-1"></span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
