import React from 'react'
import './App.css';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Cart from './components/Cart';

import DataProvider from './context/DataProvider';

import {BrowserRouter, Routes, Route} from "react-router-dom";
import DetailView from './components/DetailView';

function App() {
  return (
    <DataProvider>
    <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path ='/' element={<Home />} /> 
          <Route path ='/product/:id' element={<DetailView />} />
          <Route path ='/cart' element={<Cart />} />
        </Routes>      
    </BrowserRouter>
    </DataProvider>    
  );
}

export default App;
