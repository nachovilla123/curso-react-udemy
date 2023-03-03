import logo from './logo.svg';
import './App.css';
import Welcome from './components/welcome';
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom'; 
import Contact from './pages/Contact';
import AboutMe from './pages/AboutMe';
import Profile from './pages/Profie';
import imageRickMorty from './images/rick-morty.png'
import { useState } from 'react';
import Characters from './components/Characters';

function App() {
  const [characters,setCharacters] = useState(null);
  

  const reqApi = async () => {
   const api = await fetch('https://rickandmortyapi.com/api/character');
   const characterApi = await api.json();
   setCharacters(characterApi.results)
  };
  console.log(characters);

  return (
    <div className="App">
      <header className="App-header">

      <h1 className='title'>Rick & Morty</h1>
      {characters ? (// cuando characters tiene algo muestro los personajes, cuando no, muestro el boton para buscarlos.
        <Characters characters={characters} setCharacters={setCharacters}></Characters>
      ) : (
        <>
        <img src={imageRickMorty} alt='Rick & Morty' className='img-home'></img>
        <button onClick={reqApi} className="btn-search">Buscar personajes</button>
        </>
      ) }
      
      
    
        
      </header>
    </div>
  );
}

export default App;
