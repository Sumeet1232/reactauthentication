import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import  Home from './Home';
import  Login from './Login';
import  Register from './Register';

function App() {
  return (
    <div className="App">
      <ToastContainer theme='colored'></ToastContainer>
     <Router>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
      </Routes>

     </Router>
    </div>  
  );
}

export default App;
