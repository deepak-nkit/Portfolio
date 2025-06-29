import React from "react";

const Contact: React.FC = () => {
  return (
    <section
      className="w-full set sm:p-0 sm:w-[59vw] sm:ml-[40vw] font-mono "
      id="contact"
    >
      <div className="flex flex-col sm:justify-center font-inter sm:w-[41vw] sm:pl-[3vw] w-full">
        <h2 className="text-xl sm:text-2xl font-bold text-teal-500 mb-5">
          Get In Touch{" "}
        </h2>
        <p className="text-gray-400 mb-6  sm:max-w-[34vw] md:max-w-[38] max-w-full">
          Whether you're looking for a developer, want to collabrate on
          something exciting, or just want to say{" "}
          <span className="text-gray-200">hi</span>- feel free to{" "}
          <span className="text-gray-200">reach out</span>.
        </p>

        <a
          href="mailto:youremail@example.com?subject=Let's Connect&body=Hi Deepak,"
          className="mt-1 sm:mt-2 self-center flex items-center justify-center sm:justify-start sm:items-start relative px-4 sm:px-6 py-1 sm:py-3 font-bold text-black group"
        >
          <span className="absolute inset-0 min-w-full sm:w-[6vw] h-full transition duration-300 ease-out transform group-hover:translate-x-1 group-hover:translate-y-1 bg-teal-500 z-0"></span>
          <span className="absolute inset-0 min-w-full sm:w-[6vw] h-full border-4 border-black z-10"></span>
          <span className="relative sm:z-20">Say Hi</span>
        </a>
      </div>
    </section>
  );
};

export default Contact;
