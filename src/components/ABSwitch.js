import React, { useState } from "react";

function ABSwitch({ availableOpt }) {
  const [active, setActive] = useState(true);
  const toggleController = (opt) => {
    setActive(!active);
  };
  return (
    <div className="ab-switch">
      <span
        onClick={() => toggleController()}
        className={availableOpt ? "ab-active" : " "}
      >
        A
      </span>
      <span
        onClick={() => toggleController()}
        className={availableOpt ? " " : " ab-active"}
      >
        B
      </span>
    </div>
  );
}

export default ABSwitch;
