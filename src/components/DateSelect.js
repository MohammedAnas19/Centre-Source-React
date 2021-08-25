import React, { useState } from "react";
import CheckBox from "./CheckBox";
import DatePicker from "./DatePicker";

function DateSelect() {
  const [toggle, setToggle] = useState(false);

  //   const checkToggle=()={
  //     setToggle(!toggle);
  //   }

  return (
    <div className="DateSelect">
      <ul>
        <li>
          <CheckBox name="02/01/2021" />
        </li>
        <li>
          <CheckBox name="03/01/2021" />
        </li>
        <li>
          <CheckBox name="04/01/2021" />
        </li>
        <li>
          <CheckBox name="05/01/2021" />
        </li>
        <li>
          <CheckBox name="06/01/2021" />
        </li>
        <li>
          <CheckBox name="07/01/2021" />
        </li>
        <li>
          <DatePicker />
        </li>
      </ul>
    </div>
  );
}

export default DateSelect;
