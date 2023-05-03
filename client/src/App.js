import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "./styles/App.css"
import { Home } from './views/Home';
import { NotFound } from './views/NotFound';

export const App = () =>{

    return (
      <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='*' element={<NotFound/>}/>
          </Routes>
      </BrowserRouter>
     
      </div>
    );
  }
