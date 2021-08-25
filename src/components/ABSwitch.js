import React, { useState } from "react";

function ABSwitch() {
  const [active, setActive] = useState(true);
  const toggleController = (opt) => {
    setActive(!active);
  };
  return (
    <div className="ab-switch">
      <span
        onClick={() => toggleController()}
        className={active ? "active" : " "}
      >
        A
      </span>
      <span
        onClick={() => toggleController()}
        className={active ? " " : " active"}
      >
        B
      </span>
    </div>
  );
}

export default ABSwitch;
