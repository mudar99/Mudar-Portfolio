import React from "react";
import "./Home.scss";
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
          Well-versed in technology and writing code to create systems that are
          reliable. <br />
          Confident communicator, strategic thinker and innovative creator.
          <br />
        </p>
      </div>
      <div className="image animate__animated animate__slideInRight">
        <img src="/images/home-image.png" alt="mudar-home"></img>
      </div>
    </div>
  );
};

export default Home;
