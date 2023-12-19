import React, { useState } from 'react';
import { UCAKLAR_FEATURES } from './ucaklarData.js'


const DynamicTable = (getPls) => {
  const [tableData, setTableData] = useState([]);
  const [trackData, setTrackData] = useState(null);

  
  
  const addRow = (newData) => {
    setTableData([...tableData, newData]);
  };
//  console.log("go through: ", tableData.map((row, rowIndex) => console.log(row, rowIndex)))

  const deleteRow = (rowIndex) => {
    
    let newData = [...tableData];
    newData.splice(rowIndex,1)

    setTableData(newData);

  };
  
  //en son sonsuz döngüde kaldı burada set tekrar çağırınca
  if(getPls.newData !== trackData){
      console.log("not equal!: ", getPls.newData)
      addRow(getPls.newData);
      setTrackData(getPls.newData);
      //setTableData();
  }

  return (
    <div>
        <table>
            <thead>
            <tr>
                {UCAKLAR_FEATURES.map((feature) => <th key={feature.id}>{feature.label}</th>)}
            </tr>
            </thead>

            <tbody>
            {tableData.map((row, rowIndex) => (
              
            <tr key={rowIndex}>
              {row.map((item, columnIndex) => (
                <td key={columnIndex}>{item}</td>
              ))}
              <td>
                <button onClick={() => deleteRow(rowIndex)}>Delete</button>
              </td>
            </tr>
          ))}
            </tbody>
        </table>
    </div>
  );
};

export default DynamicTable;