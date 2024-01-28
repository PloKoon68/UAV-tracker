
import React from 'react';
import { useState } from 'react';
import './PageUcaklar.css';

//components
import DynamicTableUcaklar from './DynamicTableUcaklar.jsx'
import EnterUavUcaklar from './EnterUavUcaklar.jsx'


function PageUcaklar() {
  const [dataState, setDataState] = useState(null);

/*
  function updateDataState(newData)  {
    setDataState(newData);
  }
*/

  return (
    <>
      <div className="flex-container">
        <DynamicTableUcaklar newData={dataState} />
        <EnterUavUcaklar newRow={setDataState} />
      </div>
    </>
  );
}

export default PageUcaklar;


