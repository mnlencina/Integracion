import React from "react";
import styles from './Card.module.css';
import { Link } from "react-router-dom";
import Detail from "../Detail/Detail";

let {link, card, btn, imgContainer, textNombre, genreSpecies} = styles;

export default function Card({id, name, species, gender, image, onClose}) {
   return (
      <div className={card}>
         <div>
         <button className={btn} onClick={onClose}>X</button>
         </div>

         <Link to={`detail/${id}`} className={link}>
         <div>
            <img className={imgContainer} src={image} alt={name} />
            <h2 className={textNombre}>{name}</h2>
         </div>

         <div className={genreSpecies}>
            <h2>{species}</h2>
            <h2>{gender}</h2>            
         </div>

      </Link>
      </div>      
      
   );
}
