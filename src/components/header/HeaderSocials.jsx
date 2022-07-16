import React from "react";
import { BsLinkedin, BsGithub, BsYoutube } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
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
  );
};

export default HeaderSocials;
