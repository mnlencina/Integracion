import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import styleNav from "./Nav.module.css"
import { NavLink } from "react-router-dom";

export default function Nav (props){
    return (
        <div>
          <NavLink to='/'SearchBa className={({isActive})=>(isActive ? styleNav.active : styleNav.disable)}>|Home|</NavLink>
          <NavLink to='/About' className={({isActive})=>(isActive ? styleNav.active : styleNav.disable)}>|About|</NavLink>
          <SearchBar onSearch={(characterID) => props.onSearch(characterID)}/>
        </div>
    )
}