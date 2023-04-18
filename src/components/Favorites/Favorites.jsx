import { connect, useDispatch } from "react-redux";
import Card from "../Card/Card";
import styles from './Favorite.module.css'
import { orderCards, filterCards } from "../Reducer/actions";


const Favorites = ({myFavorites}) => {
    const dispatch = useDispatch()
    
    const handleChange = (e)=>{
        const{name, value} = e.target;
        name === 'orden' && dispatch(orderCards(value));
        name === 'filtro' && dispatch(filterCards(value));                
    }

    return (
        <div>
        <select onChange={handleChange} name="orden" >
            <option value="Ascendente">Ascendente</option>
            <option value="Descendente">Descendente</option>
        </select>
        <select onChange={handleChange} name="filtro">
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Genderless">Genderless</option>
            <option value="unknown">unknown</option>
        </select>
        
        <div className={styles.div}>
            {myFavorites?.map(({id, name, species, gender, image})=>(
                <Card
                id={id}
                key={id}        
                name={name}
                species={species}
                gender={gender}
                image={image}
                />
            ))}
        </div>
        </div>
    )
};

const mapStateToProps = (state)=>{
    return{myFavorites: state.myFavorites, allcharacters: state.allcharacters}
}


export default connect(mapStateToProps,null)(Favorites)