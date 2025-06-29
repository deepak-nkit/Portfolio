import React from "react";

const About: React.FC = () => {
  return (
    <section
      className="mt-10 w-full sm:w-[59vw] sm:ml-[40vw] set overflow-hidden "
      id="about"
    >
      <div className="font-inter text-gray-400 w-full max-w-[700px]">
        <h2 className="text-xl sm:text-2xl text-teal-500 font-bold mb-8">
          ABOUT
        </h2>

        {/* <section className="mt-20 w-full sm:w-[59vw] ml-[40vw] overflow-hidden" id="about"> */}
        <p className="mt-7">
          I'm a{" "}
          <span className="text-white font-semibold">
            full-stack web developer
          </span>{" "}
          with a passion for building{" "}
          <span className="text-white font-semibold">user-centric,</span>{" "}
          scalable web applications that connect people and solve real-world
          problems. I enjoy working across the stack—from crafting intuitive
          front-end interfaces with
          <span className="text-white font-semibold"> SvelteKit , React </span>
          and<span className="text-white font-semibold"> Tailwind CSS </span> to
          designing efficient APIs and databases with
          <span className="text-white font-semibold"> FastAPI </span> and{" "}
          <span className="text-white font-semibold">SQLite</span>.
        </p>
        <p className="mt-4">
          I recently built
          <span className="text-white font-semibold"> Friend Finder</span>, a
          social web application that enables users to discover and connect with
          others based on{" "}
          <span className="text-white font-semibold"> location </span> and
          <span className="text-white font-semibold"> shared interests </span>.
          It includes real-time chat, interactive maps using
          <span className="text-white font-semibold"> Leaflet.js </span>, and
          secure
          <span className="text-white font-semibold">
            {" "}
            session-based authentication
          </span>
          —developed, containerized, and deployed using
          <span className="text-white font-semibold"> Docker</span>.
        </p>
        <p className="mt-4">
          I’m always eager to take on new challenges that push my
          <span className="text-white font-semibold"> technical </span> and
          creative limits. When I’m not coding, I’m exploring new tech, solving
          <span className="text-white font-semibold"> DSA problems</span>, or
          working on
          <span className="text-white font-semibold"> personal growth </span>
          projects.
        </p>
      </div>
    </section>
  );
};

export default About;
