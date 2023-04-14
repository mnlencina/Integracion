import { connect } from "react-redux";
import Card from "../Card/Card";
import styles from './Favorite.module.css'

const Favorites = ({myFavorites}) => {
    return (
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
    )
};

const mapStateToProps = (state)=>{
    return{myFavorites: state.myFavorites}
}

export default connect(mapStateToProps,null)(Favorites)