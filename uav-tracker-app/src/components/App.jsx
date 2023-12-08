import React from 'react';
import '../App.css';
import { useState } from 'react';

//components
import DynamicTable from './DynamicTable.jsx'
import EnterUav from './EnterUav.jsx'


function App() {
  const [tableData, setTableData] = useState([]);


  return (
    <>
      <nav></nav>
      <header className="App-header">
      </header>
      <DynamicTable tableData={tableData}/>
      <EnterUav />
    </>
  );
}

export default App;
