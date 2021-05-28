import React from 'react'
import './App.css';
import NavBar from './Components/NavBar'
import Home from './Components/Home'
import Projects from './Components/Projects'
import Specialization from './Components/Specialization'
import Referals from './Components/Referals'
import SupportInfo from './Components/SupportInfo'
import Benefits from './Components/Benefits'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <Projects />
      <Specialization />
      <Referals />
      <SupportInfo />
      <Benefits />
    </div>
  );
}

export default App;
