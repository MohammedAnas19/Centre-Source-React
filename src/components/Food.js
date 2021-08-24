import React from "react";

function Food({ name, url }) {
  return (
    <div className="food">
      <div className="imgContainer">
        <img src={url} className="food-img"></img>
      </div>
      <p>{name}</p>
    </div>
  );
}

export default Food;
