import { useState } from 'react'
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Hero />
      <Footer />
    </>
  );
}

export default App
