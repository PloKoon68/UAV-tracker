
import React, { useState } from 'react';
import axios from 'axios';




import './PageUcaklar.css';

//components 
import EnterUavUcaklar from './EnterUavUcaklar.jsx'

import BasicDemo from './testTable.jsx';



function PageUcaklar() {

  
  const [tableData, setTableData] = useState([]);

  

  const notIn = function(newData) {
    for(let i = 0; i < tableData.length; i++) 
      if((JSON.stringify(tableData[i]) === JSON.stringify(newData))) return false;
    return true;
  }

  const addNewData = (newData)=>{
    //first write to db, then fetch from db
  
    
    if(notIn(newData)) {
      setTableData(prevData =>[...prevData, newData]);

      axios({
        url: 'http://localhost:4000/submit',
        method: 'post',
        data: newData
      })
      .then(res => {console.log(res.data)})
      .catch(function (error) {
          console.log("errored: ", error);
      });
    }
    //else, pop a warning
  
 }
  
  //used in DynamicTableUcaklar -> delete buttons
  const deleteRow = (rowIndex) => {
    let newData = [...tableData];
    newData.splice(rowIndex, 1);

    setTableData(newData);
  };
  

  return (
    <>
      <div className="flex-container"> 
        <BasicDemo tableData={tableData} setTableData={setTableData}/>
        <EnterUavUcaklar onChangeData={addNewData} />
      </div>
    </>
  );
}

export default PageUcaklar;



/*
import React from 'react';
import { useState } from 'react';
import './PageUcaklar.css';

//components 
import EnterUavUcaklar from './EnterUavUcaklar.jsx'


function PageUcaklar() {
  const [dataState, setDataState] = useState([]);

  const onChangeData = (newDataState)=>{
    setDataState(prevDataState => [...dataState, newDataState]);
  }
  
  //  <DynamicTableUcaklar newData={dataState} />
  return (
    <>
      <div className="flex-container"> 
        <EnterUavUcaklar newData={dataState} onChangeData={onChangeData} />
      </div>
    </>
  );
}

export default PageUcaklar;


*/