import React from 'react';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Home from './component/Home';
import Login from './component/Login';
import Registeration from './component/Registeration';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/Login" element={<Login/>}/>
          <Route path="/Registeration" element={<Registeration/>}/>
          <Route path="/Home" element={<Home/>}/>
          
        </Routes>
      </BrowserRouter>



   
    </div>
  );
}

export default App;
