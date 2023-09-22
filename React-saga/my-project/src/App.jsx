import React from 'react';
import MainData from './Component/MainData';
import { Route , Routes } from 'react-router-dom';
import Cart from './Redux/Cart';
import Header from './Component/Header';


function App() {

  
   
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<MainData/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
    </div>
  );
}

export default App;
