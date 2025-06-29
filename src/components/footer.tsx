import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="set p-5 text-center text-gray-400 text-xs sm:tex-sm">
      <p>
        © {new Date().getFullYear()}{" "}
        <span className="text-teal-400">Deepak Saini</span>.All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
