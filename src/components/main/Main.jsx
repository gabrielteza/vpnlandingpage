import React from "react";
import "./main.css";
import ilustration from "./ilustration.png";
import User from "./usera.png";
import Server from "./server.png";
import Location from "./location.png";

export default function Main() {
  return (
    <div>
      <div className="titleText">
        Want anything to be
        <br /> easy with LaslesVPN.
      </div>
      <div className="subTitle">
        <p>
          Provide a network for all your needs with ease and fun using LaslesVPN
          discover interesting features from us.
        </p>
      </div>
      <div className="btnGet">
        <button className="btnStart">Get Start</button>
      </div>
      <div className="imgIlus">
        <img src={ilustration} alt="" className="imgIlu" />
      </div>
      <div className="container">
        <div className="user">
          <img src={User} alt="" className="userImg" />
        </div>
        <div className="location">
          <img src={Location} alt="" className="locationImg" />
        </div>
        <div className="server">
          <img src={Server} alt="" className="serverImg" />
        </div>
      </div>
      <p className="textUser">
        90+ <br /> Users
      </p>
      <p className="textLocation">
        30+ <br /> Locations
      </p>
      <p className="textServer">
        50+ <br /> Servers
      </p>
    </div>
  );
}
