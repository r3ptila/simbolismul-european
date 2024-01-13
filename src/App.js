import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home'
import Lectii from './components/pages/Lectii'
import Teste from './components/pages/Teste'

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route path='/Lectii' element={<Lectii/>} />
          <Route path='/Teste' element={<Teste/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
