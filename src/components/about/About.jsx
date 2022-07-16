import React from "react";
import "./about.css";
import me from "../../assets/me-about.JPG";
import {
  AiOutlineCheck,
  AiOutlineAreaChart,
  AiOutlineAudio,
} from "react-icons/ai";

const About = () => {
  return (
    <section id="about">
      <h5>Get to know stuff</h5>
      <h2>About me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={me} alt="me again" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <div className="about__card">
              <AiOutlineAreaChart className="about__icon" />
              <h5>Experience</h5>
              <small>2+ Years Working</small>
            </div>
            <div className="about__card">
              <AiOutlineCheck className="about__icon" />
              <h5>Clients</h5>
              <small>300+ VIP Clients</small>
            </div>
            <div className="about__card">
              <AiOutlineAudio className="about__icon" />
              <h5>Music</h5>
              <small>15+ Years</small>
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem
            fugit quis reprehenderit vero quam veritatis nisi incidunt ratione
            enim minima inventore ad, eveniet officia ducimus voluptatem!
            Necessitatibus libero rem odio.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
