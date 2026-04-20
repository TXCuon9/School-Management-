import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
