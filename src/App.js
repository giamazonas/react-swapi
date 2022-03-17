import './App.css';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom'
import StarshipList from './pages/StarshipList/StarshipList';

function App() {
  
  return (
    <div className="App">
      <Routes>
        <Route path='/starship-list' element={<StarshipList />} />

      </Routes>
    </div>
  );
}

export default App;
