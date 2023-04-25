import { ADD_FAVORITE, DELETE_FAVORITE, FILTER, ORDER } from "./actionsTypes"

export const addFavorite = (char)=>{

    return {type: ADD_FAVORITE, payload: char}
}

export const deleteFavorite = (id)=>{

    return {type: DELETE_FAVORITE, payload: id}
}

export const filterCards = (gender)=>{

    return {type: FILTER, payload: gender}
}

export const orderCards = (order)=>{

    return {type: ORDER, payload: order}
}