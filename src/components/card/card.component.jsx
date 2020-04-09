import React from "react";
import "./card.styles.css";

export const Card = ({ monster }) => {
  // const names = ["chill", "beer", "tinfoil", "floor", "water"];
  // const randomNr = Math.floor(Math.random() * 10);
  const link = `https://robohash.org/${monster.id}.png`;
  return (
    <div className="card-container">
      <img src={link} alt="FETCH FAILED"></img>
      <h2>{monster.name}</h2>
      <p>{monster.email}</p>
    </div>
  );
};
