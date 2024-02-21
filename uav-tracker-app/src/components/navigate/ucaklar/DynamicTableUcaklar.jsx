import React, { useEffect, useState } from 'react';
import { UCAKLAR_FEATURES } from './ucaklarData.js'


function DynamicTable(props) {

  

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
          {props.tableData.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((item, columnIndex) => (
                  <td key={columnIndex}>{item}</td>
                ))}
                <td>
                  <button onClick={() => props.deleteRow(rowIndex)}>Delete</button>
                </td>
              </tr>
            ))
          }
 
        </tbody>
      </table>
    </div>
  );
}

export default DynamicTable;