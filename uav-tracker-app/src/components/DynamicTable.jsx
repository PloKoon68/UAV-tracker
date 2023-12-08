import React, { useState } from 'react';
import { FEATURES } from './data.js'


const DynamicTable = () => {
  const [tableData, setTableData] = useState([]);

  const addRow = () => {
    setTableData([...tableData, ['a', 'b','c', 'd', 'e']]);
  };
//  console.log("go through: ", tableData.map((row, rowIndex) => console.log(row, rowIndex)))

  const deleteRow = (rowIndex) => {
    
    let newData = [...tableData];
    newData.splice(rowIndex,1)

    setTableData(newData);

  };
  return (
    <div>
      <button onClick={addRow}>Add Row</button>
        <table>
            <thead>
            <tr>
                {FEATURES.map((feature) => <th key={feature.id}>{feature.label}</th>)}
            </tr>
            </thead>

            <tbody>
            {tableData.map((row, rowIndex) => (
              
            <tr key={rowIndex}>
              {row.map((item) => (
                <td key={item}>{item}</td>
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