import axios from "axios";
import { ADD_FAVORITE, DELETE_FAVORITE, FILTER, ORDER} from "./actionsTypes"
const {URL_BACK} = process.env
/* export const addFavorite = (char)=>{

    return {type: ADD_FAVORITE, payload: char}
} */
export const addFavorite = (char) => {
    const endpoint = `${URL_BACK}/fav`;
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
    const endpoint = `${URL_BACK}/fav/${id}`;
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