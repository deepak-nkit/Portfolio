import React from "react";

const projects = [
  {
    year: "2024",
    name: "Friend Finder",
    techStack: ["SvelteKit", "FastAPI", "Leaflet.js", "TypeScript"],
    link: {
      href: "https://friends.nkit.dev",
      text: "friends.nkit.dev ↗",
    },
  },
  {
    year: "2025",
    name: "Portfolio",
    techStack: ["TypeScript", "TailwindCSS", "React"],
    link: {
      href: "https://github.com/deepak-nkit/Portfolio",
      text: "GitHub ↗",
    },
  },
  {
    year: "2025",
    name: "Focus Timer",
    techStack: ["HTML", "TypeScript", "JavaScript", "TailwindCSS", "React"],
    link: {
      href: "https://github.com/Deepaksaini00/FocusTimer_React",
      text: "GitHub ↗",
    },
  },

  {
    year: "2025",
    name: "Currency Converter",
    techStack: ["HTML", "CSS", "JavaScript"],
    link: {
      href: "https://github.com/deepak-nkit/Currency-Converter",
      text: "GitHub ↗",
    },
  },
  {
    year: "2025",
    name: "Rock Paper Scissor",
    techStack: ["HTML", "CSS", "JavaScript"],
    link: {
      href: "https://github.com/deepak-nkit/RockPaperScissor-game",
      text: "GitHub ↗",
    },
  },
];

const AllProjects: React.FC = () => {
  return (
    <section
      id="allprojects"
      className="set  w-full bg-gray-900 min-h-screen px-9 py-20 "
    >
      <div className="mb-12 ">
        <a
          href="/"
          className="ml-8 text-teal-400 text-lg transition hover:underline"
        >
          ← Deepak Saini
        </a>
        <h1 className="ml-8 text-2xl sm:text-4xl font-bold text-white mt-3">
          All Projects
        </h1>
      </div>

      <div className="overflow-x-auto w-fit sm:p-3 sm:w-[80vw] sm:ml-[10vw] max-w-none ">
        <table className="w-full text-left text-sm sm:text-base">
          <thead>
            <tr className="text-gray-400 border-b border-gray-700">
              <th className="hidden sm:block py-3 pr-6">Year</th>
              <th className="py-3 pr-6">Project</th>
              <th className="py-3 pr-6">Built with</th>
              <th className="py-3 pr-6">Link</th>
            </tr>
          </thead>
          <tbody className="text-gray-300">
            {projects.map((project, index) => (
              <tr
                key={index}
                className="border-b border-gray-800 hover:bg-gray-800 transition"
              >
                <td className="hidden sm:block py-4 pr-6">{project.year}</td>
                <td className="py-4 pr-6 font-semibold text-white">
                  {project.name}
                </td>
                <td className="py-4 pr-6">
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-gray-800 text-teal-400 px-2 py-1 rounded-md text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </td>
                <td className="py-4 pr-6">
                  <a
                    href={project.link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-400 underline sm:no-underline sm:text-gray-300 sm:hover:text-teal-400"
                  >
                    {project.link.text}
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default AllProjects;
