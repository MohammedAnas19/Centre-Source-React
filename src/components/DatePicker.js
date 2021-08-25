import React, { useState } from "react";
import { DatePicker } from "react-rainbow-components";
function DatePicker1({ date, setDate }) {
  const containerStyles = {
    width: "135px",
    height: "45px",
    background: "#27A12F",
    border: "1px solid #70707033",
    borderRadius: "7px",
    marginTop: "23px",
  };
  const [state, setState] = useState({ date: new Date() });
  const handleDate = (v) => {
    // console.log(v);
    setDate(v);
    setState({ date: v });
    // console.log(date);
  };
  // console.log("date pppp", date);
  return (
    <div
      className="rainbow-align-content_center rainbow-m-vertical_large rainbow-p-horizontal_small rainbow-m_auto"
      style={containerStyles}
    >
      <p
        style={{
          color: "white",
          marginTop: "4px",
          width: "100%",
        }}
      >
        Select <br />
        custom dates
      </p>

      <DatePicker
        style={{
          width: "135px",
          height: "45px",
          marginTop: "-34px",
          opacity: 0,
          zIndex: "9999",
        }}
        onChange={(value) => handleDate(value)}
      ></DatePicker>
    </div>
  );
}

export default DatePicker1;
