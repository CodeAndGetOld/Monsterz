import React from "react";
import "./card-list.styles.css";
import { Card } from "../card/card.component";

export const CardList = ({ monsters, searchField }) => {
  return (
    <div className="card-list">
      {monsters.map(monster => (
        <Card key={monster.key} monster={monster} />
      ))}
    </div>
  );
};
