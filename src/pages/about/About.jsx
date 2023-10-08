import React from "react";
import "./About.scss";
import CVButtom from "../../components/cv-buttom/CVButtom";
const About = () => {
  return (
    <div className="about">
      <div className="image animate__animated animate__slideInLeft">
        <img src={"/images/home-image3.png"} alt="mudar-about" />
      </div>
      <div className="information animate__animated animate__slideInRight">
        <div className="title">
          <h2>About Me</h2>
          <p>
            I'm a software engineer interested in harness my skills to craft
            meaningful and elegant solutions that address real-world challenges.
            I'm dedicated to crafting software that combines top-notch quality
            with exceptional user experiences.
          </p>
        </div>
        <ul>
          <li>
            <span className="left">Name:</span>
            <span className="right">Mudar Abo Fakher</span>
          </li>
          <li>
            <span className="left">Date of birth:</span>
            <span className="right">November 04, 1999</span>
          </li>
          <li>
            <span className="left">Address:</span>
            <span className="right">Syria, Damascus</span>
          </li>
          <li>
            <span className="left">Email:</span>
            <span className="right">mudarabofakher@gmail.com</span>
          </li>
          <li>
            <span className="left">Phone:</span>
            <span className="right">+963 935 150 221</span>
          </li>
          <li>
            <span className="left">Study:</span>
            <span className="right">
              Bachelor of Software Engineering, Damascus University, Syria.{" "}
              <br />
              2018-2023
            </span>
          </li>
          <li>
            <span className="left">Honors:</span>
            <span className="right">
              Top 2 Projects in Software Engineering Department Exhibition
            </span>
          </li>
          <li>
            <CVButtom />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
