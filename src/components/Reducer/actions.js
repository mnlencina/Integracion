import { ADD_FAVORITE, DELETE_FAVORITE } from "./actionsTypes"

export const addFavorite = (char)=>{

    return {type: ADD_FAVORITE, payload: char}
}

export const deleteFavorite = (id)=>{

    return {type: DELETE_FAVORITE, payload: id}
}