import React from "react";

const Contact: React.FC = () => {
  return (
    <section className="mt-2 w-[59vw] ml-[40vw] font-mono" id="contact">
      <div className="flex flex-col justify-center  w-[45vw] p-[4vw]">
        <h2 className="text-2xl font-bold text-teal-400 mb-5">Get In Touch </h2>
        <p className="text-gray-400 mb-6 max-w-full">
          Whether you're looking for a developer, want to collabrate on
          something exciting, or just want to say{" "}
          <span className="text-gray-200">hi</span>- feel free to{" "}
          <span className="text-gray-200">reach out</span>.
        </p>

        <a
          href="mailto:youremail@example.com?subject=Let's Connect&body=Hi Deepak,"
          className="mt-2 self-center flex items-center justify-center relative px-6 py-3 font-bold text-black group"
        >
          <span className="absolute inset-0 w-[6vw] h-full transition duration-300 ease-out transform group-hover:translate-x-1 group-hover:translate-y-1 bg-teal-500 z-0"></span>
          <span className="absolute inset-0 w-[6vw] h-full border-4 border-black z-10"></span>
          <span className="relative z-20">Say Hi</span>
        </a>
      </div>
    </section>
  );
};

export default Contact;
