import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Create from './components/Create'
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          exact
          path='/'
          element={
            <>
              <Hero />
              <Footer />
            </>
          }
        ></Route>
        <Route exact path='/create' element={<Create />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
