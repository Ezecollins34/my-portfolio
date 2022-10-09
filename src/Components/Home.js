import React from "react";
import tools from "../images/tools.png";
import arrow from "../images/Arrow.png";
import wallet from "../images/wallet.png";
import communi from "../images/communi.png";
import setting from "../images/setting.png";

import bigimg from "../images/bigimg.png";

const Home = () => {
  return (
    <section className="body">
      <section className="section1">
        <div className="main-cont">
          <h1>Hello,</h1>
          <h1>
            I am <span>Collins</span>,
          </h1>
          <h1>
            A <span>Frontend Web Developer</span> and{" "}
            <span>UI/UX Designer</span>
          </h1>
          <p>
            Currently Located In Lagos, Nigeria. I Love Building Interactive Web
            and Mobile Based applications.
          </p>
          <button>Let's get in touch</button>
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
      <section className="section2">
        <div className="forimg">
          <img src={bigimg} alt="bigimg" className="bigimg"></img>
        </div>
        <div className="services">
          <div className="toflex">
            <div>
              <img src={wallet}></img>
            </div>
            <div>
              <h1>Reasonable and Flexible </h1>
              <h1>prices for clients</h1>
              <p>
                Offering a flexable and affordable price range for your web
                developments and Ui designs.
              </p>
            </div>
          </div>
          <div className="toflex">
            <div>
              <img src={communi}></img>
            </div>
            <div>
              <h1>Elaborating </h1>
              <h1>Ideas in a discussion</h1>
              <p>
                Having a one on one method of discussion in order to capture
                clients idea and concepts.
              </p>
            </div>
          </div>
          <div className="toflex">
            <div>
              <img src={setting}></img>
            </div>
            <div>
              <h1>Full Range of </h1>
              <h1>Design and Motion Services</h1>
              <p>
                Having a one on one method of discussion in order to capture
                clients idea and concepts.
              </p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Home;
