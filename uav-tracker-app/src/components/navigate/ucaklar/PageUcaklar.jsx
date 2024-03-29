
import React, { useState } from 'react';
import axios from 'axios';

import './PageUcaklar.css';

//components 
import EnterUavUcaklar from './EnterUavUcaklar.jsx'
import DynamicTableUcaklar from './DynamicTableUcaklar.jsx';



function PageUcaklar() {

  
  const [tableData, setTableData] = useState([]);
  const [enterData, setEnterData] = useState(false);

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

  return (
    <>
      <div className="flex-container"> 
        <DynamicTableUcaklar tableData={tableData} setTableData={setTableData} setEnterData={setEnterData}/>
        {enterData && (
            <EnterUavUcaklar onChangeData={addNewData} setEnterData={setEnterData}/>
          )}
        
      </div>
    </>
  );
}

export default PageUcaklar;