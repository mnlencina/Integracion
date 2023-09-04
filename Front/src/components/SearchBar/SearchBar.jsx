import {useState} from "react";
import styles from './SearchBar.module.css'
import { useLocation } from "react-router-dom";

let {searchform, imgSearch, btnSearch} = styles;



export default function SearchBar(props) {
   const [character, setCharacter] = useState('')
   const location = useLocation()
   
   const handleChange = (e) => {
   setCharacter(e.target.value);
   }

   return (
      <div className={searchform}>
         <img className={imgSearch} src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/2560px-Rick_and_Morty.svg.png" alt="" />
            {location.pathname !== "/about" && location.pathname !== "/favorites" && (
            <div>
               <button onClick={()=> props.onSearch(Math.floor(Math.random() * 826))}>Ramdom</button>
               <button id='botonIn' onClick={()=> {
                  props.onSearch(character)
                  document.getElementById('botonIn').disabled = true
                  setTimeout(() => document.getElementById('botonIn').disabled = false , "1000");
               }}>Agregar</button>
               <input type='search' onChange={handleChange}/>

            </div>
            )}
         <div className={btnSearch}>
            <button onClick={props.logOut}>LogOut</button>
         </div>
      </div>
   );
}
