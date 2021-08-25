import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Form from "./components/Form";
import date from "date-and-time";

function App() {
  const [dishes, setDishes] = useState([
    {
      date: "25/8/2021",
      breakFast: "Asian Beef Salad",
      lunch: "Beef Salad-Mozzarela",
      eveningMeal: "Asian Beef Salad",
      supper: "Beef Salad-Mozzarela",
      availableOpt: [true, false, true, false],
    },
    {
      date: "26/8/2021",
      breakFast: "Beef Salad-Mozzarela",
      lunch: "Asian Beef Salad",
      eveningMeal: "Beef Salad-Mozzarela",
      supper: "Asian Beef Salad",
      availableOpt: [true, true, false, false],
    },
    {
      date: "27/8/2021",
      breakFast: "Asian Beef Salad",
      lunch: "Beef Salad-Mozzarela",
      eveningMeal: "Asian Beef Salad",
      supper: "Beef Salad-Mozzarela",
      availableOpt: [false, false, true, true],
    },
    {
      date: "28/8/2021",
      breakFast: "Beef Salad-Mozzarela",
      lunch: "Asian Beef Salad",
      eveningMeal: "Beef Salad-Mozzarela",
      supper: "Asian Beef Salad",
      availableOpt: [false, true, false, false],
    },
    {
      date: "29/8/2021",
      breakFast: "Asian Beef Salad",
      lunch: "Beef Salad-Mozzarela",
      eveningMeal: "Asian Beef Salad",
      supper: "Beef Salad-Mozzarela",
      availableOpt: [false, true, false, true],
    },
    {
      date: "30/8/2021",
      breakFast: "Beef Salad-Mozzarela",
      lunch: "Asian Beef Salad",
      eveningMeal: "Beef Salad-Mozzarela",
      supper: "Asian Beef Salad",
      availableOpt: [true, true, true, false],
    },
    {
      date: "31/8/2021",
      breakFast: "Asian Beef Salad",
      lunch: "Beef Salad-Mozzarela",
      eveningMeal: "Asian Beef Salad",
      supper: "Beef Salad-Mozzarela",
      availableOpt: [false, false, false, true],
    },
  ]);

  const [mydate, setDate] = useState(new Date());
  const [currentFood, setCurrentFood] = useState(dishes[0]);
  // console.log("currrrrrrrrrrr", currentFood);
  return (
    <div className="App">
      <Navbar />
      <Main
        dishes={dishes}
        date={mydate}
        setDate={setDate}
        currentFood={currentFood}
        setCurrentFood={setCurrentFood}
      />
      <div className="container contact-us">
        <p>Feel Free to contact us for your customized plan</p>
        <Form />
      </div>
      <Footer />
    </div>
  );
}

export default App;
