import './App.css';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom'
import StarshipList from './pages/StarshipList/StarshipList';
import StarshipDetails from './pages/StarshipDetails/StarshipDetails';
import NavBar from './pages/NavBar/NavBar';

function App() {
  const [navItems, setNavItems] = useState([
    
  ])

  return (
    <div className="App">
      <NavBar navItems={navItems} />
      <Routes>
        <Route path='/' element={<StarshipList />} />
        <Route path='/starship' element={<StarshipDetails />} />
      </Routes>
    </div>
  );
}

export default App;
