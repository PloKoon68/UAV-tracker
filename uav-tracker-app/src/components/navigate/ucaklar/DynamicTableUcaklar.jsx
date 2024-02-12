import React, { useState } from 'react';
import { UCAKLAR_FEATURES } from './ucaklarData.js'


const DynamicTable = (getPls) => {
  const [tableData, setTableData] = useState([]);
  const [trackData, setTrackData] = useState(null);

  
  //table add 
  const addRow = (newData) => {
    setTableData([...tableData, newData]);
  };
  
  //table delete
  const deleteRow = (rowIndex) => {
    
    let newData = [...tableData];
    newData.splice(rowIndex,1)

    setTableData(newData);

  };
  
  //en son sonsuz döngüde kaldı burada set tekrar çağırınca
  if(getPls.newData !== trackData){
      addRow(getPls.newData);
      setTrackData(getPls.newData);
  }

  return (
    <div className="container">
      <h2>Uçaklar Tablosu</h2>
      <table className="table table-bordered table-striped">
        <thead className="thead-dark">
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