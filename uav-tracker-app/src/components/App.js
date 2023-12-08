import React from 'react';
import '../App.css';

//components
import DynamicTable from './DynamicTable.js'
import EnterUav from './EnterUav.js'


function App() {
  return (
    <>
      <nav></nav>
      <header className="App-header">
      </header>
      <DynamicTable />
      <EnterUav />
    </>
  );
}

export default App;
