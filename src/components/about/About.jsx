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
            Hello there, I'm a hobby web deevloper. I'm currently working on my
            personal website. I'm a self-taught web developer with a passion for
            learning new things. My previous experience includes working in
            insurance companies, as well as playing music around my country. In
            my previous roles I've learned to work with a variety VIP clients,
            and trying to implement LEAN principles. Lately I've developed an
            interest towards SCRUM and I'm currently learning how to use it.
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
