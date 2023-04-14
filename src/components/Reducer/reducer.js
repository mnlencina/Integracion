
import { ADD_FAVORITE, DELETE_FAVORITE } from "./actionsTypes";

const initialState = {
    myFavorites:[]
};

const reducer = (state = initialState, {type, payload}) =>{

    switch (type) {
        case ADD_FAVORITE:
            return {...state, myFavorites:[...state.myFavorites, payload]}
            
        case DELETE_FAVORITE:
            const Del = state.myFavorites.filter((char)=> char.id !== payload)
            return {...state, myFavorites: Del}
    
        default:
            return {...state}
    }
}

export default reducer