import React from "react";
import tools from "../images/tools.png";
import arrow from "../images/Arrow.png";

const Home = () => {
  return (
    <section className="body">
      <section className="section1">
        <div className="main-cont">
          <h1 className="forhello" data-text="Hello,">
            Hello,
          </h1>
          <h1>
            Welcome to my <span>PORTFOLIO PAGE</span>,
          </h1>
          <h1>
            My name is<span>Collins</span>,
          </h1>
          <h1>
            A <span>Frontend Web Developer</span> and
            <span>UI/UX Designer</span>
          </h1>
          <button className="btn">Let's get in touch</button>
        </div>
        <div className="main-cont-bottom">
          <div className="skill-info">
            <h2>
              <span>Skills</span> and Tools
            </h2>
            <h3>
              For a more <span>detailed</span>overview, please feel free
            </h3>
            <h3>to check the tools that where used on </h3>
            <h3>a per-project basis.</h3>
          </div>
          <div className="arrow">
            <img src={arrow} alt="arrow"></img>
          </div>
          <div className="tools">
            <img src={tools} alt="tools"></img>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Home;
