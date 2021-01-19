import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";
import CardImageA from "../images/img-9.jpg";
import CardImageL from "../images/img-2.jpg";
import CardImageM from "../images/img-3.jpg";
import CardImageAA from "../images/img-4.jpg";
import CardImageAd from "../images/img-8.jpg";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these EPIC Destinations!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={CardImageA}
              text="Explore the hidden waterfall deep inside the Amazon Jungle"
              label="Adventure"
              path="/services"
            />
            <CardItem
              src={CardImageL}
              text="Travel through the Islands of Ball in Private Cruise"
              label="Luxury"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={CardImageM}
              text="Set Sail in the Atlantic Ocean visiting Uncharted Maters"
              label="Mystery"
              path="/services"
            />
            <CardItem
              src={CardImageAA}
              text="Experience Football on Top of the Himilayan Mountains"
              label="Adventure"
              path="/products"
            />
            <CardItem
              src={CardImageAd}
              text="Right through the Sahara Desert on a guided camel tour"
              label="Adrenaline"
              path="/sign-up"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
