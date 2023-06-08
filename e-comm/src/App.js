import React from 'react'
import './App.css';
import Home from './pages/Home';
import DataProvider from './context/DataProvider';

function App() {
  return (
    <>
    <DataProvider>
       <Home/> 
    </DataProvider>    
    </>
  );
}

export default App;
