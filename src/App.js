import './App.css';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom'
import StarshipList from './pages/StarshipList/StarshipList';
import StarshipDetails from './pages/StarshipDetails/StarshipDetails';

function App() {
  
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<StarshipList />} />
        <Route path='/starship-details' element={<StarshipDetails />} />
      </Routes>
    </div>
  );
}

export default App;
