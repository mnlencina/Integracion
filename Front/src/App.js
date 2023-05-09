import {useState, useEffect} from 'react'
import './App.css'
import Cards from './components/Cards/Cards'
import Nav from './components/Nav/Nav'
import { Route, Routes, useLocation, useNavigate} from 'react-router-dom'
import About from './components/About/About'
import Detail from './components/Detail/Detail'
import Form from './components/Form/Form'
import Favorites from './components/Favorites/Favorites'
import axios from 'axios'


function App () {
  const navigate = useNavigate()
  const location = useLocation()
  const [characters, setCharacters] = useState([])
  const [access, setAccess] = useState(false);
  
  const onSearch = async(id)=> {
    if (characters.filter(obj=> obj.id === +id).length > 0 ) throw alert ('ESTA CARD YA EXISTE')
    let {data} = await axios(`http://localhost:3001/rickandmorty/character/${id}`)
    try {
      data.name ? setCharacters((oldChars)=> [...oldChars, data]): alert('NO EXISTE!!')      
    } catch (error) {
      console.log('ERROR EN APP',error)      
    }
  }

  const onClose = (id)=> {
    setCharacters(characters.filter(char=> char.id !== id))
  }


/* const login = (userData)=> {
   if (userData.userName === userName && userData.password === password){
      
      setAccess(true);
      navigate('/home');
   }
} */
function login(userData) {
  const { userName:email, password } = userData;
  const URL = 'http://localhost:3001/rickandmorty/login/';
  axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
     const { access } = data;
     setAccess(data);
     access && navigate('/home');
  });
}

const logOut = ()=>{
  setAccess(false);
  navigate('/');
}
  
  useEffect(() => {
    !access && navigate('/');
 }, [access, navigate]);

  return (
    <div className='App' style={{ padding: '25px' }}>
      {location.pathname !== '/' && <Nav onSearch={onSearch} logOut={logOut}/>}
      <Routes>
        <Route path='/' element={<Form login={login}/>} />
        <Route path='home' element={<Cards characters ={characters} onClose={onClose}/>} />
        <Route path='about' element={<About/>} />
        <Route path='detail/:detailId' element={<Detail/>} />
        <Route path='favorites' element={<Favorites/>} />
      </Routes>
            
    </div>
  )
}

export default App
