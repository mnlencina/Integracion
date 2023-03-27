import React from "react";
import styles from './Card.module.css';

let {card, btn, imgContainer, textNombre, genreSpecies} = styles;

export default function Card({name, species, gender, image, onClose}) {
   return (
      <div className={card}>
         <div>
         <button className={btn} onClick={onClose}>X</button>
         </div>

         <div>
            <img className={imgContainer} src={image} alt={name} />
            <h2 className={textNombre}>{name}</h2>
         </div>

         <div className={genreSpecies}>
            <h2>{species}</h2>
            <h2>{gender}</h2>            
         </div>

      </div>
   );
}
