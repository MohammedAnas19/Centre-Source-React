import React from "react";
import ABSwitch from "./ABSwitch";

function Food({ name, url }) {
  return (
    <div className="food">
      <div className="imgContainer">
        <img src={url} className="food-img" />
        <ABSwitch />
      </div>
      <p>{name}</p>
    </div>
  );
}

export default Food;
