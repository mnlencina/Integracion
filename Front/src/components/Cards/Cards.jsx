import React from 'react';
import Card from '../Card/Card';
import styles from './Cards.module.css'

export default function Cards(props) {
   const { characters, onClose } = props;
   return <div className={styles.cards}>
      {characters.map(char =>
      <Card
         id={char.id}
         key={char.id}        
         name={char.name}
         species={char.species}
         gender={char.gender}
         image={char.image}
         origin={char.origin}
         status={char.status}
         onClose={() => onClose(char.id)}
        />)}
   </div>;
}
