import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter} from 'react-router-dom'
import App from './App';
import { FavouritescontextProvider } from './store/favourites-context';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <FavouritescontextProvider>

  <BrowserRouter>
    <App /> 
  </BrowserRouter>
  </FavouritescontextProvider>
);

