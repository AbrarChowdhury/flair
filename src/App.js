import React from 'react';
import HomePage from "./pages/home/homePage.component"
import Navbar from './components/navbar/navbar.component'
import './App.scss';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <HomePage/>
    </div>
  );
}

export default App;
