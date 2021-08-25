import React, { useState } from "react";
import CheckBox from "./CheckBox";
import DatePicker from "./DatePicker";

function DateSelect(props) {
  const [toggle, setToggle] = useState(false);
  const [dateSet, setDateSet] = useState([0, 1, 2, 3, 4, 5]);
  console.log(props.date);

  return (
    <div className="DateSelect">
      <ul>
        {dateSet.map((d) => {
          return (
            <li>
              <CheckBox
                name={
                  new Date(
                    new Date(new Date(props.date)).setDate(
                      new Date(new Date(props.date)).getDate() + d
                    )
                  ).getDate() +
                  "/" +
                  (new Date(
                    new Date(new Date(props.date)).setDate(
                      new Date(new Date(props.date)).getDate() + d
                    )
                  ).getMonth() +
                    1) +
                  "/" +
                  new Date(
                    new Date(new Date(props.date)).setDate(
                      new Date(new Date(props.date)).getDate() + d
                    )
                  ).getFullYear()
                }
              />
            </li>
          );
        })}
        <li>
          <DatePicker date={props.date} setDate={props.setDate} />
        </li>
      </ul>
    </div>
  );
}

export default DateSelect;
