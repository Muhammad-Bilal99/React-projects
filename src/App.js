import React from 'react'
import About from "./components/About";
import Footer from "./components/Footer";
import Info from "./components/Info";
import './styles.scss';

const App = () => {
  return (
    <div className='App'>
      <Info/>
      <About/>
      <Footer/>
    </div>
  )
}

export default App
