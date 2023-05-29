import React, { useState, useEffect } from "react";
import styles from './Card.module.css';
import { Link } from "react-router-dom";
import { addFavorite, deleteFavorite } from "../Reducer/actions";
import { connect } from "react-redux";


let {link, card, btn, btn2, imgContainer, textNombre, genreSpecies} = styles;

function Card({id, name, species, gender, image, onClose, origin, status, deleteFavorite, addFavorite, allCharacters}) {
   
   const [isFav, setIsFav] = useState(false)
   
   
   const handleFavorite = ()=>{
      if(isFav){
         setIsFav(false)
         deleteFavorite(id)
      } else {
         setIsFav(true)
         addFavorite({id, name, species, gender, image, onClose, origin, status})
      }
   }
   
   
   
   useEffect(() => {
      allCharacters.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [allCharacters]);

   return (
      <div className={card}>
         <div>
         {isFav ? (<button className={btn2} onClick={handleFavorite}>❤️</button>) : (<button className={btn2} onClick={handleFavorite}>🤍</button>)}
         {isFav ? null : (<button className={btn} onClick={onClose}>X</button>)}
         
         </div>

         <Link to={`/detail/${id}`} className={link}>
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

const mapStateToProps = (state)=>{
   return{
      allCharacters: state.allCharacters
}
}

const mapDispatchToProps = (dispatch)=>{
   return{
      addFavorite: (char)=> dispatch(addFavorite(char)),
      deleteFavorite: (id)=> dispatch(deleteFavorite(id))      
   }
};

export default connect(mapStateToProps, mapDispatchToProps)(Card)