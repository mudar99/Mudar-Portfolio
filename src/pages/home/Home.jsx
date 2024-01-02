import React from "react";
import "./Home.scss";
import CVButtom from "../../components/cv-buttom/CVButton";

const Home = () => {
  return (
    <div className="home">
      <div className="bio animate__animated animate__slideInLeft">
        <div className="title">
          <p className="hello">Hello!</p>
          <div className="name">I'm Mudar Abo Fakher</div>
        </div>
        <p className="desc">
          Software engineer with a passion for developing innovative. <br />
          Experienced Front-end React JS developer with a passion for
          innovation, adept at building websites from scratch with modern
          technologies. Seeking opportunities to contribute to dynamic projects.
        </p>
        <CVButtom />
      </div>
      <div className="image animate__animated animate__slideInRight">
        <img
          src="/images/home-image.png"
          alt="mudar-home"
          loading="eager"
        ></img>
      </div>
    </div>
  );
};

export default Home;
