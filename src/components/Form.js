import React from "react";

const Form = () => {
  const formStyle = {
    display: "flex",
    margin: "0 auto",
    padding: "18px 0px 32px 37px",
    width: "915px",
    background: "#FFFFFF",
  };
  return (
    <form style={formStyle}>
      <div style={{ display: "block", paddingRight: "33px" }}>
        <label style={{ fontWeight: "bold", float: "left" }} for="fname">
          Your Name*
        </label>
        <br />
        <input type="text" id="fname" name="firstname"></input>
        <br />
        <label style={{ float: "left", marginTop: "10px" }} for="fname">
          Your Mobile Number*
        </label>
        <br />
        <input type="text" id="fname" name="firstname"></input>
      </div>
      <div style={{ display: "block", paddingRight: "41px" }}>
        <label style={{ float: "left" }} for="fname">
          Your Email
        </label>
        <br />
        <input type="text" id="fname" name="firstname"></input>
        <br />
        <label style={{ float: "left", marginTop: "10px" }} for="fname">
          Message
        </label>
        <br />
        <input type="text" id="fname" name="firstname"></input>
      </div>
      <div style={{ position: "relative" }}>
        <button type="submit">
          Send
          <br />
          Now
        </button>
      </div>
    </form>
  );
};

export default Form;
