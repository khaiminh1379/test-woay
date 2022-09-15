import React from 'react';
import './App.css';
import FeatureFirst from './components/FeatureFirst';
import Header from './components/Header';
import Introduce from './components/Introduce';
import ServiceFirst from './components/ServiceFirst';
import ServiceSeccond from './components/ServiceSeccond';

function App() {
  return (
    <div className="App">
      <header className="App-header">        
        <Header />
        <Introduce />
        <ServiceFirst />
        <FeatureFirst />
        <ServiceSeccond />
      </header>
    </div>
  );
}

export default App;
