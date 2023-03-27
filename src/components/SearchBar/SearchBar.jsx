import React from "react";
import styles from './SearchBar.module.css'

let {searchform} = styles;

export default function SearchBar(props) {
   return (
      <div className={searchform}>
         <input type='search' />
      <button onClick={()=> props.onSearch("ID?")}>Agregar</button>
      </div>
   );
}
