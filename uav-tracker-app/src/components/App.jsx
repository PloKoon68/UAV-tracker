
import React from 'react';
import '../App.css';
import { useState } from 'react';

//components
import DynamicTable from './navigate/DynamicTable.jsx'
import EnterUav from './navigate/EnterUav.jsx'


function App() {
  const [dataState, setDataState] = useState(null);
  //console.log("Achieved new Data: ", dataState)


  function updateDataState(newData)  {
    //console.log(newData)
    setDataState(newData);
  }
  return (
    <>
      <header className="App-header">
      </header>
      <DynamicTable newData={dataState}/>
      <EnterUav  newRow={updateDataState}/>
    </>
  );
}

export default App;


