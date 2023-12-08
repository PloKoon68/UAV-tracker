import React from 'react';
import '../App.css';

//components
import DynamicTable from './DynamicTable.jsx'
import EnterUav from './EnterUav.jsx'


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
