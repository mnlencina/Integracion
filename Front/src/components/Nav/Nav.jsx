import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import styleNav from "./Nav.module.css"
import { NavLink } from "react-router-dom";




export default function Nav (props){


    return (
        <div className={styleNav.divNav}>
          <NavLink to={'/home'} className={({isActive})=>(isActive ? styleNav.active : styleNav.disable)}> |Home| </NavLink>
          <NavLink to={'/about'} className={({isActive})=>(isActive ? styleNav.active : styleNav.disable)}> |About| </NavLink>
          <NavLink to={`/favorites`} className={({isActive})=>(isActive ? styleNav.active : styleNav.disable)}> |Favorites| </NavLink>
          <SearchBar onSearch={(characterID) => props.onSearch(characterID)} logOut={props.logOut}/>
        </div>
    )
}