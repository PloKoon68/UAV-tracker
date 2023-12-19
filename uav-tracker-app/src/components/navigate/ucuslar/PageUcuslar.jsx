
import React from 'react';
import { useState } from 'react';
import './PageUcuslar.css';

//components
import DynamicTableUcuslar from './DynamicTableUcuslar.jsx'
import EnterUavUcuslar from './EnterUavUcuslar.jsx'


function PageUcuslar() {
  const [dataState, setDataState] = useState(null);


  function updateDataState(newData)  {
    setDataState(newData);
  }

 

  return (
    <>
      <div className="app-container">
        <header className="App-header">
            <div className="flex-container">
              <DynamicTableUcuslar newData={dataState} />
              <EnterUavUcuslar newRow={updateDataState} />
            </div>
        </header>
      </div>
      
    </>
  );
}

export default PageUcuslar;


