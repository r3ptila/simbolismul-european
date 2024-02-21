import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home'
import Lectii from './components/pages/Lectii'
import Teste from './components/pages/Teste'
import Lectia1 from './components/pages/lectii/lectia1'
import Lectia2 from './components/pages/lectii/lectia2'
import Lectia3 from './components/pages/lectii/lectia3'
import Lectia32 from './components/pages/lectii/lectia32'
import Lectia33 from './components/pages/lectii/lectia33'

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route path='/Lectii' element={<Lectii/>} />
          <Route path='/Lectii/Lectia1' element={<Lectia1/>} />
          <Route path='/Lectii/Lectia2' element={<Lectia2/>} />
          <Route path='/Lectii/Lectia3' element={<Lectia3/>} />
          <Route path='/Lectii/Lectia32' element={<Lectia32/>} />
          <Route path='/Lectii/Lectia33' element={<Lectia33/>} />
          <Route path='/Teste' element={<Teste/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
