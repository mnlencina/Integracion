import axios from "axios";
import { ADD_FAVORITE, DELETE_FAVORITE, FILTER, ORDER, ADD_USER } from "./actionsTypes"

/* export const addFavorite = (char)=>{

    return {type: ADD_FAVORITE, payload: char}
} */
export const addFavorite = (char) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav';
    return async (dispatch) => {
        let {data} = await axios.post(endpoint, char);
            return dispatch({
             type: ADD_FAVORITE,
             payload: data,
          });       
    };
 };

/* export const deleteFavorite = (id)=>{

    return {type: DELETE_FAVORITE, payload: id}
} */
export const deleteFavorite = (id) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
    return async (dispatch) => {
       let {data} = await axios.delete(endpoint)
          return dispatch({
             type: DELETE_FAVORITE,
             payload: data,
       });       
    };
 };

export const filterCards = (gender)=>{

    return {type: FILTER, payload: gender}
}

export const orderCards = (order)=>{

    return {type: ORDER, payload: order}
}