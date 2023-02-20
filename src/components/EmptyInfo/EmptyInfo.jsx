import React from "react";
import { NavLink } from "react-router-dom";

const EmptyInfo = ({ title, description }) => {

  return (
    <div className="container_fav-empty">
      <div className="fav-empty">
        <img className="emoji" src={`img/sad-eyes.svg`} alt="sad-eyes" />
        <h3>{title}</h3>
        <p>{description}</p>

        <button className="green-btn">
          <NavLink to="/">Go back and choose!</NavLink>
          <img src="img/arrow.svg" alt="arrow" />
        </button>
      </div>
    </div>
  );
};

export default EmptyInfo;
