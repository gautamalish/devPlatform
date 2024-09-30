import React from "react";
import Notification from "../images/Notification.svg";
import Profile from "../images/ProfileImg.svg";
const Header = () => {
  return (
    <div className="flex justify-end w-full pr-5">
      <img src={Notification} alt="notification" />
      <img src={Profile} alt="" />
      <p>Samir S.</p>
    </div>
  );
};

export default Header;
