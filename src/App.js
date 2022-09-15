import React from 'react';
import './App.css';
import Header from './components/Header';
import Introduce from './components/Introduce';
import ServiceFirst from './components/ServiceFirst';

function App() {
  return (
    <div className="App">
      <header className="App-header">        
        <Header />
        <Introduce />
        <ServiceFirst />
      </header>
    </div>
  );
}

export default App;
