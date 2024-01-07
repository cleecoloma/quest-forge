import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Create from './components/Create';
import QuestForge from './components/QuestForge';
import UserProvider from './context/User';
import './App.css';

function App() {
  return (
    <Router>
      <UserProvider>
        <div className='content'>
          <Header />
          <Routes>
            <Route
              exact
              path='/'
              element={
                <>
                  <Hero />
                </>
              }
            ></Route>
            <Route exact path='/create' element={<Create />}></Route>
            <Route exact path='/quest' element={<QuestForge />}></Route>
          </Routes>
          <Footer />
        </div>
      </UserProvider>
    </Router>
  );
}

export default App;
