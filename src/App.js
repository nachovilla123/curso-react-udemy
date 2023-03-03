import logo from './logo.svg';
import './App.css';
import Welcome from './components/welcome';
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom'; 
import Contact from './pages/Contact';
import AboutMe from './pages/AboutMe';
import Profile from './pages/Profie';
import imageRickMorty from './images/rick-morty.png'

function App() {

  const reqApi = async () => {
   const api = await fetch('https://rickandmortyapi.com/api/character');
   const characterApi = await api.json();
   console.log(characterApi);
  };

  return (
    <div className="App">
      <header className="App-header">

      <h1 className='title'>Rick & Morty</h1>
      <img src={imageRickMorty} alt='Rick & Morty' className='img-home'></img>
      <button onClick={reqApi} className="btn-search">Buscar personajes</button>

        <Router>
          <div>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/contact">Contacto</Link>
              </li>
              <li>
                <Link to="/aboutme">About Me</Link>
              </li>
              <li>
                <Link to="/profile">Profile</Link>
              </li>
            </ul>
          </div>
          <Routes>
            <Route path="/contact" element={<Contact />} />
            <Route path="/aboutme" element={<AboutMe />} />
            <Route path="/profile/:name" element={<Profile />} />
          </Routes> 
        </Router>
        
      </header>
    </div>
  );
}

export default App;
