import React from "react";

export const Card = ({card}) =>{
  //const doubleHTML = double ? "double" : "";
  //console.log(doubleHTML);

  return (
      <li className="miniCard">
          <span data-gamename={card.name}>juego:{card.name}</span>
          <a data-gameitem href={card.url} title={card.name}>
              <img src={card.thumb} alt=""></img>
          </a>
      </li>
  );
}
