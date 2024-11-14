import React from 'react';
import Sidebar from './sidebar';
import Content from './content';
import './App.css';

function App() {
  return (
    <div className="app">
      <Sidebar />
      <Content />
    </div>
  );
}

export default App;
