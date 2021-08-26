import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { UserContextProvider } from './context/UserContext'
import { PokemonContextProvider } from './context/PokemonContext'

import './index.css';
import './css/Global.css';
import 'bootstrap/dist/css/bootstrap.min.css'

ReactDOM.render(
  <React.StrictMode>
    <UserContextProvider>
      <PokemonContextProvider>
        <App />
      </PokemonContextProvider>
    </UserContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
