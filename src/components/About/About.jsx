import React from "react";
import "./About.css";
import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";

const About = () => {
  return (
    <div className="container about">
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
        <img src={play_icon} alt="" className="play-icon" />
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomorrow's Leaders Today</h2>
        <p>
          Universities have existed for nearly a thousand years and are hubs of
          research and of learning. They're where the present and future are
          being created. But they can be complex and confusing if you're not
          familiar with them. So how do they work? Read on for an overview!
        </p>
        <p>
          These are what you study after completing high school and usually take
          three to five years to complete. Examples include Bachelor of Arts
          (BA), Bachelor of Science (BSc), and Bachelor of Environmental Studies
          (BES).
        </p>
        <p>
          Going to university isn't just about the four or five years you'll be
          on campus. It's also about growing as a person and creating lifelong
          memories and connections.
        </p>
      </div>
    </div>
  );
};

export default About;
