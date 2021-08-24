import React, { useState } from "react";

function CheckBox({ name }) {
  const [toggle, setToggle] = useState(true);

  return (
    <span
      className="checkbox"
      onClick={() => {
        setToggle(!toggle);
      }}
    >
      {toggle ? (
        <span class="checkmarkTrue"></span>
      ) : (
        <span class="checkmarkFalse"></span>
      )}
      <input type="checkbox" checked={toggle}></input>
      {name}
    </span>
  );
}

export default CheckBox;
