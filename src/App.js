import React from 'react'
import Navbar from "./components/Navbar";
import Hero from './components/Hero'
import './App.scss';

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero/>
      <Card/>
    </div>
  )
}

export default App
