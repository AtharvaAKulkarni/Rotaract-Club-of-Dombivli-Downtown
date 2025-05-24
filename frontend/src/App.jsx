import './App.css'
import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import { Navbar } from './components/Navbar'
import { Home } from './pages/Home'
import { Footer } from './components/Footer';
import { AboutUs } from './pages/About';
function App() {
  return (
    <>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<AboutUs/>}/>
        </Routes>
        <Footer/>
    </>
  )
}

export default App
