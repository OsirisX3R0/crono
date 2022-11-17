import React from "react";
import pkg from "../../../package.json";

const Footer = () => {
  return (
    <footer>
      <div className="left">
        <span>
          <a
            href="https://github.com/OsirisX3R0/crono"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </span>
      </div>
      <div className="right">
        <span>{`v${pkg.version}`}</span>
      </div>
    </footer>
  );
};

export default Footer;
