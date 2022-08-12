import React from "react";
import "./main.scss";
import "./main.css";

function MainContent() {
  return (
    <section className="intro-page">
      <div className="parent-container">
        <div className="main-container">
          <p
            className="hello"

          >
            Hi my name is
          </p>
          <h1
            className="name"

          >
            Matthew Courtney
          </h1>
          <h2
            className="job"

          >
            I'm a Front End Developer
          </h2>
          <p
            className="biography"
          >
            I'm a UI Developer with a strong passion for
            building clean responsive webpages. I have extensive knowledge of
            front-end based technologies such as{" "}
            <span className="orange">
              JavaScript, HTML, CSS, Sass, React, and Vue.
            </span>{" "}
            I am currently working with Bank of America. Ask me how I can help
            you see your project come to life.{" "}
          </p>
          <a href="#portfolio"><button className="check-work">Check out my work</button></a>
        </div>
      </div>
    </section>
  );
}

export default MainContent;
