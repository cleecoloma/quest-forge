import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Create from './components/Create';
import QuestForge from './components/QuestForge';
import UserProvider from './context/User';
import LoadingProvider from './context/Loading';
import './App.css';

function App() {
  return (
    <Router>
      <LoadingProvider>
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
      </LoadingProvider>
    </Router>
  );
}

export default App;
