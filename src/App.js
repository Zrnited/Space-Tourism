import React from 'react'
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Destination from './pages/Destination';
import Crew from './pages/Crew';
import Tech from './pages/Tech';


function App() {
  return (
    <div className="App">
      {/* <BrowserRouter> */}
        <Router>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/destination' element={<Destination/>} />
            <Route path='/crew' element={<Crew/>} />
            <Route path='/technology' element={<Tech/>} />
          </Routes>
        </Router>
      {/* </BrowserRouter> */}
    </div>
  );
}

export default App;
