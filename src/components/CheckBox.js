import React, { useState } from "react";

function CheckBox({ name, currentFood, setCurrentFood, dishes }) {
  const [toggle, setToggle] = useState(false);

  return (
    <span
      className={currentFood.date == name ? "active checkbox " : "checkbox"}
      onClick={() => {
        setToggle(!toggle);
        console.log("b", currentFood, name);
        setCurrentFood(dishes.filter((d) => d.date == name)[0]);
        console.log("a", currentFood);
      }}
    >
      {toggle ? (
        <span class="checkmarkTrue"></span>
      ) : (
        <span class="checkmarkFalse"></span>
      )}
      <input type="checkbox" checked={toggle}></input>
      <p
        style={{
          marginTop: "7px",
          marginLeft: 0,
          width: "76px",
          height: "14px",
        }}
      >
        {name}
      </p>
    </span>
  );
}

export default CheckBox;
