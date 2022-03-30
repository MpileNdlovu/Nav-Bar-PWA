import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import About from './Pages/About';
import Services from './Pages/Services';
import Contacts from './Pages/Contact';


function App() {
  return (
    <BrowserRouter> 
       <Routes>
        <Route exact path='/' element={<Home />} >         
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services />} />
          <Route path='/contact-us' element={<Contacts />} />      
        </Route>         
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/sign-in' element={<SignIn />} />         
       </Routes>
    </BrowserRouter>
  );
}

export default App;
