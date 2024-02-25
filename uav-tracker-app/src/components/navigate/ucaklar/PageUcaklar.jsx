
import React, { useEffect, useState } from 'react';
import axios from 'axios';




import './PageUcaklar.css';

//components 
import EnterUavUcaklar from './EnterUavUcaklar.jsx'
import DynamicTableUcaklar from './DynamicTableUcaklar.jsx'


function PageUcaklar() {

  
  const [tableData, setTableData] = useState([]);
  const [apiData, setApiData] = useState(null);
  

  const notIn = function(newData) {
    let i;
    for(i = 0; i < tableData.length; i++) {
      let j;
      for(j = 0; j < tableData[0].length; j++) if(tableData[i][j] !== newData[j]) break;
      if(j === tableData[0].length) break;
    }
    return i === tableData.length;
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
      
        <DynamicTableUcaklar tableData={tableData} deleteRow = {deleteRow} />
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