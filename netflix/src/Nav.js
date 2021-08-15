import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);
  const history = useHistory();

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);
  return (
    <div className={`nav ${show && "nav_black"}`}>
      <div className="nav_contents">
        <img
        onClick={()=> history.push("/")}
          className="nav_logo"
          src="https://pngimg.com/uploads/netflix/netflix_PNG25.png"
          alt="logo"
        />
        <img
        onClick={()=> history.push("/profile")}
          className="nav_avatar"
          src="https://i.pinimg.com/originals/98/49/28/984928f06dccab17a81a829d1da20b7b.png"
          alt="profile pic"
        />
      </div>
    </div>
  );
}

export default Nav;
