import React, {useState, useEffect} from "react";
import { useParams, useNavigate } from "react-router-dom";
import styles from './Detail.module.css';

export default function Detail(props){
    const {detailId} = useParams()
    const [character, setCharacter]= useState({})
    const navigate = useNavigate()

    useEffect(()=>{
        fetch(`http://rickandmortyapi.com/api/character/${detailId}`)
        .then((res)=> res.json())
        .then((data)=> setCharacter(data))
        .catch((error)=> alert('algo salio mal'))
    },[])
console.log(character)
    return(
        <div className={styles.container}>
        <button className={styles.detailBtn} onClick={()=> navigate(-1)}>Atras</button>
            <div className={styles.textDiv}> 
                <h1>NOMBRE: {character.name}</h1>
                <h1>STATUS: {character.status}</h1>
                <h1>ESPECIE: {character.species}</h1>
                <h1>GENERO: {character.gender}</h1>
                <h1>ORIGEN: {character.origin?.name}</h1>
            </div>
            <img className={styles.image} src={character.image} alt="" />        
            
        </div>
    )
}