import {useState} from 'react'
import './App.css'
import Cards from './components/Cards/Cards'
import Nav from './components/Nav/Nav'

function App () {
  const [characters, setCharacters] = useState([])

  const onSearch = (id)=> {
    characters.filter(obj=> obj.id == id).length > 0 ? alert ('ESTA CARD YA EXISTE'):
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then(response => response.json())
    .then(data => data.name ? setCharacters((oldChars)=> [...oldChars, data]): alert('NO EXISTE!!'))
    .catch((error)=> console.log(error))
  }

  const onClose = (id)=> {
    setCharacters(characters.filter(char=> char.id !== id))
  }

  return (
    <div className='App' style={{ padding: '25px' }}>
      <Nav onSearch={onSearch}/>
      <Cards characters ={characters} onClose={onClose}/>          
    </div>
  )
}

export default App
