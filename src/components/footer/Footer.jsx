import React from "react";
import "./footer.css";
import { BsLinkedin, BsGithub, BsFacebook } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      {/* eslint-disable-next-line*/}
      <a href="#" className="footer__logo">
        ARMAN
      </a>
      <ul className="permalinks">
        <li>
          {/* eslint-disable-next-line*/}
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a
          href="https://www.linkedin.com/in/arman-alatovi%C4%87-3b7682210/"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin />
        </a>
        <a href="https://github.com/buggy1887" target="_blank" rel="noreferrer">
          <BsGithub />
        </a>
        <a
          href="https://www.facebook.com/arman.alatovic/"
          target="_blank"
          rel="noreferrer"
        >
          <BsFacebook />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Arman Alatovic. All rights reserved </small>
      </div>
    </footer>
  );
};

export default Footer;
