import React from "react";
import styles from './Card.module.css';

let {card, btn} = styles;

export default function Card({name, species, genre, image, onClose}) {
   return (
      <div className={card}>
         <button className={btn} onClick={onClose}>X</button>
         <h2>{name}</h2>
         <h2>{species}</h2>
         <h2>{genre}</h2>
         <img  src={image} alt="Not found" />
      </div>
   );
}
