import React from "react";
import "./Textimonials.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import user1 from "../../assets/user-1.png";
import user2 from "../../assets/user-2.png";
import user3 from "../../assets/user-3.png";
import user4 from "../../assets/user-4.png";

const Textimonials = () => {
  return (
    <div className="container Textimonials">
      <img src={next_icon} alt="" className="next-btn" onClick={slideForward}/>
      <img src={back_icon} alt="" className="back-btn" onClick={slideBackward}/>
      <div className="slider">
        <ul>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user1} alt="" />
                <div>
                  <h3>William Jackson</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                When a student is admitted I want the student to have access tocertain details by logging into 
                the ERPNext instance, but I donot see anywhere to connect an admitted student with a user profile.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user2} alt="" />
                <div>
                  <h3>William Jackson</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
              Dear all, by default I know you want to make the student a system user for the purpose 
              of accessing the Desk Icons.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user3} alt="" />
                <div>
                  <h3>William Jackson</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
              At the moment, students access their data through the portal. And yes, the portal is not really 
              comprehensive for students at the moment. Like seeing their tests results, attendance.
                </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user4} alt="" />
                <div>
                  <h3>William Jackson</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                When a student is admitted I want the student to have access tocertain details by logging into 
                the ERPNext instance, but I donot see anywhere to connect an admitted student with a user profile.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Textimonials;
