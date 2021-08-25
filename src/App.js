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
    },
    {
      date: "26/8/2021",
      breakFast: "Beef Salad-Mozzarela",
      lunch: "Asian Beef Salad",
      eveningMeal: "Beef Salad-Mozzarela",
      supper: "Asian Beef Salad",
    },
    {
      date: "27/08/2021",
      breakFast: "Asian Beef Salad",
      lunch: "Beef Salad-Mozzarela",
      eveningMeal: "Asian Beef Salad",
      supper: "Beef Salad-Mozzarela",
    },
    {
      date: "28/8/2021",
      breakFast: "Beef Salad-Mozzarela",
      lunch: "Asian Beef Salad",
      eveningMeal: "Beef Salad-Mozzarela",
      supper: "Asian Beef Salad",
    },
    {
      date: "29/8/2021",
      breakFast: "Asian Beef Salad",
      lunch: "Beef Salad-Mozzarela",
      eveningMeal: "Asian Beef Salad",
      supper: "Beef Salad-Mozzarela",
    },
    {
      date: "30/8/2021",
      breakFast: "Beef Salad-Mozzarela",
      lunch: "Asian Beef Salad",
      eveningMeal: "Beef Salad-Mozzarela",
      supper: "Asian Beef Salad",
    },
    {
      date: "31/8/2021",
      breakFast: "Asian Beef Salad",
      lunch: "Beef Salad-Mozzarela",
      eveningMeal: "Asian Beef Salad",
      supper: "Beef Salad-Mozzarela",
    },
  ]);

  const [mydate, setDate] = useState(new Date());

  return (
    <div className="App">
      <Navbar />
      <Main dish={dishes} date={mydate} setDate={setDate} />
      <div className="container contact-us">
        <p>Feel Free to contact us for your customized plan</p>
        <Form />
      </div>
      <Footer />
    </div>
  );
}

export default App;
