import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import CardList from './components/CardList';
import NavBar from './components/NavBar';
import Breaks from './components/Breaks';
import Footer from './components/Footer';
import reportWebVitals from './reportWebVitals';

<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous"></link>

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <NavBar />
    <Breaks />
    <CardList />
    <Breaks />
    <Breaks />
    <Footer />

  </div>
  
);
reportWebVitals();