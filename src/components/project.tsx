import React from "react";
import { TfiArrowTopRight } from "react-icons/tfi";
import { HiOutlineArrowRight } from "react-icons/hi";
import currency from "../assets/currency.png";
import friend from "../assets/friend.png";
import rock from "../assets/rock.png";
import todo from "../assets/todo.png";

type Project = {
  title: string;
  description: string;
  link: string;
  image: string;
};

const projects: Project[] = [
  {
    title: "Friend Finder",
    description:
      "A full-stack social app that lets users connect based on location and interests. Built with SvelteKit, FastAPI, and SQLite. Features real-time chat, location sharing via Leaflet.js, and secure authentication.",
    link: "https://friends.nkit.dev/",
    image: friend,
  },
  {
    title: "Currency Converter",
    description:
      "A simple web tool using HTML, CSS, and JavaScript to convert currencies via real-time API. Includes responsive design, currency dropdowns, and instant calculations.",
    link: "https://github.com/deepak-nkit/Currency-Converter",
    image: currency,
  },
  {
    title: "ToDo List",
    description:
      "A task management app built with Flask and SQLite. Supports adding, updating, and deleting todos with clean RESTful routes and server-side rendering via Jinja templates.",
    link: "https://github.com/deepak-nkit/Todo",
    image: todo,
  },
  {
    title: "Rock Paper Scissor Game",
    description:
      "A browser-based game using vanilla JavaScript. Includes move logic, score tracking, basic animations, and a responsive UI for all screen sizes.",
    link: "https://github.com/deepak-nkit/RockPaperScissor-game",
    image: rock,
  },
];

const Projects: React.FC = () => {
  return (
    <section className="w-[59vw] ml-[40vw] overflow-hidden" id="projects">
      <div className="p-[4vw] max-w-[45vw] font-mono ">
        <h2 className="text-2xl text-teal-400 font-bold mb-8">PROJECTS</h2>
        <div className="grid gap-10">
          {projects.map((projects, index) => (
            <a
              key={index}
              href={projects.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex gap-6 p-5 max-w-fit rounded-md shadow-xl  hover:border-y-indigo-900 hover:bg-gray-900 duration-300 cursor-pointer"
            >
              <img
                src={projects.image}
                alt={projects.title}
                className=" w-36 h-36 object-cover rounded-md border-2 border-transparent transition-all duration-300  group-hover:border-gray-400"
              />

              <div className=" flex flex-col justify-center items-start">
                <h3 className="mb-6 flex items-start text-xl font-semibold text-white max-w-fit  group-hover:text-teal-400 ">
                  {projects.title}
                  <span className="transform transition-all duration-300 group-hover:translate-x-1">
                    <TfiArrowTopRight className="mt-1 ml-2" />
                  </span>
                </h3>
                <p className="text-gray-400 w-[27vw] ">
                  {projects.description}
                </p>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-14">
          <div className=" w-auto group inline-block relative">
            <a
              href="/projects"
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
