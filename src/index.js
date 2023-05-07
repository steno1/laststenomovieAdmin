import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AuthContextProvider } from './context/authContext/AuthContext';
import { MovieContextProvider } from './context/movieContext/movieContext';
import { ListContextProvider } from './context/ListContext/movieContext/listContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <AuthContextProvider>
  <MovieContextProvider>
  <ListContextProvider>
        <App/>
  </ListContextProvider>
  </MovieContextProvider>
  </AuthContextProvider>
  </React.StrictMode>
);


