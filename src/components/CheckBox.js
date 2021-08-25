import React, { useState } from "react";

function CheckBox({ name }) {
  const [toggle, setToggle] = useState(false);

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
      <p style={{ marginTop: "1px", marginLeft: 0 }}>{name}</p>
    </span>
  );
}

export default CheckBox;
