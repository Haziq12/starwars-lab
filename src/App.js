import './App.css';
import { Route, Routes } from 'react-router-dom';
import StarshipPage from './pages/StarshipsPage/StarshipPage';
import Starships from './pages/Starships/Starships';



function App() {
  
  return (
    <>

      <div className='nav'>STARWARS STARSHIPS</div> 

      <Routes>
        <Route path='/' element={<Starships />} />
        <Route path='/StarshipPage' element={<StarshipPage />} />
      </Routes>

    </>
  );
}

export default App;