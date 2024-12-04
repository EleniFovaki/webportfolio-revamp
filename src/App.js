import React from 'react';
import NavBar from './components/NavBar';
import Introduction from './components/Introduction';
import About from './components/About';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <div className="Elements">
      <Introduction></Introduction>
      <About></About>
      <Contact></Contact>
      </div>
    </div>
  );
}

export default App;
