import {useState} from "react";
import styles from './SearchBar.module.css'

let {searchform, imgSearch, btnSearch} = styles;

export default function SearchBar(props) {
   const [character, setCharacter] = useState('')
   
   const handleChange = (e) => {
      setCharacter(e.target.value);
   }

   return (
      <div className={searchform}>
         <img className={imgSearch} src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/2560px-Rick_and_Morty.svg.png" alt="" />
            
            <div>
               {/* <button onClick={()=> props.onSearch(Math.floor(Math.random() * 826))}>Ramdom</button> */}
               <button onClick={()=> props.onSearch(character)}>Agregar</button>
               <input type='search' onChange={handleChange}/>

            </div>
         <div className={btnSearch}>
            <button onClick={props.logOut}>LogOut</button>
         </div>
      </div>
   );
}
