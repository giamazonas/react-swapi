import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { Route, Routes } from 'react';
import StarshipList from './pages/StarshipList/StarshipList';

function App() {
  
  return (
    <div className="App">
      <Route path='/starship-list' element={<StarshipList />} />
    </div>
  );
}

export default App;
