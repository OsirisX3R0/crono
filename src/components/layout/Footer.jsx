import React from "react";
import pkg from "../../../package.json";

const Footer = () => {
  return (
    <footer>
      <ul className="flex flex-row gap-2">
        <li>
          <span>{`v${pkg.version}`}</span>
        </li>
        <li>
          <span>
            <a
              href="https://github.com/OsirisX3R0/crono"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </span>
        </li>
      </ul>
      {/* <div className="left">
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
      </div> */}
    </footer>
  );
};

export default Footer;
