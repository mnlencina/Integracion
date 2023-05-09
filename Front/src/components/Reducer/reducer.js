
import { ADD_FAVORITE, DELETE_FAVORITE, FILTER, ORDER } from "./actionsTypes";

const initialState = {
    myFavorites:[],
    allCharacters:[]
};

const reducer = (state = initialState, {type, payload}) =>{
    switch (type) {
    
        case ADD_FAVORITE:
            return { ...state, myFavorites: payload, allCharacters: payload };
            
        /* case ADD_FAVORITE:
            return {
                ...state,
                myFavorites:[...state.myFavorites, payload],
                allCharacters:[...state.myFavorites, payload]
            } */
        case DELETE_FAVORITE:
            return { ...state, myFavorites: payload, allCharacters: payload };
            /* const Del = state.myFavorites.filter((char)=> char.id !== payload)
            const Del2 = state.allCharacters.filter((char)=> char.id !== payload)
            
            return {...state, myFavorites: Del, allCharacters: Del2} */
            
        case FILTER:
            const {allCharacters} = state;
            if(payload === 'All') return {...state, myFavorites: state.allCharacters}
            let filtered = allCharacters.filter((chard)=> chard.gender === payload)
            return {...state, myFavorites: filtered}
            
        case ORDER:            
            const ordernado = [...state.myFavorites].sort((a,b)=> payload === 'Ascendente' ? a.id-b.id : b.id-a.id);
            return {...state, myFavorites: ordernado}
    
        default:
            return {...state}
    }
}

export default reducer