import React from "react";
import "./footer.css";
import { BsLinkedin, BsGithub, BsYoutube } from "react-icons/bs";

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
        <a href="https://linkedin.com" target="_blank" rel="noreferrer">
          <BsLinkedin />
        </a>
        <a href="https://github.com" target="_blank" rel="noreferrer">
          <BsGithub />
        </a>
        <a href="https://youtube.com" target="_blank" rel="noreferrer">
          <BsYoutube />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Arman Alatovic. All rights reserved </small>
      </div>
    </footer>
  );
};

export default Footer;
