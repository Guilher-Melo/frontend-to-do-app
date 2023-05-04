import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import React from 'react';
import Menu from './template/Menu';
import { BrowserRouter } from 'react-router-dom';
import Rotas from './routes';

export default function App (props) {
  return (
    <div className="container">
      <BrowserRouter>
        <Menu/>
        <Rotas/>
      </BrowserRouter>
    </div>
  )
} 
  

