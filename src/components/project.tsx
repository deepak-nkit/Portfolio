import React from "react";
import { TfiArrowTopRight } from "react-icons/tfi";
import { HiOutlineArrowRight } from "react-icons/hi";

type Project = {
  title: string;
  description: string;
  link: string;
};

const projects: Project[] = [
  {
    title: "Friend Finder",
    description:
      "A full-stack social web application designed to help users discover and connect with nearby people based on shared interests. Built using React for the frontend, FastAPI for backend APIs, and SQLite as the database. It includes features like user authentication, real-time location sharing using Leaflet.js, live chat, and search filters (by username, topic, and pincode).The app was designed with scalability in mind and demonstrates my ability to integrate maps, authentication, and real-time communication.",
    link: "https://friends.nkit.dev/",
  },

  {
    title: "Currency Converter",
    description:
      "A lightweight client-side tool developed with HTML, CSS, and JavaScript that allows users to convert between global currencies using real-time exchange rates from an external API. It features user-friendly input fields, currency selection dropdowns, error handling, and instant result calculation. This project helped me strengthen my JavaScript fundamentals and API integration skills while focusing on responsive and intuitive UI design.",
    link: "https://github.com/deepak-nkit/Currency-Converter",
  },

  {
    title: "ToDo List",
    description:
      "A Python Flask web application for managing personal tasks. Users can add, update, and delete to-do items with persistent data storage. The backend uses Flask and SQLite, and the frontend uses HTML/CSS with Jinja templates. RESTful routes are implemented for clean API structure. This project focuses on CRUD functionality, clean routing, and backend templating — a great example of server-rendered applications.",
    link: "https://github.com/deepak-nkit/Todo",
  },

  {
    title: "Rock Paper Scissor Game",
    description:
      "A fun interactive game built with vanilla JavaScript, HTML, and CSS that allows users to play Rock Paper Scissors against the computer. It includes random move generation, score tracking, animations, and responsive layout for both desktop and mobile. This project was designed to strengthen my logic building, DOM manipulation, and event handling skills in a game context.",
    link: "https://github.com/deepak-nkit/RockPaperScissor-game",
  },
];

const Projects: React.FC = () => {
  return (
    <section
      className="mt-3 bg-gray-800 w-[59vw] ml-[40vw] overflow-hidden"
      id="projects"
    >
      <div className="p-[4vw] max-w-fit ">
        <h2 className="text-2xl text-teal-400 font-bold mb-4">PROJECTS</h2>
        <div className="grid gap-6">
          {projects.map((projects, index) => (
            <a
              key={index}
              href={projects.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-5 rounded-md shadow-xl border border-transparent hover:border-gray-900 hover:bg-gray-900 duration-300 cursor-pointer"
            >
              <h3 className="flex flex-row text-xl font-semibold text-white max-w-fit p-2 group-hover:text-teal-400 ">
                {projects.title}
                <span className="transform transition-all duration-300 group-hover:translate-x-1">
                  <TfiArrowTopRight className="mt-1 ml-2" />
                </span>
              </h3>
              <p className="text-gray-400  max-w-[35vw] p-2 ">
                {projects.description}
              </p>
            </a>
          ))}
        </div>

        {/*  show all projects */}

        <div className="mt-10">
          <div className=" w-auto group inline-block relative">
            <a
              href="/projects"
              className="inline-flex items-center gap-2 px-4 py-2 text-white hover:border-l-2 border-teal-300 hover:text-teal-300 transition"
            >
              <span>View All Projects</span>
              <HiOutlineArrowRight className="text-lg transition-transform group-hover:translate-x-2" />
              {/* Underline */}
              <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-teal-400 transition-all duration-300 group-hover:w-full mt-1"></span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
