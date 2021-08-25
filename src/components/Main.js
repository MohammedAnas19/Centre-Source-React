import React from "react";
import DateSelect from "./DateSelect";
import Food from "./Food";

export default function Main({
  dishes,
  date,
  setDate,
  currentFood,
  setCurrentFood,
}) {
  return (
    <div
      className="container main"
      style={{ paddingTop: "16px", textAlign: "center" }}
    >
      <h3 className="main-title">Choose Your Dishes</h3>
      <div className="und"></div>
      <p className="subTitle">
        As per your recomented calorie, choose your dishes from below
      </p>
      <div className="btn-container">
        <button className="mainButton-yl">
          <div className="verified"></div>
          Choose Default Menu
        </button>
      </div>
      <div className="food-container">
        <DateSelect
          date={date}
          setDate={setDate}
          currentFood={currentFood}
          setCurrentFood={setCurrentFood}
          dishes={dishes}
        />
        <div>
          <p>BreakFast</p>
          <Food
            availableOpt={currentFood.availableOpt[0]}
            name={currentFood.breakFast}
            url="./assets/Group 113.png"
          />
        </div>
        <div>
          <p>Lunch</p>
          <Food
            availableOpt={currentFood.availableOpt[1]}
            name={currentFood.lunch}
            url="./assets/Group 113.png"
          />
        </div>
        <div>
          <p style={{ width: "100%" }}>Evening Meal</p>
          <Food
            availableOpt={currentFood.availableOpt[2]}
            name={currentFood.eveningMeal}
            url="./assets/Group 113.png"
          />
        </div>
        <div>
          <p>Supper</p>
          <Food
            availableOpt={currentFood.availableOpt[3]}
            name={currentFood.supper}
            url="./assets/Group 113.png"
          />
        </div>
      </div>
      <button className="proceed-btn">Proceed</button>
    </div>
  );
}
